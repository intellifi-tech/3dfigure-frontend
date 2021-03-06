import ApiService from './api.service'

const CheckoutService = {

    getUserCheckout: async function () {
        try {
            const response = await ApiService.get("/baskets/user")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    isLastBasket: async function () {
        try {
            const response = await ApiService.get("/baskets/user")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    createCheckout: async function () {
        try {
            var credential = {
                last: true
            }
            const res = await ApiService.post("/baskets", credential)
            return res.data

        } catch (error) {
            return error.response.data
        }
    },
    deleteFromBasket: async function (ids) {
        try {
            const res = await ApiService.delete("/baskets/concept/" + ids.f + "/" + ids.c)
            return res.data
        } catch (error) {
            error.response.data
        }
    },

    sendOrder: async function (order) {
        try {
            const res = await ApiService.post("/orders", order)
            return res.data
        } catch (error) {
            error.response.data
        }
    }
}

export default CheckoutService

export {
    CheckoutService
}