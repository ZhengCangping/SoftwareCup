<template>
    <div class="faqheader">
        <!-- container -->
        <div class="container">
            <HeadBar/>
            <div class="page-header">
                <div class="container">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="#">首页</a></li>
                        <li>/</li>
                        <li><span>常见问答</span></li>
                    </ul><!-- /.thm-breadcrumb list-unstyled -->
                    <h2>常见问答</h2>
                </div><!-- /.container -->
            </div><!-- /.page-header -->
        </div>
    </div>
</template>

<script>
    import HeadBar from "@/components/unit/HeadBar";
    export default {
        name: "FaqBar",
        components: {HeadBar}
    }
</script>

<style scoped>
.faqheader{
    background:url(../../../assets/img/page-header-bg-1-1.jpg) no-repeat 0px 0px;
    background-size: cover;
    min-height: 300px;
}
.page-header {
    /*background-color: #0c2139;*/
    position: relative;
}

.page-header .container {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 50px 15px 120px;
    margin-right: auto;
    margin-left: auto;
}

@media (max-width: 480px) {
    .page-header .container {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}

.page-header .container h2 {
    line-height: 1;
    color: #fff;
    font-size: 60px;
    font-weight: 400;
    margin-top: 10px;
}

@media (max-width: 480px) {
    .page-header .container h2 {
        font-size: 32px;
    }
}

.thm-breadcrumb {
    display: flex;
    margin-bottom: 0;
}

.thm-breadcrumb li {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    line-height: 1;
    display: flex;
    align-items: center;
}

.thm-breadcrumb li:not(:last-of-type) {
    margin-right: 10px;
}

.thm-breadcrumb li a {
    opacity: 0.6;
    padding-bottom: 3px;
    color: inherit;
}

.thm-breadcrumb li span {
    border-bottom: 1px solid #fff;
    padding-bottom: 3px;
    display: block;
    line-height: 1;
}

</style>