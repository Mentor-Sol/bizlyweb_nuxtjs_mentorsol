<template>
  <div class="video-container">
    <div class="video">
      <div class="thumbnail-overlay" @click="playVideo(videos[0])">
        <video
          :src="videos[0].videoUrl"
          :poster="videos[0].thumbnailUrl"
          alt="Video Thumbnail"
          class="thumbnail-image"
        ></video>
        <div class="play-button">
          <i class="fas fa-play"></i>
        </div>
      </div>

      <div class="d-flex justify-content-between slider-inner-icons">
        <div class="d-flex align-items-center gap-3">
          <div class="img-box">
            <img :src="UserSlider" alt="" />
          </div>
          <div class="img-box">
            <img :src="TagSlider" alt="" />
          </div>
        </div>
        <div>
          <div class="img-box-value d-flex align-items-center gap-2">
            <img :src="VideoAlbum" alt="" />
            <p>5</p>
          </div>
        </div>
      </div>
    </div>

    <div class="thumbnails">
      <div
        v-for="video in videos.slice(1)"
        :key="video.id"
        class="thumbnail-container"
      >
        <div class="thumbnail-overlay" @click="playVideo(video)">
          <video
            :src="video.videoUrl"
            controls
            :poster="video.thumbnailUrl"
            alt="Video Thumbnail"
            class="thumbnail-image"
          ></video>
        </div>
        <div class="video-description">
          <div class="inner-video-description">
            <div class="video-timing">
              <p>02:10</p>
            </div>
            <div class="video-description">
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Etiam eu con...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserSlider from "~/assets/images/user-slider.png";
import TagSlider from "~/assets/images/Tag-slider.png";
import VideoAlbum from "~/assets/images/videoalbum.png";
const videos = [
  {
    id: 1,
    videoUrl:
      "https://kwot-music.s3.amazonaws.com/63971029624be6a835fe782a/fan-club/hrm954EnyISAnNwW4F7ELL2eZQ2pHT.mp4",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Video 1",
    description: "Description for Video 1",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Video 2",
    description: "Description for Video 2",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Video 3",
    description: "Description for Video 3",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Video 3",
    description: "Description for Video 3",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Video 3",
    description: "Description for Video 3",
  },
 

  // Add more video objects as needed
];
const playVideo = (video) => {
  // Handle video playback
  console.log(video);
};
</script>
<style lang="scss" scoped>
.video-container {
  height: 100%;
  overflow:hidden;
    &::-webkit-scrollbar {
      display: none;
    }

}

.video {
  position: relative;
  width: 100%;
  height: 100%;
}

.thumbnail-overlay {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  display: none !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  color: #333333;
  font-size: 32px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.video-details {
  padding: 10px;
  text-align: center;
}

.video-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.thumbnails {
  display: flex;
  position: absolute;
  bottom: 16px;
  left: 16px;
  gap: 8px;
 

}

.video-description {
  position: absolute;
  padding: 13px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.inner-video-description .video-timing p {
  width: 46px;
  height: 24px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  border-radius: 13px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  padding: 4px 8px;
  float: right;
}
.inner-video-description {
  height: 100%;
  width: 100%;
}

.inner-video-description .video-description p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  padding-top: 57px;
  margin-bottom: 0;
}

/* Note: backdrop-filter has minimal browser support */

.thumbnail-container {
  width: 220px;
  height: 140px;
  filter: drop-shadow(0px -1px 15px rgba(0, 0, 0, 0.55));
  position: relative;
}

.thumbnail-image {
  border-radius: 4px;
}

@media (max-width: 768px) {
  .thumbnails {
    flex-wrap: wrap;
  }

  .thumbnail-container {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .thumbnail-container {
    width: 100%;
  }
}
</style>
