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
                perView: 3,
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
                    <div class="item__wrap reviews__gridItem">
                        <NuxtLink to="#" class="block bg-[#F3F3F3] p-[30px]">
                            <div class="stars__iconWrap mb-[25px]">
                                <svg class="w-[130px] h-auto" viewBox="0 0 104 18" fill="none">
                                    <path d="M9.10077 0.562744L11.0177 6.46237H17.2209L12.2024 10.1085L14.1193 16.0082L9.10077 12.362L4.08224 16.0082L5.99915 10.1085L0.980625 6.46237H7.18386L9.10077 0.562744Z" fill="#592033"/>
                                    <path d="M30.9201 0.562744L32.837 6.46237H39.0402L34.0217 10.1085L35.9386 16.0082L30.9201 12.362L25.9016 16.0082L27.8185 10.1085L22.8 6.46237H29.0032L30.9201 0.562744Z" fill="#592033"/>
                                    <path d="M51.791 0.562744L53.7079 6.46237H59.9111L54.8926 10.1085L56.8095 16.0082L51.791 12.362L46.7724 16.0082L48.6893 10.1085L43.6708 6.46237H49.874L51.791 0.562744Z" fill="#592033"/>
                                    <path d="M73.6103 0.562744L75.5272 6.46237H81.7304L76.7119 10.1085L78.6288 16.0082L73.6103 12.362L68.5918 16.0082L70.5087 10.1085L65.4901 6.46237H71.6934L73.6103 0.562744Z" fill="#592033"/>
                                    <path d="M95.4296 0.562744L97.3465 6.46237H103.55L98.5312 10.1085L100.448 16.0082L95.4296 12.362L90.4111 16.0082L92.328 10.1085L87.3095 6.46237H93.5127L95.4296 0.562744Z" fill="#592033"/>
                                </svg>
                            </div>
                            <div class="review__headerWrap pb-[15px] border-b border-[#CACACA] mb-[15px]">
                                <h3 class="font-headings font-bold text-[#030303] text-[16px] mb-[5px]">Kristen Blue</h3>
                                <p class="font-description font-normal text-[#030303] text-[12px] mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                            </div>
                            <div class="review__descWrap mb-[40px]">
                                <p class="font-headings font-normal text-[#030303] text-[18px] mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                            </div>
                            <div class="review__authorWrap flex items-center">
                                <div class="icon__wrap w-[60px] border-2 border-white rounded-full shadow-[0_0_2_0_rgba(23,43,77,0.4),0px_3px_2px_0px_rgba(23,43,77,0.8)]">
                                    <img src="/images/review-author-company.png" alt="Author Company">
                                </div>
                                <div class="desc__wrap w-[calc(100%_-_60px)] px-[15px]">
                                    <h3 class="font-headings font-semibold text-[#030303] text-[16px] leading-[16px] mb-[5px]">Rachelle Robinett</h3>
                                    <span class="block font-headings font-normal text-#[030303] text-[16px] leading-[16px]">HRBLS</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap reviews__gridItem">
                        <NuxtLink to="#" class="block bg-[#F3F3F3] p-[30px]">
                            <div class="stars__iconWrap mb-[25px]">
                                <svg class="w-[130px] h-auto" viewBox="0 0 104 18" fill="none">
                                    <path d="M9.10077 0.562744L11.0177 6.46237H17.2209L12.2024 10.1085L14.1193 16.0082L9.10077 12.362L4.08224 16.0082L5.99915 10.1085L0.980625 6.46237H7.18386L9.10077 0.562744Z" fill="#592033"/>
                                    <path d="M30.9201 0.562744L32.837 6.46237H39.0402L34.0217 10.1085L35.9386 16.0082L30.9201 12.362L25.9016 16.0082L27.8185 10.1085L22.8 6.46237H29.0032L30.9201 0.562744Z" fill="#592033"/>
                                    <path d="M51.791 0.562744L53.7079 6.46237H59.9111L54.8926 10.1085L56.8095 16.0082L51.791 12.362L46.7724 16.0082L48.6893 10.1085L43.6708 6.46237H49.874L51.791 0.562744Z" fill="#592033"/>
                                    <path d="M73.6103 0.562744L75.5272 6.46237H81.7304L76.7119 10.1085L78.6288 16.0082L73.6103 12.362L68.5918 16.0082L70.5087 10.1085L65.4901 6.46237H71.6934L73.6103 0.562744Z" fill="#592033"/>
                                    <path d="M95.4296 0.562744L97.3465 6.46237H103.55L98.5312 10.1085L100.448 16.0082L95.4296 12.362L90.4111 16.0082L92.328 10.1085L87.3095 6.46237H93.5127L95.4296 0.562744Z" fill="#592033"/>
                                </svg>
                            </div>
                            <div class="review__headerWrap pb-[15px] border-b border-[#CACACA] mb-[15px]">
                                <h3 class="font-headings font-bold text-[#030303] text-[16px] mb-[5px]">Kristen Blue</h3>
                                <p class="font-description font-normal text-[#030303] text-[12px] mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                            </div>
                            <div class="review__descWrap mb-[40px]">
                                <p class="font-headings font-normal text-[#030303] text-[18px] mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                            </div>
                            <div class="review__authorWrap flex items-center">
                                <div class="icon__wrap w-[60px] border-2 border-white rounded-full shadow-[0_0_2_0_rgba(23,43,77,0.4),0px_3px_2px_0px_rgba(23,43,77,0.8)]">
                                    <img src="/images/review-author-company.png" alt="Author Company">
                                </div>
                                <div class="desc__wrap w-[calc(100%_-_60px)] px-[15px]">
                                    <h3 class="font-headings font-semibold text-[#030303] text-[16px] leading-[16px] mb-[5px]">Rachelle Robinett</h3>
                                    <span class="block font-headings font-normal text-#[030303] text-[16px] leading-[16px]">HRBLS</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap reviews__gridItem">
                        <NuxtLink to="#" class="block bg-[#F3F3F3] p-[30px]">
                            <div class="stars__iconWrap mb-[25px]">
                                <svg class="w-[130px] h-auto" viewBox="0 0 104 18" fill="none">
                                    <path d="M9.10077 0.562744L11.0177 6.46237H17.2209L12.2024 10.1085L14.1193 16.0082L9.10077 12.362L4.08224 16.0082L5.99915 10.1085L0.980625 6.46237H7.18386L9.10077 0.562744Z" fill="#592033"/>
                                    <path d="M30.9201 0.562744L32.837 6.46237H39.0402L34.0217 10.1085L35.9386 16.0082L30.9201 12.362L25.9016 16.0082L27.8185 10.1085L22.8 6.46237H29.0032L30.9201 0.562744Z" fill="#592033"/>
                                    <path d="M51.791 0.562744L53.7079 6.46237H59.9111L54.8926 10.1085L56.8095 16.0082L51.791 12.362L46.7724 16.0082L48.6893 10.1085L43.6708 6.46237H49.874L51.791 0.562744Z" fill="#592033"/>
                                    <path d="M73.6103 0.562744L75.5272 6.46237H81.7304L76.7119 10.1085L78.6288 16.0082L73.6103 12.362L68.5918 16.0082L70.5087 10.1085L65.4901 6.46237H71.6934L73.6103 0.562744Z" fill="#592033"/>
                                    <path d="M95.4296 0.562744L97.3465 6.46237H103.55L98.5312 10.1085L100.448 16.0082L95.4296 12.362L90.4111 16.0082L92.328 10.1085L87.3095 6.46237H93.5127L95.4296 0.562744Z" fill="#592033"/>
                                </svg>
                            </div>
                            <div class="review__headerWrap pb-[15px] border-b border-[#CACACA] mb-[15px]">
                                <h3 class="font-headings font-bold text-[#030303] text-[16px] mb-[5px]">Kristen Blue</h3>
                                <p class="font-description font-normal text-[#030303] text-[12px] mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                            </div>
                            <div class="review__descWrap mb-[40px]">
                                <p class="font-headings font-normal text-[#030303] text-[18px] mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                            </div>
                            <div class="review__authorWrap flex items-center">
                                <div class="icon__wrap w-[60px] border-2 border-white rounded-full shadow-[0_0_2_0_rgba(23,43,77,0.4),0px_3px_2px_0px_rgba(23,43,77,0.8)]">
                                    <img src="/images/review-author-company.png" alt="Author Company">
                                </div>
                                <div class="desc__wrap w-[calc(100%_-_60px)] px-[15px]">
                                    <h3 class="font-headings font-semibold text-[#030303] text-[16px] leading-[16px] mb-[5px]">Rachelle Robinett</h3>
                                    <span class="block font-headings font-normal text-#[030303] text-[16px] leading-[16px]">HRBLS</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap reviews__gridItem">
                        <NuxtLink to="#" class="block bg-[#F3F3F3] p-[30px]">
                            <div class="stars__iconWrap mb-[25px]">
                                <svg class="w-[130px] h-auto" viewBox="0 0 104 18" fill="none">
                                    <path d="M9.10077 0.562744L11.0177 6.46237H17.2209L12.2024 10.1085L14.1193 16.0082L9.10077 12.362L4.08224 16.0082L5.99915 10.1085L0.980625 6.46237H7.18386L9.10077 0.562744Z" fill="#592033"/>
                                    <path d="M30.9201 0.562744L32.837 6.46237H39.0402L34.0217 10.1085L35.9386 16.0082L30.9201 12.362L25.9016 16.0082L27.8185 10.1085L22.8 6.46237H29.0032L30.9201 0.562744Z" fill="#592033"/>
                                    <path d="M51.791 0.562744L53.7079 6.46237H59.9111L54.8926 10.1085L56.8095 16.0082L51.791 12.362L46.7724 16.0082L48.6893 10.1085L43.6708 6.46237H49.874L51.791 0.562744Z" fill="#592033"/>
                                    <path d="M73.6103 0.562744L75.5272 6.46237H81.7304L76.7119 10.1085L78.6288 16.0082L73.6103 12.362L68.5918 16.0082L70.5087 10.1085L65.4901 6.46237H71.6934L73.6103 0.562744Z" fill="#592033"/>
                                    <path d="M95.4296 0.562744L97.3465 6.46237H103.55L98.5312 10.1085L100.448 16.0082L95.4296 12.362L90.4111 16.0082L92.328 10.1085L87.3095 6.46237H93.5127L95.4296 0.562744Z" fill="#592033"/>
                                </svg>
                            </div>
                            <div class="review__headerWrap pb-[15px] border-b border-[#CACACA] mb-[15px]">
                                <h3 class="font-headings font-bold text-[#030303] text-[16px] mb-[5px]">Kristen Blue</h3>
                                <p class="font-description font-normal text-[#030303] text-[12px] mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                            </div>
                            <div class="review__descWrap mb-[40px]">
                                <p class="font-headings font-normal text-[#030303] text-[18px] mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                            </div>
                            <div class="review__authorWrap flex items-center">
                                <div class="icon__wrap w-[60px] border-2 border-white rounded-full shadow-[0_0_2_0_rgba(23,43,77,0.4),0px_3px_2px_0px_rgba(23,43,77,0.8)]">
                                    <img src="/images/review-author-company.png" alt="Author Company">
                                </div>
                                <div class="desc__wrap w-[calc(100%_-_60px)] px-[15px]">
                                    <h3 class="font-headings font-semibold text-[#030303] text-[16px] leading-[16px] mb-[5px]">Rachelle Robinett</h3>
                                    <span class="block font-headings font-normal text-#[030303] text-[16px] leading-[16px]">HRBLS</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
            <div class="keen-slider__slide !overflow-visible">
                <div class="pt-[5px] pb-[30px]">
                    <div class="item__wrap reviews__gridItem">
                        <NuxtLink to="#" class="block bg-[#F3F3F3] p-[30px]">
                            <div class="stars__iconWrap mb-[25px]">
                                <svg class="w-[130px] h-auto" viewBox="0 0 104 18" fill="none">
                                    <path d="M9.10077 0.562744L11.0177 6.46237H17.2209L12.2024 10.1085L14.1193 16.0082L9.10077 12.362L4.08224 16.0082L5.99915 10.1085L0.980625 6.46237H7.18386L9.10077 0.562744Z" fill="#592033"/>
                                    <path d="M30.9201 0.562744L32.837 6.46237H39.0402L34.0217 10.1085L35.9386 16.0082L30.9201 12.362L25.9016 16.0082L27.8185 10.1085L22.8 6.46237H29.0032L30.9201 0.562744Z" fill="#592033"/>
                                    <path d="M51.791 0.562744L53.7079 6.46237H59.9111L54.8926 10.1085L56.8095 16.0082L51.791 12.362L46.7724 16.0082L48.6893 10.1085L43.6708 6.46237H49.874L51.791 0.562744Z" fill="#592033"/>
                                    <path d="M73.6103 0.562744L75.5272 6.46237H81.7304L76.7119 10.1085L78.6288 16.0082L73.6103 12.362L68.5918 16.0082L70.5087 10.1085L65.4901 6.46237H71.6934L73.6103 0.562744Z" fill="#592033"/>
                                    <path d="M95.4296 0.562744L97.3465 6.46237H103.55L98.5312 10.1085L100.448 16.0082L95.4296 12.362L90.4111 16.0082L92.328 10.1085L87.3095 6.46237H93.5127L95.4296 0.562744Z" fill="#592033"/>
                                </svg>
                            </div>
                            <div class="review__headerWrap pb-[15px] border-b border-[#CACACA] mb-[15px]">
                                <h3 class="font-headings font-bold text-[#030303] text-[16px] mb-[5px]">Kristen Blue</h3>
                                <p class="font-description font-normal text-[#030303] text-[12px] mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                            </div>
                            <div class="review__descWrap mb-[40px]">
                                <p class="font-headings font-normal text-[#030303] text-[18px] mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled</p>
                            </div>
                            <div class="review__authorWrap flex items-center">
                                <div class="icon__wrap w-[60px] border-2 border-white rounded-full shadow-[0_0_2_0_rgba(23,43,77,0.4),0px_3px_2px_0px_rgba(23,43,77,0.8)]">
                                    <img src="/images/review-author-company.png" alt="Author Company">
                                </div>
                                <div class="desc__wrap w-[calc(100%_-_60px)] px-[15px]">
                                    <h3 class="font-headings font-semibold text-[#030303] text-[16px] leading-[16px] mb-[5px]">Rachelle Robinett</h3>
                                    <span class="block font-headings font-normal text-#[030303] text-[16px] leading-[16px]">HRBLS</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
