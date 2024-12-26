<script lang="ts" setup>

</script>

<template>
    <div class="hpp__featuredGridItemsListWrap">
        <div class="hpp__featuredGridItemsList grid grid-cols-4 gap-[30px]">

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumb__wrap">
                        <img src="/images/featured-grid/fashion-lifestyle-thumbnail.jpg" alt="Fashion and Lifestyle Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Fashion and Lifestyle</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/trade-shows-events-thumbnail.jpg" alt="Trade Shows & Events Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Trade Shows &amp; Events</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/backdrops-exhibition-thumbnail.jpg" alt="Backdrops & Exhibition Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Backdrops &amp; Exhibition</h2>
                    </div>
                </NuxtLink>
            </div>

            <div class="item__wrap hpp__featuredGridItem">
                <NuxtLink to="#">
                    <div class="thumbnail">
                        <img src="/images/featured-grid/signage-thumbnail.jpg" alt="Signage Thumbnail"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrap py-[17px] px-[23px]">
                        <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Signage</h2>
                    </div>
                </NuxtLink>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
