import axios from "axios";

export const requestAPI = {
    test(success: boolean) {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}