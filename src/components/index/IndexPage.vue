<template>
    <div>
        <ShowMap/>
        <OpItem/>
        <HowItWork/>
        <WhyChoose/>
        <OurStatistic/>
        <PageFoot/>
    </div>
</template>

<script>
    import PageFoot from "@/components/index/parts/PageFoot";
    import ShowMap from "@/components/index/parts/ShowMap";
    import OpItem from "@/components/index/parts/OpItem";
    import HowItWork from "@/components/index/parts/HowItWork";
    import WhyChoose from "@/components/index/parts/WhyChoose";
    import OurStatistic from "@/components/index/parts/OurStatistic";
    export default {
        name: "IndexPage",
        components:{
            OurStatistic,
            WhyChoose,
            HowItWork,
            OpItem,
            ShowMap,
            PageFoot

        }
    }
</script>

<style scoped>

</style>