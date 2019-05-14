import ApiService from './api.service'

const ConceptService = {

    getAllConcepts: async function (page) {
        try {
            const response = await ApiService.get("/concepts?page=" + page + "&size=4")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    }
}

export default ConceptService

export {
    ConceptService
}