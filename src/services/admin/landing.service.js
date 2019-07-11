import ApiService from '../api.service'

const LandingService = {

   getFirst: async function () {
       try {
           const response = await ApiService.get("/landing/first")
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },

   getSecond: async function () {
       try {
           const response = await ApiService.get("/landing/second")
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },

   getThird: async function () {
       try {
           const response = await ApiService.get("/landing/third")
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },

   getFourth: async function () {
        try {
            const response = await ApiService.get("/landing/fourth")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    uploadImage: async function(formData) {
        try {
            const response = await ApiService.imagePost("/images/landing", formData)
            return response.data
        } catch (error) {
            return error
        }
    },

   getAll: async function () {
       try {
           const response = await ApiService.get("/landing/all")
           return response.data
       } catch (error) {
           return error.response.status
           // throw new AuthenticationError(error.response.status, error.response.data.detail)
       }
   },

   searchModel: async function (text) {
        try {
            const response = await ApiService.get("/landing/search/"+text)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

   save: async function (data) {
    try {
        const response = await ApiService.post("/landing", data)
        return response.data
    } catch (error) {
        return error.response.status
        // throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
    },

    update: async function (data) {
        try {
            const response = await ApiService.put("/landing", data)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    delete: async function (id) {
        try {
            const response = await ApiService.delete("/landing/" + id)
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
}

export default LandingService

export {
   LandingService
}