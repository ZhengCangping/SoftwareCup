<template>
    <div style="min-width: 1200px">
        <HeadBar/>
        <a-row>
            <a-col :span="12">
                <ShowMap/>
            </a-col>
            <a-col :span="12">
                <BaseOption/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import BaseOption from "@/components/index/BaseOption";
    import ShowMap from "@/components/index/ShowMap";
    import HeadBar from "@/components/unit/HeadBar";
    export default {
        name: "IndexPage",
        components:{
            BaseOption,
            HeadBar,
            ShowMap
        }
    }
</script>

<style scoped>

</style>