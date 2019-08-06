/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {
    getToken() {
        return localStorage.getItem('a') == null || localStorage.getItem('a') == "" ? sessionStorage.getItem('a') : localStorage.getItem('a')
        //return store.state.api.javaToken
    },

    saveToken(accessToken, rememberMe) {
        !rememberMe ? sessionStorage.setItem('a', accessToken) : localStorage.setItem('a', accessToken)
        //store.commit('api/SET_JAVA_TOKEN', accessToken)
    },

    removeToken() {
        sessionStorage.setItem('a', "")
        localStorage.setItem('a', "")
    },

    getAvatarToken() {
        return localStorage.getItem('b') == null || localStorage.getItem('b') == "" ? sessionStorage.getItem('b') : localStorage.getItem('b')
        //return store.state.api.avatarToken
    },

    saveAvatarToken(avatarToken, rememberMe) {
        !rememberMe ? sessionStorage.setItem('b', avatarToken) : localStorage.setItem('b', avatarToken)
        //store.commit('api/SET_AVATAR_TOKEN', avatarToken)
    },

    removeAvatarToken() {
        sessionStorage.setItem('b', "")
        localStorage.setItem('b', "")
        //store.commit('api/SET_AVATAR_TOKEN', "")
    }
}

export {
    TokenService
}