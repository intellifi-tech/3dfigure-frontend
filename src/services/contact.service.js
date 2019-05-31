import ApiService from './api.service'

const ContactService = {

    sendMail: async function (payload) {
        try {
            const response = await ApiService.post("/contact", payload)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default ContactService

export {
    ContactService
}