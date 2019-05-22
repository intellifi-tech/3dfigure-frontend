import ApiService from './api.service'

const FigureService = {

    getUserFigures: async function () {
        try {
            const response = await ApiService.get("/figures/user")
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
    },

    addAndDeleteFromFigure: async function (concept) {
        try {
            const res = await ApiService.put("/figures/added", concept)
            return res.data
        } catch (error) {
            return error.response.status
        }
    },
    isConceptAdded: async function (avatarKey, conceptId) {
        try {
            const res = await ApiService.get("/figures/isAdded/" + avatarKey + "/" + conceptId)
            return res.data
        } catch (error) {
            return error.response.data
        }
    },
    hasItConcept: async function (avatarKey) {
        try {
            const res = await ApiService.get("/figures/hasConcept/" + avatarKey)
            return res.data
        } catch (error) {
            return error.response.data
        }
    },
    getFigureId: async function (avatarKey) {
        try {
            const res = await ApiService.get("/figures/f/" + avatarKey)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
}

export default FigureService

export {
    FigureService
}