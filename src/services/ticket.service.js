import ApiService from './api.service'

const TicketService = {

    getAllTickets: async function () {
        try {
            const response = await ApiService.get("/tickets")
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    deleteCategory: async function(id) {
        try {
            const response = await ApiService.delete("/categories/" + id)
            return response.data
        } catch (error) {
            return error
        }
    },

    updateCategory: async function(data) {
        try {
            const response = await ApiService.put("/categories", data)
            return response.data
        } catch (error) {
            return error
        }
    },

    addCategory: async function(data) {
        try {
            const response = await ApiService.post("/categories", data)
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default TicketService