// Utilities
import { defineStore } from "pinia";
import AuthServices from "@/_services/modules/movieService";

export const movieAppStore = defineStore("movie", {
    state: () => ({
        movies: null,
        status: null,
    }),
    actions: {
        async fetchAll() {
            await AuthServices.getAll()
                .then((res) => {
                    this.movies = res.data.content;
                    console.log(this.movies);
                })
                .catch((error) => {
                    this.status = error.response.data;
                });
        },
        async postApiMovie(items) {
            const fd = new FormData();
            for (let key in items) {
                fd.append(key, items[key]);
            }
            await AuthServices.postMovie(fd)
                .then((res) => {
                    this.status = res.data;
                })
                .catch((error) => {
                    this.status = error.response.data;
                });
        },
        async updatedApiMovie(items) {
            const fd = new FormData();
            for (let key in items) {
                fd.append(key, items[key]);
            }
            await AuthServices.updateMovie(fd)
                .then((res) => {
                    this.status = res.data;
                })
                .catch((error) => {
                    this.status = error.response.data;
                });
        },
        async deleteApiMovie(_id) {
            await AuthServices.deleteMovie(_id)
                .then((res) => {
                    this.status = res.data;
                })
                .catch((error) => {
                    this.status = error.response.data;
                });
        },
    },
});
