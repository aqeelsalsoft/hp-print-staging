<script lang="ts" setup>
const items = [{
    defaultOpen: true,
    question: 'What size should my business card be?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}, {
    question: 'Do you offer design assistance?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}, {
    question: 'What kind of paper or cardstock is best for business cards?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}, {
    question: 'Can I print my business cards double-sided?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}, {
    question: 'How long will it take to receive my business cards after I place my order?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}, {
    question: 'Can I see a proof of my business card design before it\'s printed?',
    answer: 'The size of your business card depends on your intended use. For everyday use, the traditional size for a business card is 3.5" x 2". For something that stands out, consider using a square in size 2” x 2” or even 3” x 3”.'
}]
</script>

<template>
    <div class="hpp__appHomePageContentWrapper">
        <HomeHeroBannerWrapper />
        <FeaturedItemsGridWrapper />
        <HomeFeaturedCatProductsWrapper />
        <LazyGeneralCTABarWrapper title="From Pixels To Perfect Prints" description="Business Cards, Banners, Merchandise, Brochures, And More Delivered!" buttontext="Get Started" />
        <LazyHomeFeaturedProductsCarouselWrapper />
        <LazyHomePrintShopGridWrapper />
        <LazyGeneralClientLogosCarouselWrapper />
        <LazyHomeWeGoBeyondWrapper />
        <LazyHomeBehindTheSceneWrapper />
        <LazyGeneralCTABarWrapper title="Last-minute printing? Rush orders?" description="Consider it done with Half Price Print." buttontext="Get A Quote" />
        <LazyHomeStepsToOrderWrapper />
        <LazyHomeOurGalleryWrapper />
        <LazyHomeOurBlogWrapper />
        <LazyHomeInstaFeedCarouselWrapper />
        <LazyGeneralClientReviewsWrapper />
        <LazyGeneralFaqWrapper :faqs="items" />
        <LazyGeneralNewsletterWrapper />
    </div>
</template>

<style lang="scss" scoped>
    
</style>
