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
    addToBasket: async function (concept) {
        try {
            const res = await ApiService.put("/baskets/added", concept)
            return res.data
        } catch (error) {
            return error.response.status
        }
    },
    deleteFromBasket: async function (conceptId) {
        try {
            const res = await ApiService.delete("/baskets/concept/" + conceptId)
            return res.data
        } catch (error) {
            error.response.data
        }
    },
    isConceptAdded: async function (conceptId) {
        try {
            const res = await ApiService.get("/baskets/isAdded/" + conceptId)
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