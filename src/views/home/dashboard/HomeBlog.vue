<template>
    <div>
        <div class="text-center mb-5">
            <h2
                class="xs:text-2xl text-base font-bold after:bg-linear-(--my-gradient) after:block after:w-40 after:h-0.5 after:m-auto after:mt-2.5"
            >
                Blog phim ảnh
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
            <div
                class="h-full cursor-pointer"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <div
                    class="flex flex-wrap border-grey-300 pb-3 sm:pb-2 sm:border-none border-b"
                >
                    <div
                        class="order-2 w-28 pt-2 sm:order-1 sm:w-full sm:flex-auto sm:pt-0"
                    >
                        <div class="overflow-hidden rounded">
                            <v-img
                                alt="Danh sách phim hay Netflix tháng 5/2024"
                                :src="value.images"
                                :lazy-src="value.images"
                                class="w-full sm:h-36 h-16"
                                cover
                            />
                        </div>
                    </div>
                    <div
                        class="flex-1 pr-6 sm:order-2 sm:w-full sm:flex-auto sm:pr-0"
                    >
                        <div class="text-sm pt-3 font-semibold">
                            {{ value.title }}
                        </div>
                        <div class="text-grey-500">
                            <span class="text-xs">
                                {{ value.text }}k lượt xem
                            </span>
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
import itemblog from "@/utils/data/ObjectBlog";

export default {
    props: {
        isLoading: {
            type: Boolean,
        },
    },
    data() {
        return {
            items: itemblog, // mảng
            lengthItems: 8, // độ dài ban đầu của mảng
        };
    },
    methods: {
        // tăng độ dài ban đầu của mảng
        loadMore() {
            if (this.length > this.items.length) return;
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
<style lang="scss"></style>
