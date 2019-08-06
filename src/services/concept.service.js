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
    searchConcept: async function (isDouble, text) {
        try {
            const response = await ApiService.get("/concepts/search/" + isDouble + "/"+text)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    searchConceptAdmin: async function(text) {
        try {
            const response = await ApiService.get("/concepts/search/"+text)
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
    getAllConceptsAdmin: async function (page) {
        try {
            const response = await ApiService.get("/concepts/admin/?page=" + page + "&size=8")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    createConcept: async function(concept) {
        try {
            const response = await ApiService.post("/concepts", concept)
            return response.data
        } catch (error) {
            return error
        }
    },

    updateConcept: async function(concept) {
        try {
            const response = await ApiService.put("/concepts", concept)
            return response.data
        } catch (error) {
            return error
        }
    },

    exportConcept: async function() {
        try {
            const response = await ApiService.get("/concepts/export")
            return response.data.content
        } catch (error) {
            return error
        }
    }
}

export default ConceptService

export {
    ConceptService
}