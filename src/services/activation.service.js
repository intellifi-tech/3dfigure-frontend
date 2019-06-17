import ApiService from './api.service'

const ActivationService = {

    activateUser: async function (key) {
        try {
            const response = await ApiService.get("/activate?key=" + key)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default ActivationService

export {
    ActivationService
}