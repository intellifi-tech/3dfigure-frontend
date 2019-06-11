/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {
    getToken() {
        return this.$store.general.appToken
    },

    saveToken(accessToken) {
        this.$store.general.appToken = accessToken
    },

    removeToken() {
        this.$store.general.appToken = ""
    },

    getAvatarToken() {
        return this.$store.general.avatarToken
    },

    saveAvatarToken(avatarToken) {
        this.$store.general.avatarToken = avatarToken
    },

    removeAvatarToken() {
        this.$store.general.avatarToken = ""
    },

    addClickedPhoto(avatarKey) {
        this.$store.general.singleFigure = avatarKey
    },

    getClickedPhoto() {
        return this.$store.general.singleFigure
    }
}

export {
    TokenService
}