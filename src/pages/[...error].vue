<template>
    <v-card class="mx-auto" max-width="800">
        <v-card-title>Văn bản có thể mở rộng</v-card-title>

        <v-card-text>
            <div :class="{ 'text--truncated': !expanded }">
                {{ longText }}
            </div>

            <v-btn
                @click="expanded = !expanded"
                text
                color="primary"
                class="mt-2"
            >
                {{ expanded ? "Thu gọn" : "Xem thêm" }}
                <v-icon right>
                    {{ expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}
                </v-icon>
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            longText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
      nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl
      nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
      aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
      ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget
      nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
      eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies
      tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.

      Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla
      sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed
      magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum
      sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.

      Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero
      malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor
      at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
      Sed porttitor lectus nibh.`,
        };
    },
};
</script>

<style>
.text--truncated {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
