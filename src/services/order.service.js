import ApiService from './api.service'

const OrderService = {

    getAllOrders: async function (page) {
        try {
            const response = await ApiService.get("/orders/user?page=" + page + "&size=8")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    searchOrder: async function(text) {
        try {
            const response = await ApiService.get("/orders/search/"+text.toUpperCase())
            return response.data
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    getUsersAllOrders: async function (userId) {
        try {
            const response = await ApiService.get("/orders/admin/"+userId)
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
    },

    deleteOrder: async function(id) {
        try {
            const response = await ApiService.delete("/orders/"+id)
            return response.data
        } catch (error) {
            return error
        }
    },

    getSketchName: async function(ids) {
        try {
            const response = await ApiService.get("/orders/sketch/"+ids)
            return response.data
        } catch (error) {
            return error
        }
    },
        getOrderDetail: async function(id) {
        try {
            const response = await ApiService.get("/orders/"+id)
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