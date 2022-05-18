<template>
    <div>
        <div class="menu" style="text-align: left;">
            <a-menu v-model="current" mode="horizontal">
                <a-menu-item key="mail">
                    <a-icon type="mail"/>
                    全部记录
                </a-menu-item>
                <a-menu-item key="app2">
                    <a-icon type="appstore"/>
                    目标提取
                </a-menu-item>
                <a-menu-item key="app3">
                    <a-icon type="appstore"/>
                    变化检测
                </a-menu-item>
                <a-menu-item key="app4">
                    <a-icon type="appstore"/>
                    目标检测
                </a-menu-item>
                <a-menu-item key="app5">
                    <a-icon type="appstore"/>
                    地物分类
                </a-menu-item>
            </a-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightContent",
        data() {
            return {
                current: ['mail'],
            };
        }
    }
</script>
<style scoped>
    .menu{
        height: 60px;
        margin-top: 10px;
    }
</style>