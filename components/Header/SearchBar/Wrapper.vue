<script lang="ts" setup>
const loading = ref(false)
const selected = ref()

async function search(q: string) {
    loading.value = true

    const users: any[] = await $fetch('https://jsonplaceholder.typicode.com/users', { params: { q } })

    loading.value = false

    return users
}
</script>

<template>
    <div class="hpp__searchbarWrapper">
        <UInputMenu v-model="selected" :search="search" :loading="loading" placeholder="Search..."
            loading-icon="i-heroicons-arrow-path-20-solid" trailing-icon="i-heroicons-chevron-up-down-20-solid"
            option-attribute="name" trailing by="id"
            inputClass="font-headings font-normal text-[#8D8D8D] text-[12px] w-[500px] bg-[#F2F4F6] rounded-none border-0 py-[8px] pr-[55px] pl-[20px] shadow-none ring-0 focus:ring-1 focus:ring-slate-300 active:ring-1 active:ring-slate-300" />
    </div>
</template>

<style lang="scss" scoped></style>
