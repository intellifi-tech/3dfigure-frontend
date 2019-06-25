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
            const response = await ApiService.put("/users/up", member)
            return response.data
        } catch (error) {
            return error.response.status
        }
    }
}

export default UserService

export {
    UserService
}