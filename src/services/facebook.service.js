import ApiService from './api.service'

const FacebookService = {

    getFaceInfos: async function(token) {
        try {
            const response = await ApiService.get("https://graph.facebook.com/me?fields=id,name,email&access_token="+token)
            return response
        } catch (error) {
            return error.response
        }
    }
}

export default FacebookService

export {
    FacebookService
}