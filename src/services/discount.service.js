import ApiService from './api.service'

const DiscountService = {

   getRate: async function (code) {
       try {
           const response = await ApiService.get("/mailing/" + code)
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },
}

export default DiscountService

export {
    DiscountService
}