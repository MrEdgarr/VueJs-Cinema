<template>
    <div>
        <div class="grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-5 md:grid-cols-4">
            <div
                class="cursor-pointer transition-shadow md:overflow-hidden md:rounded-lg md:shadow-md md:hover:shadow-lg"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <div>
                    <div class="overflow-hidden rounded-lg md:rounded-none">
                        <span>
                            <v-img
                                alt="Mua vé Lotte Cinema săn bắp nước miễn phí trên MoMo!"
                                :src="value.images"
                                :lazy-src="value.images"
                                cover
                                aspect-ratio="1"
                            />
                        </span>
                    </div>
                    <div class="md:px-4 py-2 pr-0">
                        <div
                            class="line-clamp-2 pt-2 xs:text-sm text-xs sm:line-clamp-none sm:pb-1 font-semibold sm:leading-snug md:landing:text-grey-900"
                        >
                            {{ value.title }}
                        </div>
                        <div class="hidden sm:bottom-2 sm:flex">
                            <span class="text-xs text-grey-500">
                                {{ value.text }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pt-5" v-if="items.length != itemsLoaded.length">
            <v-btn
                :size="$vuetify.display.xs ? 'small' : 'default'"
                variant="outlined"
                @click="loadMore"
            >
                Xem thêm
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script>
import itemnew from "@/utils/data/ObjectNew";
export default {
    props: {
        isLoading: {
            type: Boolean,
        },
    },
    data() {
        return {
            items: itemnew, // mảng
            lengthItems: 8, // độ dài ban đầu của mảng
        };
    },
    methods: {
        // tăng độ dài ban đầu của mảng
        loadMore() {
            if (this.lengthItems > this.items.length) return;
            this.lengthItems += 4;
        },
    },
    computed: {
        // hàm tính toán sẽ trả về mảng mới dựa trên biến items
        itemsLoaded() {
            return this.items.slice(0, this.lengthItems);
        },
    },
};
</script>
<style lang=""></style>
