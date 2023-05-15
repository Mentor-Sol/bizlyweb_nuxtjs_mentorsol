<template>
   
        <div class="Home-banner">
            <div class="container inner-container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-banner">
                            <img src="../../assets/images/next-icon.png" alt="">
                            <div class="banner-desc">
                                <p>Risk is the price you pay for opportunity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                       <div class=" d-flex justify-content-between inspired-section align-items-baseline">
                        <p>Get Inspired</p>
                        <a href="#">Explore More</a>
                       </div>
                    </div>
                  
                </div>
                <div class="row">
                        <div class="col-lg-4">
                            <Insipired-card/>
                        </div>
                        <div class="col-lg-4">
                            <Insipired-card/>
                        </div>
                        <div class="col-lg-4">
                            <Insipired-card/>
                        </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                       <div class=" d-flex justify-content-between inspired-section bizlyupdate align-items-baseline">
                        <p>bizUpdates</p>
                        <a href="#">See All</a>
                       </div>
                    </div>
                  
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <Bizlyupdate-card/>
                    </div>
                    <div class="col-lg-6">
                        <Bizlyupdate-card/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                       <div class="inspired-section">
                        <p>Get in touch</p>
                       
                       </div>
                       <div>
                        <GetinTouch/>
                       </div>
                    </div>
                </div>
                <div class="row">
                    <Home-tabs/>
                </div>
            </div>
</div>


</template>
<script setup>
import BizlyupdateCard from '../../components/Bizlyupdate-card.vue';

</script>