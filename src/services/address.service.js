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

    saveUserAddress: async function(adres) {
        try {
            const response = await ApiService.post("/addresses", adres)
            return response.data
        } catch (error) {
            return error.response.status
        }
    }
}

export default AddressService

export {
    AddressService
}