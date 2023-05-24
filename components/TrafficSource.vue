<template>
    <div class="main-insight pt-4 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-insight">

                        <div class="inner-insight-data">
                            <div class="inner-inight-heading mb-3 d-flex justify-content-between align-items-cente">
                                <div>
                                    <h1>Traffic Source</h1>

                                </div>
                                <a href="#">See All</a>

                            </div>

                            <div class="card-visit-values d-flex justify-content-between align-items-center">


                                <h5>Direct Link</h5>
                                <p>54</p>


                            </div>
                            <div class="card-visit-values d-flex justify-content-between align-items-center">


                                <h5>Referral</h5>
                                <p>77</p>

                            </div>
                            <div class="card-visit-values d-flex justify-content-between align-items-center">


                                <h5>QR Code</h5>
                                <p>98</p>

                            </div>
                            <div class="card-visit-values  d-flex justify-content-between align-items-center">


                                <h5>Social Media</h5>
                                <p>203</p>

                            </div>
                            <div class="card-visit-values border-none d-flex justify-content-between align-items-center">


                                <h5>BizSearch</h5>
                                <p>23</p>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$color_1: #141414;
$color_2: #FFFFFF;
$color_3: #39537D;
$color_4: #595959;
$color_5: #141414;
$color_6: #3578F8;
$color_7: #595959;

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

        h1 {
            font-family: $font-family_1;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: $color_3;
        }


        p {
            font-family: $font-family_1;
            font-style: normal;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;
            color: $color_3;
            margin-bottom: 0;


        }

        h5 {
            font-family: $font-family_1;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: $color_1 ;
            margin-bottom: 0;


        }
    }

}
</style>
