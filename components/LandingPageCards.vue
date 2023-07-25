<template>
    <div class="main-insight pt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-insight">

                        <div class="inner-insight-data">
                            <div class="inner-inight-heading mb-3 d-flex justify-content-between align-items-cente">
                                <div>
                                    <h1>Connections You've Gained from Networking</h1>
                                    <p>Lorem ipsum dolor sit amet, eu sit timeam legendos volutpat, eu facete constituto.
                                    </p>
                                </div>
                                <a href="#">See All</a>
                            </div>
                            <div class="inner-cards row">
                                <div class="col-lg-4">
                                    <div class="inner-card-one">
                                        <h5>Robert Fox</h5>
                                        <div class="d-flex  justify-content-center inner-card-title">
                                            <p>Writer</p>
                                            <p>Director</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-lg-4">
                                    <div class="inner-card-one inner-card-two">
                                        <h5>Robert Fox</h5>
                                        <div class="d-flex  justify-content-center inner-card-title">
                                            <p>Writer</p>
                                            <p>Director</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="inner-card-one inner-card-three">
                                        <h5>Robert Fox</h5>
                                        <div class="d-flex  justify-content-center inner-card-title">
                                            <p>Writer</p>
                                            <p>Director</p>
                                            <p>Producer</p>
                                        </div>
                                    </div>
                                </div>
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
$color_5: #3578F8;

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
        color: $color_5;
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

    .inner-cards {
        .inner-card-two {
            background-image: url(../public/assets/images/Thumbnail-two.png) !important;
        }

        .inner-card-three {
            background-image: url(../public/assets/images/Thumbnail-three.png) !important;
        }

        .inner-card-one {
            background-image: url(../public/assets/images/Thumbnail-one.png);
            background-repeat: no-repeat;
            height: 280px;
            background-size: cover;
            padding: 10px;
            object-fit: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            text-align: center;

            .inner-card-title {
                flex-wrap: wrap;
                max-width: 90px;
                margin: 0 auto;
                column-gap: 13px;
                row-gap: 5px;

                p {
                    font-family: $font-family_1;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 10px;
                    color: #BFBFBF;
                    position: relative;
                    margin: 0;


                    &::after {
                        content: "";
                        position: absolute;
                        width: 3px;
                        height: 3px;
                        background: #BFBFBF;
                        border-radius: 50%;
                        top: 4px;
                        right: -8px;

                    }

                    &:last-child {
                        &::after {
                            display: none;
                        }
                    }
                }

            }

            h5 {
                font-family: $font-family_1;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: $color_2;
            }


        }
    }
}
</style>
<script>

</script>