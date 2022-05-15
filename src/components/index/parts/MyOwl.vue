<template>
    <carousel :autoplay="true" :nav="false" :items="1">
            <div class="item" v-for="func in funcnames" v-bind:key="func">
                <div class="banner-info">
                    <img src="../../../assets/img/rok.png" alt="" style="width: 5%"/>
                    <h1>{{func}}</h1>
                    <h4>看见你看不见的变化 </h4>
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
    export default {
        name: "MyOwl",
        components:{
            carousel
        },
        data(){
            return{
                funcnames:['目标提取','变化检测','目标检测','地物分类']
            }
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
        background: #008fd5;
    }
    .banner-info h4{
        margin-top: 30px;
        color: white;
    }
</style>