import ApiService from './api.service'

const AddressService = {

    getUserAddress: async function() {
        try {
            const response = await ApiService.get("/addresses/user/")
            debugger
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