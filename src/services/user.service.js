import ApiService from './api.service'

const UserService = {

    getMember: async function () {
        try {
            const response = await ApiService.get("/account")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    // for first login update 
    setMember: async function (member) {
        try {
            const response = await ApiService.put("/users", member)
            return response.data
        } catch (error) {
            return error.response.status
        }
    },

    updatePassword: async function (passwordDTO) {
        try {
            const response = await ApiService.post("/account/change-password", passwordDTO)
            return response.data
        } catch (error) {
            return error
        }

    },

    getAllUsers: async function () {
        try {
            const response = await ApiService.get("/admin/users")
            return response.data
        } catch (error) {
            return error
        }

    },

    userDelete: async function(login) {
        try {
            const response = await ApiService.delete("/admin/users/"+ login)
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default UserService

export {
    UserService
}