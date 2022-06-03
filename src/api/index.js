import axios from "axios";

const fetcher = axios.create({
    baseUrl: "http://locahost:5000",
});

export default fetcher;

