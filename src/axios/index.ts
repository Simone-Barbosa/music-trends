import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'https://api.spotify.com/v1' });

axiosInstance.interceptors.request.use((config) => {
    const token = 'BQAvHozOcFz7VWeAMVP1plPYRlX3bqhTNe2XrKhXcxi00yhw33N1PsgzGozwcRHZ-_oofV6_IeHCft6E8_HqQhmyjylPhehmVPpoaxov6U5rRNaPJTE';

    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

export async function getToken() {
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

    if(response.data.access_token){
        document.cookie = `access_token=${response.data.access_token}`
    }

    console.log(document.cookie);
}
