import axiosClient from "./axios-config"
import { defineCancelApiObject } from "./axios-utils"

export const MoviesAPI = {

    get: async function(id, cancel = false){
        const response = await axiosClient.request({
            url:`/movies/${id}`,
            method: 'GET',
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },

    getAll: async function(id, cancel = false){
        const response = await axiosClient.request({
            url:'/movies',
            method: 'GET',
            signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    }
}

const cancelApiObject = defineCancelApiObject(MoviesAPI);