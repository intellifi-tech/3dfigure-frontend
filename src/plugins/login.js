const LOGIN_URL = "http://localhost:8080/api/authenticate"
const SIGNUP_URL = 'register/'

import axios from 'axios';

export default {

    user: {
        authenticated: false
    },

    login(creds) {
        axios
            .post(
                LOGIN_URL, creds, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            });
    },

    signup(context, creds, redirect) {
        context.$http.post(SIGNUP_URL, creds, (data) => {
            localStorage.setItem('id_token', data.id_token)

            this.user.authenticated = true

            if (redirect) {
                console.log(redirect);
            }

        }).error((err) => {
            context.error = err
        })
    },

    logout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if (jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }
    },


    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    }
}