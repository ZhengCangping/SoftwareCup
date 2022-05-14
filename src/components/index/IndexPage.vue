<template>
    <div>
        <ShowMap/>
        <PageFoot/>
    </div>
</template>

<script>
    import PageFoot from "@/components/index/parts/PageFoot";
    import ShowMap from "@/components/index/parts/ShowMap";
    export default {
        name: "IndexPage",
        components:{
            ShowMap,
            PageFoot

        }
    }
</script>

<style scoped>

</style>