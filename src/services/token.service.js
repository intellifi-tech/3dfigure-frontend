/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/

import store from '@/store/store.js'
const TokenService = {
    getToken() {
        return store.state.api.javaToken
    },

    saveToken(accessToken) {
        store.commit('api/SET_JAVA_TOKEN', accessToken)
    },

    removeToken() {
        store.commit('api/SET_JAVA_TOKEN', "")
    },

    getAvatarToken() {
        return store.state.api.avatarToken
    },

    saveAvatarToken(avatarToken) {
        store.commit('api/SET_AVATAR_TOKEN', avatarToken)
    },

    removeAvatarToken() {
        store.commit('api/SET_AVATAR_TOKEN', "")
    }
}

export {
    TokenService
}