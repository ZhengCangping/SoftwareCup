<template>
    <div>
        <div style="background: #0c2139">
            <div class="container">
                <HeadBar/>
            </div>
        </div>
        <a-row type="flex" justify="center" align="top">
            <a-col :span="6">
                <LeftSlider/>
            </a-col>
            <a-col :span="16">
                <RightContent/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import HeadBar from "@/components/unit/HeadBar";
    import LeftSlider from "@/components/personal/parts/LeftSlider";
    import RightContent from "@/components/personal/parts/RightContent";
    export default {
        name: "PersonalPage",
        components: {RightContent, LeftSlider, HeadBar},
    }
</script>

<style scoped>
    /*@import "../../assets/css/style.css";*/
</style>