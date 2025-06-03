import axios from "axios";

const accessToken = JSON.parse(localStorage.getItem("accessToken")) ?? "";
export default () => {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Accept: "application/json",
            // Authorization: "Bearer" + localStorage.getItem(TOKEN),
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
