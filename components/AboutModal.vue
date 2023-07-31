<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <div
        class="header-content d-flex align-items-center justify-content-between"
      >
        <img :src="BackArrow" alt="Ambassador" @click="showModal = false" />
        <h1>bizCard</h1>
        <a href="#">Save</a>
      </div>

      <div class="form-check form-switch inner-toggle">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >Default switch checkbox input</label
        >
      </div>
      <div class="bizycard-btn">
        <a href="#">See how others view your <span>bizCard</span></a>
      </div>
      <div class="inner-insight-data">
        <div class="card-visit-values d-flex gap-3 align-items-center">
          <div
            class="card-visit-icon d-flex align-items-center justify-content-center"
          >
            <img :src="StatisticsIcon" alt="Ambassador" />
          </div>
          <div>
            <h5>About</h5>
            <p>
              Make a lasting impact with your first impression. This includes
              your profile photos, primary location, current occupation, and
              bio!
            </p>
          </div>
        </div>
      </div>

      <div class="inner-insight-data">
        <div class="card-visit-values d-flex gap-3 align-items-center">
          <div
            class="card-visit-icon d-flex align-items-center justify-content-center"
          >
            <img :src="UserBlue" alt="Ambassador" />
          </div>
          <div>
            <h5>Contact</h5>
            <p>
              Share personal and/or business info, your representative’s info,
              and social media links!
            </p>
          </div>
        </div>
      </div>
      <div class="inner-insight-data">
        <div
          class="card-visit-values d-flex justify-content-between align-items-center"
        >
          <div class="d-flex gap-3 align-items-center">
            <div
              class="card-visit-icon d-flex align-items-center justify-content-center"
            >
              <img :src="BlueClockIcon" alt="Ambassador" />
            </div>
            <div class="inner-description">
              <h5>Experience</h5>
              <p>
                Showcase your professional journey with a personalized, modern
                CV. Customize it to impress potential collaborators!
              </p>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="inner-insight-data">
        <div
          class="card-visit-values d-flex justify-content-between align-items-center"
        >
          <div class="d-flex gap-3 align-items-center">
            <div
              class="card-visit-icon d-flex align-items-center justify-content-center"
            >
              <img :src="MaskIcon" alt="Ambassador" />
            </div>
            <div class="inner-description">
              <h5>Services</h5>
              <p>
                Share your primary services, availability, skills, and work
                preferences.
              </p>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="inner-insight-data">
        <div
          class="card-visit-values d-flex justify-content-between align-items-center"
        >
          <div class="d-flex gap-3 align-items-center">
            <div
              class="card-visit-icon d-flex align-items-center justify-content-center"
            >
              <img :src="BlueBag" alt="Ambassador" />
            </div>
            <div class="inner-description">
              <h5>Content Page</h5>
              <p>
                Upload, embed, and build audiovisual content pages straight to
                your bizlyCard. Content includes links, images, videos, and
                audio.
              </p>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div class="footer-btn">
        <a href="#"
          ><img :src="PrivacyIcon" alt="Ambassador" class="mb-1" /> Privacy</a
        >
        <a href="#"
          ><img :src="MembershipIcon" alt="Ambassador" /> Membership</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$color_1: #141414;
$color_2: #ffffff;
$color_3: #39537d;
$color_4: #595959;
$color_5: #141414;
$color_6: #3578f8;
$color_7: #595959;

$font-family_1: "Roboto";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 664px;
  background: #ffffff;
  border-radius: 16px;
  padding: 0px;
  max-height: 90%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .header-content {
    border-bottom: 1px solid #cdd5e1;
    padding: 20px 16px 20px;

    img {
      cursor: pointer;
    }

    h1 {
      font-family: "Ubuntu";
      font-style: italic;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #39537d;
      margin-bottom: 0;
    }

    a {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #3578f8;
      text-decoration: none;
    }
  }

  .inner-toggle {
    background: #eff1f5;
    border-radius: 32px;
    padding: 8px 16px 8px 49px;
    margin: 16px;
    min-height: auto !important;
  }

  .bizycard-btn {
    padding: 0px 20px 16px 35px;

    a {
      background: #39537d;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      padding: 6px 36px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      text-decoration: none;

      span {
        font-family: "Ubuntu";
        font-style: italic;
        font-weight: 700;
      }
    }
  }
}

.form-check-input {
  height: 20px;
  width: 36px;
}

.form-check-input:checked {
  background-color: #39537d;
  border-color: #39537d;
}

label {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #595959;
  margin-bottom: 0;
  padding-left: 9px;
}

.inner-insight-data {
  margin: 0px 16px 16px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  .card-visit-values {
    .inner-description {
      p {
        max-width: 480px !important;
      }
    }

    padding: 16px 16px;

    .card-visit-icon {
      width: 44px;
      height: 44px;
      background: #eff1f5;
      border-radius: 50%;
    }

    p {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $color_7;
      margin-bottom: 0;
      max-width: 540px;
    }

    h5 {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $color_1;
      margin-bottom: 0;
    }
  }
}

.footer-btn {
  margin: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #39537d;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    padding: 16px 0;
  }
}
</style>
<script setup>
import BackArrow from "~/src/assets/images/back-arrow.png";
import StatisticsIcon from "~/src/assets/images/info-icon.png";
import BlueClockIcon from "~/src/assets/images/degree-icon.png";
import UserBlue from "~/src/assets/images/user-blue.png";
import MaskIcon from "~/src/assets/images/Mask-icon.png";
import BlueBag from "~/src/assets/images/blue-bag.png";
import PrivacyIcon from "~/src/assets/images/Privacy-icon.png";
import MembershipIcon from "~/src/assets/images/membership-icon.png";
</script>
