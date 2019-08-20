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

    getAllUsersTickets: async function () {
        try {
            const response = await ApiService.get("/tickets/user")
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    saveTicketImages: async function (files) {
        try {
            const response = await ApiService.post("/images/ticket", files)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    getAllTicketChats: async function(ticketId) {
        try {
            const response = await ApiService.get("/chats/ticket/" + ticketId)
            return response
        } catch (error) {
            return error.response
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    saveTicket: async function(ticket) {
        try {
            const response = await ApiService.post("/tickets", ticket)
            return response
        } catch (error) {
            return error.response
        }
    },

    saveChat: async function(chat) {
        try {
            const response = await ApiService.post("/chats", chat)
            return response
        } catch (error) {
            return error.response
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