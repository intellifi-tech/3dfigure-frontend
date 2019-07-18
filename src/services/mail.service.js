import ApiService from './api.service'

const MailService = {

   sendMail: async function (mail) {
       try {
           const response = await ApiService.sendMail("/mailing", mail)
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