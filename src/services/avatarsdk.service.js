import axios from 'axios'
import {
    TokenService
} from './token.service'
const AvatarSdkService = {
    setToken() {
        const formData = new FormData();
        formData.append('grant_type', process.env.VUE_APP_GRANT_TYPE)
        formData.append('client_id', process.env.VUE_APP_CLIENT_ID)
        formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
        axios.post(process.env.VUE_APP_AVATAR_SDK_TOKEN_API, formData).then(res => {
            TokenService.saveAvatarToken(res.data.access_token)
        }).catch(() => {

        })
    }
}

export default AvatarSdkService