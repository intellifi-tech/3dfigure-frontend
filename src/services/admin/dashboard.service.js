import ApiService from '../api.service'

const DashboardService = {

    getCustomerCard: async function() {
        try {
            const response = await ApiService.get("/admin/allMember")
            return response.data
        } catch (error) {
            return error
        }
    },

    getTotalOrder: async function() {
        try {
            const response = await ApiService.get("/admin/orderCount")
            return response.data
        } catch (error) {
            return error
        }
    },

    getTotalPrice: async function() {
        try {
            const response = await ApiService.get("/admin/totalPrice")
            return response.data
        } catch (error) {
            return error
        }
    },

    getUsersMonthly: async function() {
        try {
            const response = await ApiService.get("/admin/user/monthly")
            return response.data
        } catch (error) {
            return error
        }
    },

    getOrdersMonthly: async function() {
        try {
            const response = await ApiService.get("/admin/order/monthly")
            return response.data
        } catch (error) {
            return error
        }
    },

    getFiguresMonthly: async function() {
        try {
            const response = await ApiService.get("/admin/figure/monthly")
            debugger
            return response.data
        } catch (error) {
            return error
        }
    },
    
    getAgeCategory: async function() {
        try {
            const response = await ApiService.get("/admin/user/age")
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default DashboardService

export {
    DashboardService
}