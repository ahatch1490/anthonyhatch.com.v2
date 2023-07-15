<template>
    <div class="container border-2 mt-5 ">
        <div class="flex flex-wrap">
            <div v-for="i in count" >
                <div class="m-5">
                    <img  class="h-96 max-w-md rounded " :src="get_image_url(i)" alt="image" />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>


</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";

const count = 7;
const get_image_url= (id: number) => {
    return `/images/Gallery/Gallery1/lib${id}.jpg`;
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
