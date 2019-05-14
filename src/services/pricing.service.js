import ApiService from './api.service'

const PricingService = {

    getUserPricing: async function () {
        try {
            const response = await ApiService.get("/pricings/user")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default PricingService

export {
    PricingService
}