import * as axios from 'axios'


const instance = axios.create({baseURL: 'https://api.unsplash.com/', headers:{'Content-Type': 'application/json', 'Authorization': 'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'}})

export const photosAPI = {
    getPhotos(page){
        return instance.get(`photos/?page=${page}`).then(response => response.data)
    }
}
