import ApiService from './api.service'

const CategoryService = {

    getAllCategories: async function () {
        try {
            const response = await ApiService.get("/categories")
            return response.data
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
}

export default CategoryService

export {
    CategoryService
}