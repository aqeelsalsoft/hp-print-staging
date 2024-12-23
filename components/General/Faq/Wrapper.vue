<script lang="ts" setup>
import { watch } from 'vue';

const props = defineProps({
  faqs: {
    type: Array,
    default: () => []
  }
});

watch(() => props.faqs, (newFaqs) => {
  if (newFaqs.length > 0) {
    newFaqs[0].defaultOpen = true;
  }
}, { immediate: true });
</script>

<template>
    <div class="hpp__faqListWrapper py-[40px]">
        <div class="container mx-auto px-[15px]">
            <div class="section__header mb-[50px] text-center">
                <h2 class="font-headings font-bold text-[#212121] text-[33px] mb-0">Frequently asked questions</h2>
            </div>
            <div class="faq__listWrapper">
                <UAccordion :items="props.faqs"
                :ui="{
                    container: 'border border-[#CECECE] mb-[15px] px-[30px] py-[30px]'
                }">
                    <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost" size="xl" class="mb-0 p-0 !bg-transparent">
                            <span class="font-headings font-bold text-left w-[calc(100%_-_20px)] text-[#030303] text-[18px]">Q: {{ item.question }}</span>
                            <template #trailing>
                                <UIcon name="i-heroicons-chevron-right-20-solid"
                                    class="w-[30px] h-[30px] ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']" />
                            </template>
                        </UButton>
                    </template>
                    <template #item="{ item }">
                        <div class="pt-[10px] pl-0 pr-[100px]">
                            <p class="font-description text-[16px] leading-[22px] text-gray-600 mb-0">
                                {{ item.answer }}
                            </p>
                        </div>
                    </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
