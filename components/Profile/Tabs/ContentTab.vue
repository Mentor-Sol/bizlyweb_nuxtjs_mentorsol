
<template>
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
        <div className="contentWrapper bg-black">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="contentButton">
                            <CustomButton text="Custom Button 1" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="contentButton">
                            <CustomButton text="Custom Button 2" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="contentButton">
                            <CustomButton text="Custom Button 3" />
                        </div>
                    </div>
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
import CustomButton from "../CustomButton.vue"
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
<style scoped lang="scss"></style>