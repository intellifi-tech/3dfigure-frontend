/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {
    getToken() {
        return sessionStorage.getItem(process.env.VUE_APP_TOKEN_KEY)
    },

    saveToken(accessToken) {
        sessionStorage.setItem(process.env.VUE_APP_TOKEN_KEY, accessToken)
    },

    getAvatarToken() {
        return sessionStorage.getItem(process.env.VUE_APP_AVATAR_TOKEN_KEY)
    },

    saveAvatarToken(avatarToken) {
        sessionStorage.setItem(process.env.VUE_APP_AVATAR_TOKEN_KEY, avatarToken)
    },

    removeToken() {
        sessionStorage.removeItem(process.env.VUE_APP_TOKEN_KEY)
    }
}

export {
    TokenService
}