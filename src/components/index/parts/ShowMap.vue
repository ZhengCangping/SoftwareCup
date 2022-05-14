<template>
    <div class="header">
        <!-- container -->
        <div class="container">
            <HeadBar/>
            <!-- requried-jsfiles-for owl -->
            <!-- //requried-jsfiles-for owl -->
            <MyOwl/>
        </div>
    </div>
</template>

<script>
    import HeadBar from "@/components/unit/HeadBar";
    import MyOwl from "@/components/index/parts/MyOwl";
    // import carousel from 'vue-owl-carousel'
    // import $ from 'jquery'
    export default {
        name: "ShowMap",
        components:{
            MyOwl,
            HeadBar,
            // carousel
        }
    }

    // $(document).ready(function() {
    //     $("#owl-demo").owlCarousel({
    //         items : 1,
    //         lazyLoad : true,
    //         autoPlay : true,
    //         navigation : false,
    //         navigationText :  false,
    //         pagination : true,
    //     });
    // });
</script>

<style scoped>
@import "../../../assets/css/owl.carousel.css";
@import "../../../assets/css/style.css";
</style>