<script lang="ts" setup>

</script>

<template>
    <div class="order__stepsGridWrapper">
        <div class="inner__wrapper flex flex-wrap justify-center">
            
            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">01</span>
                    <div class="desc__wrap">
                        <h3>Provide Details</h3>
                        <p>Share your project details - dimensions, design, material, and quantity.</p>
                    </div>
                </div>
            </div>
            
            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">02</span>
                    <div class="desc__wrap">
                        <h3>Custom Quote</h3>
                        <p>Receive a customised estimate based on your printing needs.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">03</span>
                    <div class="desc__wrap">
                        <h3>Design Submission</h3>
                        <p>Submit your artwork or collaborate with our design team for modifications.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">04</span>
                    <div class="desc__wrap">
                        <h3>Order Finalisation</h3>
                        <p>Finalise order details - specifications, timelines, and any additional customisation options.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">05</span>
                    <div class="desc__wrap">
                        <h3>Complete Payment</h3>
                        <p>Securely pay online to proceed.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">06</span>
                    <div class="desc__wrap">
                        <h3>Mock-Up Approval</h3>
                        <p>Confirm mock-up before production.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">07</span>
                    <div class="desc__wrap">
                        <h3>Kickstart Production</h3>
                        <p>Your order goes into the production phase, supervised by the experts.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">08</span>
                    <div class="desc__wrap">
                        <h3>Quality Checks</h3>
                        <p>Quality assurance is done right for faultless results.</p>
                    </div>
                </div>
            </div>

            <div class="grid__item">
                <div class="grid__inner">
                    <span class="digit__wrap">09</span>
                    <div class="desc__wrap">
                        <h3>On-Time Delivery</h3>
                        <p>Receive your finished products on time or collect them at our location.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .order__stepsGridWrapper{
        .grid__item{
            @apply px-[10px] mb-[20px] w-[20%];
            .grid__inner{
                @apply bg-[#592033] p-[20px] h-full shadow-[0_4px_4px_-2px_rgba(0,0,0,0.25)];
                .digit__wrap{
                    @apply font-headings font-bold text-white text-[25px] mb-[10px];
                }
                .desc__wrap{
                    h3{
                        @apply font-headings font-bold text-white text-[16px] mb-[10px];
                    }
                    p{
                        @apply font-headings font-normal text-white text-[13px] mb-0;
                    }
                }
            }
        }
    }
</style>
