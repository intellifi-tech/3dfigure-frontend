import ApiService from './api.service'

const FigureService = {

    getUserFigures: async function () {
        try {
            const response = await ApiService.get("/figures")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    saveUserFigure: async function (data) {
        try {
            const response = await ApiService.post("/figures", data)
            return response.data
        } catch (error) {
            return error.response.status
        }
    }
}

export default FigureService

export {
    FigureService
}