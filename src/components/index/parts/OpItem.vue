<template>
    <div id="services" class="content-grids">
        <a-row class="container" type="flex" justify="space-around">
            <a-col :span="5" class="content-grid" v-for="(op,index) in ops" v-bind:key="index">
                <img src="../../../assets/img/2.png" alt="" />
                <h3>{{op.name}}</h3>
                <p>{{op.des}} </p>
            </a-col>
        </a-row>
        <!-- container -->
    </div>
</template>

<script>
    export default {
        name: "OpItem",
        data(){
            return{
                ops:[
                    {'name':'目标提取',
                        'des':'使用图像分割技术对卫星图像中指定对象完成分割'},
                    {'name':'变化检测',
                        'des':'使用图像分割技术对同区域两个时期的卫星图像变化情况完成分析'},
                    {'name':'目标检测',
                        'des':'使用目标检测技术对卫星图像中指定对象完成检测'},
                    {'name':'地物分类',
                        'des':'使用图像分割技术对卫星图像每个像素完成分类'},
                ]
            }
        }
    }
</script>

<style scoped>
    @import "../../../assets/css/style.css";
</style>