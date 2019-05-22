import ApiService from './api.service'

const ConceptService = {

    getAllConcepts: async function (page) {
        try {
            const response = await ApiService.get("/concepts?page=" + page + "&size=6")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    getConceptsInFigure: async function () {
        try {
            const response = await ApiService.get("/concepts/figure")
            return response.data
        } catch (error) {
            return error.response.status
        }
    }
}

export default ConceptService

export {
    ConceptService
}