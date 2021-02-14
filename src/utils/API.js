import axios from "axios";

const URL = "https://randomuser.me/api/?results=";

const getUser = (number) => axios.get(URL + number);

export default getUser