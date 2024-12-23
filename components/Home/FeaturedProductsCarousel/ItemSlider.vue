<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import KeenSlider from 'keen-slider';

const slider = ref<HTMLElement | null>(null); // Ref for the slider container
let keenSlider: KeenSlider | null = null; // Declare keenSlider in the outer scope

const current = ref(0);

onMounted(() => {
    if (slider.value) {
        keenSlider = new KeenSlider(slider.value, {
            // mode: "free-snap",
            loop: true,
            slides: {
                perView: 4,
                spacing: 30,
            },
            slideChanged: (s) => {
                if (s?.track?.details) {
                    current.value = s?.track?.details?.rel // Ensure track details are available
                }
            },
        });
    }
});
</script>

<template>
    <div class="hpp__featuredProductsCarouselWrap relative">
        <div class="carousel__btnsWrapper absolute -top-[60px] right-0">
            <button @click="keenSlider?.prev()" aria-label="previous"
                class="rounded-full shadow-icon-button border border-[#D9D9D9] bg-white transition-all hover:bg-[#592033] active:border-[#592033] mr-[15px] rounded-full group"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                    class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg></button>
            <button @click="keenSlider?.next()" aria-label="next"
                class="rounded-full shadow-icon-button border border-[#D9D9D9] bg-white transition-all hover:bg-[#592033] hover:border-[#592033] active:border-[#592033] group"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                    class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg></button>
        </div>
        <div ref="slider" class="keen-slider !hidden sm:!flex !overflow-hidden grow-0">
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/wax-seal-thumbnail.jpg" alt="Wax Seal"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Wax Seal</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/wax-bar-thumbnail.jpg" alt="Wax Bar"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Wax Bar</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/lanyard-thumbnail.jpg" alt="Lanyard"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Lanyard</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/crystal-usb-thumbnail.jpg" alt="Crystal USB"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Crystal USB</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/wax-seal-thumbnail.jpg" alt="Wax Seal"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Wax Seal</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/wax-bar-thumbnail.jpg" alt="Wax Bar"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Wax Bar</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/lanyard-thumbnail.jpg" alt="Lanyard"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Lanyard</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap hpp__featuredGridItem">
                        <NuxtLink to="#">
                            <div class="thumb__wrap">
                                <img src="/images/featured-grid/crystal-usb-thumbnail.jpg" alt="Crystal USB"
                                    class="w-full h-auto" />
                            </div>
                            <div class="desc__wrap py-[17px] px-[23px]">
                                <h2 class="my-0 text-[20px] font-bold color-[#1A202C]">Crystal USB</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
