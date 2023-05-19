<template>
<div class="bizly-card d-flex flex-column justify-content-end">
    <div class="d-flex align-items-center gap-2 inner-bizly-card">
        <div>
        <img :src= "VideoIcon" alt="Self " />
        </div>
       <div class="d-flex  align-items-center gap-3">
        <p>Video</p> 
        <p>3 Mins</p>
        <p>5 days ago</p>
       </div>
    </div>
    <div class="bizly-card-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
</template>
<script setup>
import VideoIcon from "~/assets/images/video-icon.png"




</script>