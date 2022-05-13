<template>
    <div class="all-wrap">
        <div class="sys-wrap">
            <div class="img-wrap">
                <img src="../../assets/img/logo.png" />
            </div>
            <div class="title">空中检查系统</div>
        </div>

        <div class="user-info">
            <a-avatar :size="64" icon="user" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadBar"
    }

</script>

<style scoped>
    img {
        height: 100%;
        width: 100%;
    }

    .all-wrap {
        min-width: 1200px;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #0B1946;
    }
    .sys-wrap{
        display: flex;
        justify-content: left;
    }

    .all-wrap .img-wrap {
        height: 50px;
        width: 70px;
        margin-left: 10px;
    }

    .all-wrap .title {
        margin-left: 10px;
        padding-left: 0;
        font-size: 30px;
        font-weight: bold;
        color: aliceblue;
    }

    .user-info {
        margin-right: 20px;
        width: 500px;
        display: flex;
        justify-content: center;
    }
    .user-info img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }

    .user-info .welcome {
        text-align: center;
        font-size: 18px;
        width: 400px;
        padding-top: 10px;
    }
    .user-buton{
        width: 50px;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>