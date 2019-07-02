import ApiService from './api.service'

const OrderService = {

    getAllOrders: async function (page) {
        try {
            const response = await ApiService.get("/orders/user?page=" + page + "&size=4")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    getAllOrdersForAdmin: async function() {
        try {
            const response = await ApiService.get("/orders/admin")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    updateOrder: async function(order) {
        try {
            const response = await ApiService.put("/orders", order)
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default OrderService

export {
    OrderService
}