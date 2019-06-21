import ApiService from './api.service'

const PlaceService = {

    getCities: async function () {
        try {
            const response = await ApiService.get("/cities")
            return response.data.sort(function (a, b) {
                return a.name.localeCompare(b.name)
            })
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    getTownsByCity: async function (cityId) {
        try {
            const response = await ApiService.get("/towns/city/" + cityId)
            return response.data.sort(function (a, b) {
                return a.name.localeCompare(b.name)
            })
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default PlaceService

export {
    PlaceService
}