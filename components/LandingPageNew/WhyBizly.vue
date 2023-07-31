<template>
  <div class="whyBizlySection">
    <div class="heading" data-aos="fade-up" data-aos-duration="2000">
      So... why <span>bizly ?</span>
    </div>
    <div class="para" data-aos="fade-up" data-aos-duration="2000">
      Success occurs when preparation meets opportunity.
    </div>

    <div class="card-wrapper" data-aos="fade-up" data-aos-duration="2200">
      <div class="card" style="width: 25%">
        <div class="card-body">
          <img :src="Website" alt="Website" width="50" height="50" />

          <h5 class="card-title">Your website</h5>
          <p class="card-text">
            Compared to a standard website, <span>bizly</span> offers more
            convenience and a modern approach to showcasing your personal brand
            compared to a website.
          </p>
        </div>
      </div>
      <div class="card" style="width: 25%">
        <div class="card-body">
          <img :src="Search" alt="Search" width="50" height="50" />

          <h5 class="card-title">Your digital business card</h5>
          <p class="card-text">
            Share your preferred information in a compact and digital format
            that won’t get lost, thrown away, or forgotten.
          </p>
        </div>
      </div>
      <div class="card" style="width: 25%">
        <div class="card-body">
          <img :src="Rolo" alt="Rolo" width="50" height="50" />

          <h5 class="card-title">Your rolodex</h5>
          <p class="card-text">
            <span>bizly</span> is your modern-day rolodex, allowing you to
            efficiently store and organize your contacts in one place, to your
            liking.
          </p>
        </div>
      </div>
      <div class="card" style="width: 25%">
        <div class="card-body">
          <img :src="Resume" alt="Resume" width="50" height="50" />

          <h5 class="card-title">Your resume</h5>
          <p class="card-text">
            Create a tailored resume on <span>bizly</span> to showcase your
            experience, skills, and qualifications.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Website from "~/src/assets/images/website.svg";
import Search from "~/src/assets/images/search.svg";
import Rolo from "~/src/assets/images/rolo.svg";
import Resume from "~/src/assets/images/resume.svg";
</script>

<style lang="scss" scoped>
.whyBizlySection {
  background: linear-gradient(360deg, #cdd5e1 0%, #f7f8fb 60.9375%);
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heading {
    font-size: 80px;
    color: #141414;
    font-weight: 300;
    span {
      font-weight: 600;
    }
  }
  .para {
    font-size: 28px;
    color: #141414;
    font-weight: normal;
  }

  .card-wrapper {
    margin-top: 6rem;
    display: flex;
    gap: 2rem;

    .card {
      border-radius: 32px;
      background: #ffffff5c;
      border: 1px solid #ffffff5c;
      box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease-in-out 0s;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 3rem 1.5rem;
        img {
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 21px;
          color: #141414;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        .card-text {
          font-size: 14px;
          color: #7185a4;
          font-weight: 400;
          span {
            font-weight: 500;
            font-style: italic;
          }
        }
      }
    }
  }
}
</style>
