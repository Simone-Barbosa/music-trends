import { axiosInstance } from './axios';

export const urlImageAbout = 'https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png';

export async function getArtist(id: number) {
    const response = await axiosInstance.get(`artists/${id}`);

    return response;
}

export async function getTracks(id: number) {
    const response = await axiosInstance.get(`artists/${id}/top-tracks/?market=BR`);

    return response;
}
