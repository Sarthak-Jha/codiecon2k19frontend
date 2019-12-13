<template>
    <main>
        <div class="parallax">
        </div>
        <section style="height:500px;">
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </section>
    </main>
</template>

<script>
    export default {
        name: "LandingPage"
    }
</script>

<style scoped>
    .parallax {
        /* The image used */
        background-image: url("../assets/low_poly_smoke_purple-2560x1440.jpg");

        /* Set a specific height */
        min-height: 500px;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
