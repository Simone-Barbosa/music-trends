import axios from 'axios';
import dayjs from 'dayjs';
import { Cookies } from 'react-cookie';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'DD-MM-YYYYTHH:mm:ss';

export const axiosInstance = axios.create({ baseURL: 'https://api.spotify.com/v1' });

axiosInstance.interceptors.request.use(async (config) => {
    let token: string;

    const cookies = new Cookies();

    const getToken = cookies.get('access_token');
    const getTokenDate = cookies.get('expiration_token');

    if (getToken && getTokenDate && dayjs().isBefore(dayjs(getTokenDate, dateFormat))) {
        token = getToken;
    } else {
        token = await generateToken();
    }

    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

export async function generateToken() {
    const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_API_CLIENT_ID,
            client_secret: import.meta.env.VITE_API_CLIENT_SECRET,
        },
    });

    const newToken = response.data.access_token;
    const timeExpires = response.data.expires_in;

    if (newToken) {
        const cookies = new Cookies();
        const dateExpiration = new Date(new Date().getTime() + timeExpires * 1000);
        const dateExpirationToken = dayjs().add(timeExpires, 'second').format(dateFormat);

        cookies.set('access_token', newToken, { expires: dateExpiration });
        cookies.set('expiration_token', dateExpirationToken);
    }
    return newToken;
}
