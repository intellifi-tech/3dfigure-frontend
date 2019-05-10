import ApiService from './api.service'

const FigureService = {

    getUserFigures: async function () {
        try {
            const response = await ApiService.get("/account")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default FigureService

export {
    FigureService
}