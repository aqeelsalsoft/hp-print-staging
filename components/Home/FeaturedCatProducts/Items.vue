<script lang="ts" setup>

</script>

<template>
    <div class="hpp__featuredGridItemsListWrap">
        <div class="hpp__featuredGridItemsList grid grid-cols-4 gap-[30px]">

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumb__wrap">
                        <img src="/images/featured-grid/thumbnail-tshirts.jpg" alt="T Shirts Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">T Shirts</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/thumbnail-jersey.jpg" alt="Jersey Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Jersey</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/thumbnail-caps.jpg" alt="Caps Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Caps</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/decorative-pillows-and-cushions.jpg" alt="Pillows and Cushions Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Pillows and Cushions</h2>
                    </div>
                </NuxtLink>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
