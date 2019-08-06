import ApiService from './api.service'

const DiscountService = {

    getRate: async function (code) {
        try {
            const response = await ApiService.get("/discounts/" + code)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    saveDiscount: async function (discount) {
        try {
            const response = await ApiService.post("/discounts", discount)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    updateDiscount: async function (discount) {
        try {
            const response = await ApiService.put("/discounts", discount)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    deleteDiscount: async function (id) {
        try {
            const response = await ApiService.delete("/discounts/" + id)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    getAllDiscounts: async function () {
        try {
            const response = await ApiService.get("/discounts")
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