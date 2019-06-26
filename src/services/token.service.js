/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/

import store from '@/store/store.js'
const TokenService = {
    getToken() {
        return sessionStorage.getItem('a')
        //return store.state.api.javaToken
    },

    saveToken(accessToken) {
        sessionStorage.setItem('a', accessToken)
        //store.commit('api/SET_JAVA_TOKEN', accessToken)
    },

    removeToken() {
        sessionStorage.setItem('a', "")
    },

    getAvatarToken() {
        return sessionStorage.getItem('b')
        //return store.state.api.avatarToken
    },

    saveAvatarToken(avatarToken) {
        sessionStorage.setItem('b', avatarToken)
        //store.commit('api/SET_AVATAR_TOKEN', avatarToken)
    },

    removeAvatarToken() {
        sessionStorage.setItem('b', "")
        //store.commit('api/SET_AVATAR_TOKEN', "")
    }
}

export {
    TokenService
}