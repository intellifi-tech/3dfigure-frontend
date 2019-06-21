import ApiService from './api.service'

const ConceptService = {

    getAllConcepts: async function (page, isDouble) {
        try {
            const response = await ApiService.get("/concepts/dashboard/" + isDouble + "?page=" + page + "&size=8")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    getAllConceptsByCategory: async function (ids, page, isDouble) {
        try {
            const response = await ApiService.get("/concepts/cat/" + ids + "/" + isDouble + "?page=" + page + "&size=8")
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