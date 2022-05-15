<template>
    <div class="trusted-company">
        <div class="trusted-company__bg" style="background-image: url(../../../assets/img/trust-bg-1-1.png);"></div>
        <a-row type="flex" justify="center" class="container">
            <a-col span="10">
                <div class="trusted-company__content">
                    <div class="block-title">
                        <p>Trusted Company</p>
                        <h2>Most of the People Trust on Us</h2>
                    </div><!-- /.block-title -->
                    <div class="trusted-company__image">
                        <img src="../../../assets/img/trust-1-1.png" alt="">
                        <p>There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply.</p>
                    </div><!-- /.trusted-company__image -->
                </div>
            </a-col>
            <a-col span="10">
                <div class="trusted-company__box-wrap">
                    <div class="trusted-company__box">
                        <span>01</span>
                        <p>Solutions for small business
                            and big companies</p>
                    </div><!-- /.trusted-company__box -->
                    <div class="trusted-company__box">
                        <span>02</span>
                        <p>Take our loans and pay for
                            your studies</p>
                    </div><!-- /.trusted-company__box -->
                    <div class="trusted-company__box">
                        <span>03</span>
                        <p>Get special loans for more
                            needs in 2 hours</p>
                    </div><!-- /.trusted-company__box -->
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name: "WhyChoose"
}
</script>

<style scoped>
.trusted-company{
    background-color: #0c2139;
    position: relative;
    padding: 120px 0;
}
.trusted-company__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.02;
    background-size: cover;
}
.trusted-company .block-title {
    max-width: 520px;
}

@media (max-width: 991px) {
    .trusted-company .block-title {
        max-width: 450px;
        text-align: center !important;
        margin-left: auto;
        margin-right: auto;
    }
}

.trusted-company .block-title p {
    color: #8e96a0;
}

.trusted-company .block-title h2 {
    font-weight: 400;
    color: #fff;
    letter-spacing: -0.01em;
}

.trusted-company__image {
    display: flex;
    align-items: center;
}

@media (max-width: 1199px) {
    .trusted-company__image {
        flex-wrap: wrap;
    }
}

@media (max-width: 991px) {
    .trusted-company__image {
        flex-wrap: nowrap;
    }
}

@media (max-width: 480px) {
    .trusted-company__image {
        flex-wrap: wrap;
    }
}

.trusted-company__image > img {
    flex-shrink: 0;
    border-radius: 4px;
}

.trusted-company__image p {
    margin: 0;
    margin-left: 30px;
    color: #8e96a0;
    font-size: 20px;
    text-align: left;
}

@media (max-width: 1199px) {
    .trusted-company__image p {
        margin-left: 0;
        margin-top: 30px;
    }
}

@media (max-width: 991px) {
    .trusted-company__image p {
        margin-left: 30px;
        margin-top: 0;
    }
}

@media (max-width: 480px) {
    .trusted-company__image p {
        margin-left: 0;
        margin-top: 30px;
    }
}

.trusted-company__box + .trusted-company__box {
    margin-top: 30px;
}

.trusted-company__box {
    background-color: #fff;
    border-radius: 4px;
    padding: 25px 30px;
    display: flex;
    /*align-items: center;*/
    transition: all 500ms ease;
}

.trusted-company__box-wrap {
    margin-left: 70px;
}

@media (max-width: 1199px) {
    .trusted-company__box-wrap {
        margin-left: 0;
        margin-top: 50px;
    }
}

.trusted-company__box > span {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #008fd5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    flex-shrink: 0;
    transition: all 500ms ease;
}

.trusted-company__box p {
    margin-bottom: 0;
    color: #0c2139;
    font-size: 20px;
    text-align: left;
    line-height: 26px;
    margin-left: 30px;
    max-width: 260px;
    transition: all 500ms ease;
}

.trusted-company__box:hover {
    background-color: #008fd5;
}

.trusted-company__box:hover > span {
    background-color: #fff;
    color: #0c2139;
}

.trusted-company__box:hover p {
    color: #fff;
}
.block-title {
    margin-bottom: 50px;
    text-align: left;
}

@media (max-width: 425px) {
    .block-title {
        margin-bottom: 30px;
    }
}

.block-title p {
    display: inline-flex;
    align-items: center;
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
    text-align: left;
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
</style>