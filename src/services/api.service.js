import axios from 'axios'
import { TokenService } from './token.service'

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    getBaseURL() {
        return axios.defaults.baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    getHeader() {
        return axios.defaults.headers.common["Authorization"];
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    imagePost(resource, data) {
        return axios.post(resource, data, 
            {headers: {'Content-Type': 'multipart/form-data'}}
        )
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
}

export default ApiService