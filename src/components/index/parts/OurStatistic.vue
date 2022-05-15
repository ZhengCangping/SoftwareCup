<template>
    <div class="feature-one">
        <div class="funfact-one">
            <div class="container">
                <div class="funfact-one__bg"></div>
                <a-row type="flex" justify="space-around">
                    <a-col span="6">
                        <div class="funfact-one__box">
<!--                            TODO 特效-->
                            <h3><span class="odometer" data-count="99">00</span>%</h3>
                            <p>F1-score</p>
                        </div><!-- /.funfact-one__box -->
                    </a-col>
                    <a-col span="6">
                        <div class="funfact-one__box">
                            <h3><span class="odometer" data-count="99">00</span>%</h3>
                            <p>Precious</p>
                        </div><!-- /.funfact-one__box -->
                    </a-col>
                    <a-col span="6">
                        <div class="funfact-one__box">
                            <h3><span class="odometer" data-count="99">00</span>%</h3>
                            <p>Accuracy</p>
                        </div><!-- /.funfact-one__box -->
                    </a-col>
                    <a-col span="6">
                        <div class="funfact-one__box">
                            <h3><span class="odometer" data-count="99">00</span>%</h3>
                            <p>Recall</p>
                        </div><!-- /.funfact-one__box -->
                    </a-col>
                </a-row>
            </div><!-- /.container -->
        </div><!-- /.funfact-one -->
<!--        <img src="../../../assets/img/feature-shape-1-1.png" alt="" class="feature-one__shape-1">-->
<!--        <img src="../../../assets/img/feature-shape-1-2.png" alt="" class="feature-one__shape-2">-->
<!--        <img src="../../../assets/img/feature-shape-1-3.png" alt="" class="feature-one__shape-3">-->
        <div class="container" style="margin-top: 50px">
            <a-row type="flex" justify="space-around">
                <a-col span="10">
                    <div class="block-title">
                        <p>Get to Know About</p>
                        <h2>Flexible and Quick Business Loans</h2>
                    </div><!-- /.block-title -->
                </a-col>
                <a-col span="10">
                    <p class="block-text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words which don't look even slightly believable.</p><!-- /.block-text -->
                </a-col>
            </a-row>
            <a-row type="flex" justify="center" :gutter="16">
                <a-col span="7.5">
                    <div class="feature-one__box">
                        <i class="pylon-icon-assets"></i>
                        <p>Very Low Rates on
                            All Loans</p>
                    </div><!-- /.feature-one__box -->
                </a-col>
                <a-col span="7.5">
                    <div class="feature-one__box">
                        <i class="pylon-icon-verification"></i>
                        <p>99.9% Success Rate
                            Guarantee</p>
                    </div><!-- /.feature-one__box -->
                </a-col>
                <a-col span="7.5">
                    <div class="feature-one__box">
                        <i class="pylon-icon-finance"></i>
                        <p>Flexible with Your
                            Repayments</p>
                    </div><!-- /.feature-one__box -->
                </a-col>
            </a-row>
        </div><!-- /.container -->
    </div><!-- /.feature-one -->
</template>

<script>
    export default {
        name: "OurStatistic"
    }
</script>

<style scoped>
    .funfact-one__bg {
        position: absolute;
        background-color: #008fd5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.1;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: hard-light;
        background-position: center center;
    }

    .feature-one {
        background-color: #eff2f6;
        padding-bottom: 90px;
        position: relative;
    }

    .feature-one .block-text {
        margin-top: 30px;
        font-weight: 400;
    }

    @media (max-width: 1199px) {
        .feature-one .block-text {
            margin-top: 0;
        }
    }

    @media (max-width: 991px) {
        .feature-one .block-text {
            margin-bottom: 50px;
        }
    }

    .feature-one__box {
        background-color: #fff;
        position: relative;
        align-items: center;
        display: flex;
        padding: 50px;
        border-radius: 4px;
        transition: all 500ms ease;
        margin-bottom: 30px;
    }

    @media (max-width: 1199px) {
        .feature-one__box {
            padding: 40px 30px;
        }
    }

    .feature-one__box::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 4px);
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .feature-one__box i {
        position: relative;
        font-size: 60px;
        color: #008fd5;
        margin-right: 20px;
    }

    .feature-one__box i::after {
        content: "";
        width: 63px;
        height: 63px;
        background-color: #eff2f6;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
    }

    .feature-one__box i::before {
        position: relative;
        z-index: 11;
    }

    .feature-one__box p {
        position: relative;
        font-size: 20px;
        line-height: 30px;
        color: #0c2139;
        margin: 0;
    }

    @media (max-width: 1199px) {
        .feature-one__box p {
            font-size: 18px;
        }
    }

    .feature-one__box:hover {
        background-color: #004aa1;
    }
    .block-text {
        font-size: 18px;
        line-height: 1.88;
        color: #798490;
        margin-bottom: 0;
        text-align: left;
    }

    .block-title {
        margin-bottom: 50px;
        text-align: left;
    }

    @media (max-width: 425px) {
        .block-title {
            margin-bottom: 30px;
            text-align: left;
        }
    }

    .block-title p {
        display: inline-flex;
        /*align-items: center;*/
        text-align: left;
        font-size: 18px;
        font-weight: 400;
        color: #798490;
        margin: 0;
        line-height: 1;
        position: relative;
        top: -10px;
    }

    .block-title p::after {
        content: '';
        width: 43px;
        height: 3px;
        background-color: #008fd5;
        border-radius: 4px;
        margin-left: 10px;
    }

    .block-title h2 {
        margin: 0;
        color: #0c2139;
        font-size: 32px;
        font-weight: 400;
        line-height: 1.4;
    }

    @media (min-width: 481px) {
        .block-title h2 {
            font-size: 40px;
        }
    }

    @media (min-width: 1200px) {
        .block-title h2 {
            font-size: 60px;
            line-height: 1;
        }
    }

    @media (max-width: 575px) {
        .block-title h2 br {
            display: none;
        }
    }

    .funfact-one {
        position: relative;
        padding: 121px 0;
        background-color: #008fd5;
    }

    @media (max-width: 991px) {
        .funfact-one {
            padding-bottom: 90px;
        }
    }

    .funfact-one__box {
        text-align: center;
        position: relative;
    }

    @media (max-width: 991px) {
        .funfact-one__box {
            margin-bottom: 30px;
        }
    }

    .funfact-one__box h3 {
        font-size: 50px;
        font-weight: 300;
        line-height: 1;
        color: #fff;
        margin: 0;
        margin-bottom: 15px;
        display: inline-flex;
        align-items: center;
    }

    .funfact-one__box p {
        margin: 0;
        line-height: 1;
        color: #fff;
        font-size: 25px;
    }
</style>