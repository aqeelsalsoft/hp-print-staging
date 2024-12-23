<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    buttontext: {
      type: String,
      default: () => ''
    },
});
</script>

<template>
    <div v-if="title" class="hpp__ctaBarWrapper bg-[#592033] py-[30px]">
        <div class="container mx-auto px-[15px]">
            <div class="cta__innerWrap flex items-center">
                <div class="desc__wrap w-[70%]">
                    <h3 class="font-headings font-bold text-white text-[33px] leading-[37px] mb-[5px]">{{ title }}</h3>
                    <p class="font-description font-normal text-white text-[14px] mb-0">{{ description }}</p>
                </div>
                <div class="btn__wrapper w-[30%] text-right">
                    <a href="#" class="font-headings font-bold inline-block bg-white text-[#592033] text-[14px] leading-[14px] px-[22px] py-[14px]">{{ buttontext }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
