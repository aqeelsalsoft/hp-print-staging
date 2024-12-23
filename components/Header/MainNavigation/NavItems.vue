<script lang="ts" setup>

</script>

<template>
    <nav class="main__navWrapper">
        <ul class="nav__wrapper flex justify-center items-center">
            <li><a href="#">View All Products</a></li>
            <li><a href="#">Marketing Material</a></li>
            <li><a href="#">Stickers & Labels</a></li>
            <li><a href="#">Boxes & Packaging</a></li>
            <li><a href="#">Sign & Banners</a></li>
            <li><a href="#">Apparel & Promo</a></li>
            <li><a href="#">Featured & Collections</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav__wrapper {
    li {
        @apply px-[10px];

        a {
            @apply font-headings font-semibold text-[#592033] text-[16px];
        }
    }
}
</style>
