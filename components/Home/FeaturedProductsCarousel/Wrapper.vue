<script lang="ts" setup></script>

<template>
    <div class="hpp__featuredProductsCarouselWrapper py-[31px]">
        <div class="container mx-auto px-[15px]">
            <div class="featured__productsCarouselInner">
                <div class="section__header mb-[20px]">
                    <h2 class="font-headings font-bold text-black text-[33px] mb-0">Featured Products</h2>
                </div>
                <ClientOnly>
                    <HomeFeaturedProductsCarouselItemSlider />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>