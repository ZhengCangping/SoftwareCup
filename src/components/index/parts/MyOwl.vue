<template>
    <carousel :autoplay="true" :nav="false" :items="1">
            <div class="item">
                <div class="banner-info">
                    <img src="../../../assets/img/rok.png" alt="" style="width: 5%"/>
                    <h1>LET'S EXPLORE THE SKY!</h1>
                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. </p>
                    <a-button type="primary" class="useBtn">
                        USE IT!
                    </a-button>
                </div>
            </div>
    </carousel>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    // import $ from 'jquery'
    export default {
        name: "MyOwl",
        components:{
            carousel
        }
    }
</script>

<style scoped>
@import "../../../assets/css/style.css";
@import "../../../assets/css/owl.carousel.css";
    .useBtn{
        margin-top: 40px;
        width: 250px;
        height: 60px;
        font-size: larger;
    }
</style>