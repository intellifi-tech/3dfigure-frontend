import ApiService from './api.service'

const PaymentService = {

    pay: async function (order) {
        try {
            const response = await ApiService.post("/iyzico", order)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    iyzicoForm: async function(order) {
        try {
            const response = await ApiService.post("/iyzico-form", order)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default PaymentService