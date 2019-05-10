import axios from 'axios'
const AvatarSdkService = {
    setToken() {
        const formData = new FormData();
        formData.append('grant_type', process.env.VUE_APP_GRANT_TYPE)
        formData.append('client_id', process.env.VUE_APP_CLIENT_ID)
        formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
        return axios.post(process.env.VUE_APP_AVATAR_SDK_TOKEN_API, formData)
    }
}

export default AvatarSdkService