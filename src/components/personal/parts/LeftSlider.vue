<template>
    <div>
        <div class="avator">
            <a-avatar :size="300" icon="user" />
            <a-button class="editavator">Default</a-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LeftSlider"
    }
</script>

<style scoped>
    .avator{
        margin-top: 30px;
    }
    .editavator{
        width: 200px;
        margin-top: 30px;
    }
</style>