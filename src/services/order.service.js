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
    }
}

export default OrderService

export {
    OrderService
}