import axios from 'axios'
import {TokenService} from './token.service'
const AvatarSdkService = {
    setToken() {
        const formData = new FormData();
        formData.append('grant_type', process.env.VUE_APP_GRANT_TYPE)
        formData.append('client_id', process.env.VUE_APP_CLIENT_ID)
        formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
        return axios.post(process.env.VUE_APP_AVATAR_SDK_TOKEN_API, formData)
    },

    getAvatarInformation: async function(avatarKey) {
        return axios.get(process.env.VUE_APP_AVATAR_SDK_AVATAR_API + avatarKey, { headers: { Authorization: `Bearer ${TokenService.getAvatarToken()}` } })
    },

    getAvatarDownloadable: async function(avatarKey, type) {
        return axios.get(process.env.VUE_APP_AVATAR_SDK_AVATAR_API + avatarKey + '/' + type + '/', { headers: { Authorization: `Bearer ${TokenService.getAvatarToken()}` }, responseType: 'arraybuffer' })
    }
}

export default AvatarSdkService