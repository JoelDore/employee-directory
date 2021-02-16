import axios from "axios";

const URL = "https://randomuser.me/api/?nat=US&noinfo&results=";

// const getUsers = (number) => axios.get(URL + number);

export default {
    getUsers: function (number) {
        return axios.get(URL + number)
    }
}