<template>
    <!-- container -->
    <div>
        <div class="head-logo">
            <a href="#"><img src="../../assets/img/logo.png" alt="" /></a>
        </div>
        <div class="top-nav">
            <span class="menu">MENU</span>
            <ul class="nav1">
                <li><a href="#" class="scroll">首 页</a></li>
                <li><a href="#" class="scroll">功 能 详 情</a></li>
                <li><a href="#" class="scroll">数 据 分 析</a></li>
                <li><a href="#" class="scroll">信 息 预 警</a></li>
                <li><a href="#" class="scroll">常 见 问 答</a></li>
                <li><a href="#" class="scroll">联 系 我 们</a></li>
                <li @click="personalPage"><a class="signup play-icon popup-with-zoom-anim" href="#">登 录</a></li>
            </ul>

        </div>
        <div class="clearfix"> </div>
        <!-- requried-jsfiles-for owl -->
    </div>
</template>

<script>
export default {
    name: "HeadBar",
    methods:{
        personalPage(){
            this.$router.push({
                name:'personal'
            })
        }
    }
}

</script>

<style scoped>
 @import "../../assets/css/style.css";
    .scroll{
        font-size: 17px;
    }
</style>