import ApiService from './api.service'

const CategoryService = {

    getAllCategories: async function () {
        try {
            const response = await ApiService.get("/categories")
            return response.data
        } catch (error) {
            return error
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    deleteCategory: async function(id) {
        try {
            const response = await ApiService.delete("/categories/" + id)
            return response.data
        } catch (error) {
            return error
        }
    },

    updateCategory: async function(data) {
        try {
            const response = await ApiService.put("/categories", data)
            return response.data
        } catch (error) {
            return error
        }
    },

    addCategory: async function(data) {
        try {
            const response = await ApiService.post("/categories", data)
            return response.data
        } catch (error) {
            return error
        }
    }
}

export default CategoryService

export {
    CategoryService
}