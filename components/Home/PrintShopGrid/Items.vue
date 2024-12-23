<script lang="ts" setup>

</script>

<template>
    <div class="hpp__printShopInner">
        <div class="grid grid-cols-3 gap-[20px]">
            <div class="grid__item">
                <div class="grid__inner h-full shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                    <div class="thumb__wrapper">
                        <img src="/images/shop-by-print/shop-by-material-thumbnail.jpg" alt="Shop By Materials"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrapper px-[25px] pt-[15px] pb-[20px]">
                        <h3>Shop by Material</h3>
                        <p>From high-end metals for key chains to soft fabrics for shirts to durable plastics, we
                            deliver excellence in every print.</p>
                    </div>
                </div>
            </div>
            <div class="grid__item">
                <div class="grid__inner h-full shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                    <div class="thumb__wrapper">
                        <img src="/images/shop-by-print/shop-by-use-thumbnail.jpg" alt="Shop By Use"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrapper px-[25px] pt-[15px] pb-[20px]">
                        <h3>Shop by Use</h3>
                        <p>Whether you're a business owner or organizer and need custom printing for branding, gifting,
                            or personal use, we deliver flexible services for all purposes.</p>
                    </div>
                </div>
            </div>
            <div class="grid__item">
                <div class="grid__inner h-full shadow-[0_1px_5px_0_rgba(0,0,0,0.25)]">
                    <div class="thumb__wrapper">
                        <img src="/images/shop-by-print/shop-by-size-thumbnail.jpg" alt="Shop By Size"
                            class="w-full h-auto" />
                    </div>
                    <div class="desc__wrapper px-[25px] pt-[15px] pb-[20px]">
                        <h3>Shop by Size</h3>
                        <p>Choices are available for compact designs to large-scale creations in small or large printing
                            formats, visualizing a picture-perfect message.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hpp__printShopInner {
    .grid__item {
        .grid__inner {
            .thumb__wrapper {}

            .desc__wrapper {
                h3 {
                    @apply font-headings font-bold text-[#2F2F2F] text-[18px] leading-[20px] mb-[10px];
                }

                p {
                    @apply font-description font-normal text-[#868688] text-[14px] leading-[18px]
                }
            }
        }
    }
}
</style>
