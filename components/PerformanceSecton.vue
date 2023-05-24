<template>
    <div class="main-insight pt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-insight">

                        <div class="inner-insight-data">
                            <div class="inner-inight-heading mb-3 d-flex justify-content-between align-items-cente">
                                <div>
                                    <h1>Performance - Top Pages</h1>
                                    <p>These are your most popular pages
                                    </p>
                                </div>
                                <a href="#">See All</a>

                            </div>

                            <div class="card-visit-values d-flex gap-3 align-items-center">
                                <div class="card-visit-icon d-flex align-items-center justify-content-center">
                                    <img :src="StatisticsIcon" alt="Ambassador" />

                                </div>
                                <div>
                                    <h5>Content</h5>
                                    <p>9,304 total visits</p>
                                    <p>1 Minute and 20 seconds</p>
                                </div>
                            </div>
                            <div class="card-visit-values d-flex gap-3 align-items-center">
                                <div class="card-visit-icon d-flex align-items-center justify-content-center">
                                    <img :src="BlueClockIcon" alt="Ambassador" />

                                </div>
                                <div>
                                    <h5>Services</h5>
                                    <p>9,304 total visits</p>
                                    <p>30 seconds</p>
                                </div>
                            </div>
                            <div class="card-visit-values border-none d-flex gap-3 align-items-center">
                                <div class="card-visit-icon d-flex align-items-center justify-content-center">
                                    <img :src="UserBlue" alt="Ambassador" />

                                </div>
                                <div>
                                    <h5>Contact</h5>
                                    <p>9,304 total vcisits</p>
                                    <p>45 seconds</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import StatisticsIcon from "~/assets/images/blue-bag.png"
import BlueClockIcon from "~/assets/images/Mask-icon.png"
import UserBlue from "~/assets/images/user-blue.png"













</script>
<style lang="scss" scoped>
$color_1: #141414;
$color_2: #FFFFFF;
$color_3: #39537D;
$color_4: #595959;
$color_5: #141414;
$color_6: #3578F8;
$color_7:#595959 ;

$font-family_1: 'Roboto';

.main-insight {
    background: #F5F5F5;

    .container {
        max-width: 664px !important;
        margin: auto;
    }
}

.inner-inight-heading {
    h1 {
        font-family: $font-family_1;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: $color_1;
        margin-bottom: 0;
    }

    p {
        font-family: $font-family_1;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #595959;
        margin-bottom: 0;
    }

    a {

        font-family: $font-family_1;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: $color_6;
        text-decoration: none;
    }
}

.inner-insight-data {
    h1 {
        font-family: $font-family_1;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: $color_1;
        margin-bottom: 0;
    }

    background: #FFFFFF;
    padding: 24px 16px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    .border-none {
        border: none !important;
        padding-bottom: 0 !important;
    }

    .card-visit-values {
        border-bottom: 0.5px solid #D9D9D9;
        padding: 10px 0;

        .card-visit-icon {
            width: 40px;
            height: 40px;
            background: #EFF1F5;
            border-radius: 50%;
        }

        p {
            font-family: $font-family_1;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color:$color_7;
            margin-bottom: 0;


        }

        h5 {
            font-family: $font-family_1;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color:$color_1 ;
            margin-bottom: 0;


        }
    }

}</style>
