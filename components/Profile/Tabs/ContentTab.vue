
<template>
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
        <div className="contentWrapper bg-black">
            <div className="container-fluid">
                <div className="py-2 d-flex g-2" style="width: 100%; overflow-x: scroll;">
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                    <button class="custom-btn">Custom Button 1</button>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                        <div>
                            <CustomSlider />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="galleryOne">
                            <div className="imgNumber d-flex">
                                <img :src="Gallery" alt=" gallery" />
                            </div>

                            <p className="subContentDesc">
                                Title Goes here until it runs out of space.
                            </p>
                        </div>
                        <div className="galleryTwo">
                            <SwiperComponent :images="images" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-lg-0">
                        <div className="galleryFive">
                            <SwiperComponent :images="images" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="galleryFour">
                            <div className="subContent">
                                <div className="imgNumber d-flex">
                                    <img :src="layoutFluid" alt=" MultipleImg" />
                                </div>
                            </div>

                            <p className="subContentDesc">
                                Title Goes here until it runs out of space.
                            </p>
                        </div>
                        <div className="galleryFive">
                            <SwiperComponent :images="images" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 p-lg-0">
                        <div className="gallerySix">
                            <div className="subContent">
                                <div className="imgNumber d-flex">
                                    <img :src="LinkGallery" alt=" MultipleImg" />
                                </div>
                            </div>

                            <p className="subContentDesc">
                                Title Goes here until it runs out of space.
                            </p>
                        </div>
                        <div className="gallerySeven">
                            <SwiperComponent :images="images" />
                        </div>
                        <div className="galleryEight">
                            <div className="subContent">
                                <div className="imgNumber d-flex">
                                    <img :src="LinkGallery" alt=" MultipleImg" />
                                </div>
                            </div>

                            <p className="subContentDesc">
                                Title Goes here until it runs out of space.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FullBizCard } from '../../../models/ProfileData/FullBizCard';
defineProps({
    data: FullBizCard
})
let imageGallery = ref([]);
const images = [
    "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
    "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
];

// watchEffect(() => {
//     const imgGallery = data?.value?.content?.filter(
//         (el) => el.content_type === "image_gallery"
//     );
//     imageGallery.value = imgGallery?.flatMap((el) => el.image_kit_ids);
// });

</script>
<style scoped lang="scss">
.contentWrapper {
    border-bottom: 1px solid #8c8c8c;
    padding-bottom: 20px;

    .custom-btn {
        background: #262626;
        box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
        border-radius: 25px;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
        // padding: 12px;
        display: inline-block;
        width: 10% !important;
        border: none !important;
    }


    .innerContent {
        padding: 28px;
        background-image: url("../../assets/images/galleryone.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 800px;

        .subContent {
            display: flex;
            gap: 10px;
            justify-content: flex-end;

            P {
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #fff;
                background: rgba(53, 120, 248, 0.9);
                backdrop-filter: blur(2.5px);
                border-radius: 20px;
                padding: 6px 12px;
                margin: 0;
            }

            .imgNumber {
                background: rgba(0, 0, 0, 0.45);
                backdrop-filter: blur(2px);
                border-radius: 20px;
                padding: 6px 12px;
                gap: 5px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                }
            }
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .slick-slider {
        .slick-next {
            right: 80px !important;

            &:before {
                content: url("../../assets/images/nextArrow.svg");
            }
        }

        .slick-prev {
            left: 80px !important;
            z-index: 1;

            &:before {
                content: url("../../assets/images/previousArrow.svg");
            }
        }
    }

    .galleryOne {
        background-image: url("../../assets/images/gallerythree.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        padding: 28px;
        position: relative;

        .imgNumber {
            background: rgba(0, 0, 0, 0.45);
            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
            height: 52px;
            width: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 28px;
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .galleryTwo {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 400px;

        .subContent {
            .imgNumber {
                background: rgba(0, 0, 0, 0.45);
                backdrop-filter: blur(2px);
                border-radius: 20px;
                border-radius: 20px;
                display: flex;
                justify-content: flex-end;
                padding: 6px 12px;
                font-size: large;
                top: 10px;
                position: absolute;
                right: 28px;
                gap: 5px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                }
            }
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .galleryThree {
        background-image: url("../../assets/images/gallerytwo.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        position: relative;
        padding: 28px;

        .subContent {
            .imgNumber {
                background: rgba(0, 0, 0, 0.45);
                backdrop-filter: blur(2px);
                border-radius: 20px;
                border-radius: 20px;
                display: flex;
                justify-content: flex-end;
                padding: 6px 12px;
                position: absolute;
                right: 28px;
                gap: 5px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                }
            }
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .galleryFour {
        background-image: url("../../assets/images/galleryfive.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        padding: 28px;
        position: relative;

        .imgNumber {
            background: rgba(0, 0, 0, 0.45);
            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
            height: 52px;
            width: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 28px;
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .galleryFive .five_feature_img {
        width: 100%;
        height: 100%;
    }

    .galleryFive {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 804px;
        position: relative;

        .swiper-slide {
            height: 800px;
        }

        .subContent {
            .imgNumber {
                background: rgba(0, 0, 0, 0.45);
                backdrop-filter: blur(2px);
                border-radius: 20px;
                border-radius: 20px;
                display: flex;
                justify-content: flex-end;
                padding: 6px 12px;
                position: absolute;
                right: 28px;
                gap: 5px;
                font-size: large;
                top: 10px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                }
            }
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            z-index: 999;

            margin: 0;
        }
    }

    .gallerySix {
        background-image: url("../../assets/images/galleryseven.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        position: relative;
        padding: 28px;

        .imgNumber {
            background: rgba(0, 0, 0, 0.45);
            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
            height: 52px;
            width: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 28px;
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .gallerySeven {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        position: relative;

        .subContent {
            .imgNumber {
                background: rgba(0, 0, 0, 0.45);
                backdrop-filter: blur(2px);
                border-radius: 20px;
                display: flex;
                justify-content: flex-end;
                padding: 6px 12px;
                position: absolute;
                right: 28px;
                font-size: large;
                top: 10px;
                gap: 5px;

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                }
            }
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }

    .galleryEight {
        background-image: url("../../assets/images/galleryeight.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        position: relative;
        padding: 28px;

        .imgNumber {
            background: rgba(0, 0, 0, 0.45);
            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
            height: 52px;
            width: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 28px;
        }

        .subContentDesc {
            position: absolute;
            bottom: 28px;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            color: #fff;
            margin: 0;
        }
    }
}
</style>