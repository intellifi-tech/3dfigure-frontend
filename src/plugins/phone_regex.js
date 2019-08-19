import {
    helpers
} from "vuelidate/lib/validators";
export default helpers.regex('alpha', /^((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/)