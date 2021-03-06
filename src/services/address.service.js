import ApiService from './api.service'

const AddressService = {

    getUserAddress: async function() {
        try {
            const response = await ApiService.get("/addresses/user/")
            return response.data
        } catch (error) {
            return error.response.status
        }
    },

    getAddress: async function(id) {
        try {
            const response = await ApiService.get("/addresses/"+id)
            return response
        } catch (error) {
            return error.response
        }
    },

    getUserAddress2: async function(userId) {
        try {
            const response = await ApiService.get("/addresses/admin/"+userId)
            return response.data
        } catch (error) {
            return error.response.status
        }
    },

    saveUserAddress: async function(adres) {
        try {
            const response = await ApiService.post("/addresses", adres)
            return response.data
        } catch (error) {
            return error.response.status
        }
    },

    updateUserAddress: async function(adres) {
        try {
            const response = await ApiService.put("/addresses", adres)
            return response.data
        } catch (error) {
            return error.response.status
        }
    },

    deleteUserAddress: async function(adresId) {
        try {
            const response = await ApiService.delete("/addresses/"+adresId)
            return response
        } catch (error) {
            return error.response
        }
    }
}

export default AddressService

export {
    AddressService
}