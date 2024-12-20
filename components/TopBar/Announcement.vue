<script setup>
const props = defineProps({
  announcementText: {
    type: String,
    default: () => ''
  },
});
</script>

<template>
    <div v-if="announcementText" class="hpp__announcementBarWrap grow">
        <p class="text-center text-white font-headings text-[16px] font-bold">{{ announcementText }}</p>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
