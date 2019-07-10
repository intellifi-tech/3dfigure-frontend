import ApiService from './api.service'

const MailService = {

   sendMail: async function (mailTo) {
       try {
           const response = await ApiService.post("/mailing", mailTo)
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },
}

export default MailService

export {
   MailService
}