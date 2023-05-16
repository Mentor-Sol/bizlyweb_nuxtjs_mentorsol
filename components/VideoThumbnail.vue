<template>
  <div class="video-container">
    <div class="video">
      <div class="thumbnail-overlay" @click="playVideo(videos[0])">
        <img :src="videos[0].thumbnailUrl" alt="Video Thumbnail" class="thumbnail-image" />
        <div class="play-button">
          <i class="fas fa-play"></i>
        </div>
      </div>
      <div class="video-details">
        <h3 class="video-title">{{ videos[0].title }}</h3>
        <p class="video-description">{{ videos[0].description }}</p>
      </div>
    </div>
    <div class="thumbnails">
      <div v-for="video in videos.slice(1)" :key="video.id" class="thumbnail-container">
        <div class="thumbnail-overlay" @click="playVideo(video)">
          <img :src="video.thumbnailUrl" alt="Video Thumbnail" class="thumbnail-image" />
          <div class="play-button">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div class="video-details">
          <h3 class="video-title">{{ video.title }}</h3>
          <p class="video-description">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPage',
  data() {
  return {
    videos: [
      {
        id: 1,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        title: 'Video 1',
        description: 'Description for Video 1'
      },
      {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
        thumbnailUrl: 'THUMBNAIL_URL_2',
        title: 'Video 2',
        description: 'Description for Video 2'
      },
      {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        thumbnailUrl: 'THUMBNAIL_URL_3',
        title: 'Video 3',
        description: 'Description for Video 3'
      },
      // Add more video objects as needed
    ]
  };
},

  methods: {
    playVideo(video) {
      // Handle video playback
    }
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-bottom: 20px;
}

.thumbnail-overlay {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000000;
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

.video-description {
font-size: 14px;
color: #888888;
}

.thumbnails {
display: flex;
justify-content: center;
gap: 20px;
}

.thumbnail-container {
width: 33.33%;
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