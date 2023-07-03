<template>
<div class="container ">
    <div class="flex flex-wrap">
        <div v-for="i in count"  class="">
            <div class="m-5">
                <img  class="h-96 max-w-md rounded " :src="get_image_url(i)" alt="image" />
            </div>
        </div>
    </div>
</div>

</template>

<script setup lang="ts">
const count = 7;
const get_image_url= (id: number) => {
    return `/images/lib${id}.jpg`;
}
</script>
<style scoped>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>
