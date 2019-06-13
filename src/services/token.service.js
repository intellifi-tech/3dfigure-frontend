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

    removeToken() {
        sessionStorage.removeItem(process.env.VUE_APP_TOKEN_KEY)
    },

    saveAvatarId(index, avatarKey) {
        sessionStorage.setItem('avatar'.concat(index), avatarKey)
    },

    getAvatarId(index) {
        return sessionStorage.getItem('avatar'.concat(index))
    },

    getAvatarToken() {
        return sessionStorage.getItem(process.env.VUE_APP_AVATAR_TOKEN_KEY)
    },

    saveAvatarToken(avatarToken) {
        sessionStorage.setItem(process.env.VUE_APP_AVATAR_TOKEN_KEY, avatarToken)
    },

    removeAvatarToken() {
        sessionStorage.removeItem(process.env.VUE_APP_AVATAR_TOKEN_KEY)
    },

    addClickedPhoto(avatarToken) {
        sessionStorage.setItem("clicked", avatarToken)
    },

    getClickedPhoto() {
        return sessionStorage.getItem("clicked")
    }
}

export {
    TokenService
}