import API from "@/_services";

export default {
    getAll: () => API().get(`movies`),
    postMovie: (items) => API().post(`movies/create`, items),
    updateMovie: (items) => API().put(`movies/update`, items),
    deleteMovie: (_id) => API().delete(`movies/delete/${_id}`),
};
