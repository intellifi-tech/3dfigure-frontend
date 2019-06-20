import ApiService from './api.service'
import AvatarSdkService from '@/services/avatarsdk.service'
import CheckoutService from '@/services/checkout.service'
import {
    TokenService
} from './token.service'

const LoginService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws AuthenticationError 
     **/
    login: async function (credential) {
        try {
            const response = await ApiService.post("/authenticate", credential)
            const res = await AvatarSdkService.setToken()
            TokenService.saveToken(response.data.id_token)
            ApiService.setHeader()
            TokenService.saveAvatarToken(res.data.access_token)
            const checkoutRes = await CheckoutService.isLastBasket()
            if (checkoutRes === 404) {
                await CheckoutService.createCheckout()
            }

            // NOTE: We haven't covered this yet in our ApiService 
            //       but don't worry about this just yet - I'll come back to it later
            //ApiService.mount401Interceptor();

            return response.status
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    /**
     * Refresh the access token.
     **/
    register: async function (credential) {
        try {
            const response = await ApiService.post("/register", credential)
            return response.status
        } catch (error) {
            return error.response.status
            // throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
     **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        ApiService.removeHeader()
        TokenService.removeAvatarToken()

        // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
        //ApiService.unmount401Interceptor()
    }
}

export default LoginService

export {
    LoginService
}