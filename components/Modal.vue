<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <div class="header-content d-flex align-items-center justify-content-between">
        <img :src="BackArrow" alt="Ambassador" @click="showModal = false" />
        <h1>bizCard</h1>
        <a href="#">Save</a>

      </div>
      <ul class="nav home-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
            role="tab" aria-controls="contact" aria-selected="true">

            <p>Photos</p>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="content-tab" data-bs-toggle="tab" data-bs-target="#content" type="button"
            role="tab" aria-controls="content" aria-selected="false">

            <p>Info</p>
          </button>
        </li>

      </ul>
      <div class="tab-content" id="myTabContentHome">
        <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="main-thums-Slider About-slider">
            <AboutModalSlider />
          </div>
        </div>
        <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
          <div class="form-check form-switch inner-toggle">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Toggles indicate if selected information is
              viewable by people outside your network.
            </label>
          </div>

          <div class="inner-insight-data">

            <div class="card-visit-values ">
              <div>
                <h5>About</h5>
                <p>Make a lasting impact with your first impression. This includes your profile photos, primary location,
                  current occupation, and bio!</p>

              </div>
              <div class="form-section">
                <div class="form-group">
                  <input type="text" name="" id="" placeholder="Full Name*">
                </div>
                <div class="form-groups d-flex align-items-center gap-3">

                  <div class="w-100">
                    <select name="Pronouns" id="Pronouns" class="w-100">
                      <option value="Pronouns">Pronouns</option>
                      <option value="nameone">She / Her</option>
                      <option value="nametwo">He / Him</option>
                      <option value="namethree">They / Them</option>
                      <option value="namefour"> Ze / Zirs
                      </option>

                    </select>
                  </div>
                  <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">

                  </div>

                </div>
                <div class="form-groups d-flex align-items-center gap-3">

                  <div class="w-100">
                    <input type="text" name="" id="" placeholder="Title">

                  </div>
                  <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">

                  </div>

                </div>
                <div class="form-groups d-flex align-items-center gap-3">

                  <div class="w-100">
                    <input type="text" name="" id="" placeholder="Current Company">

                  </div>
                  <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">

                  </div>

                </div>
                <div class="form-groups d-flex align-items-center gap-3">

                  <div class="w-100">
                    <input type="text" name="" id="" placeholder="Location ">

                  </div>
                  <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">

                  </div>

                </div>

              </div>
            </div>


          </div>
          <div class="inner-insight-data">

            <div class="card-visit-values ">
              <div>
                <div class="d-flex justify-content-between">
                  <div>
                    <h5>Pitch Yourself</h5>
                  </div>
                  <div class="form-check form-switch ">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">

                  </div>

                </div>
                <p>Provide a quick description of who you are, what you do, and anything else you’d like people to know!
                </p>

              </div>
              <div class="form-section">

                <div class="text-area-section">
                  <textarea v-model="text" @input="updateCounts"></textarea>

                  <span>{{ characterCount }}/150</span>
                </div>


              </div>
            </div>


          </div>
        </div>

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
  data() {
    return {
      text: "",
      wordCount: 0,
      characterCount: 0,
    };
  },
  methods: {
    updateCounts() {
      const words = this.text.trim().split(" ");
      this.wordCount = words.length;
      this.characterCount = this.text.length;
    },
  },
  components: { AboutModalSlider }
};
</script>

<style lang="scss" scoped>
$color_1: #141414;
$color_2: #FFFFFF;
$color_3: #39537D;
$color_4: #595959;
$color_5: #141414;
$color_6: #3578F8;
$color_7: #595959;

$font-family_1: 'Roboto';

// About modal start

$background-color_1: transparent;

.TabsWrapper {
  background-color: #fff;
  padding: 16px !important;
}

.home-tabs {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  border-bottom: none !important;
  margin: 16px !important;
  background: #EFF1F5;
  border-radius: 30px;
  padding: 0px 0px 0px !important;

  .nav-link {
    width: 306px;
    border: none;
    color: $color_1;
    background-color: $background-color_1;
    border-radius: 30px;

    &.active {
      background-color: #39537D;
      border-bottom: 2px solid white;
      border-radius: 30px;
      border: none;

      p {

        color: #FFFFFF;
      }



    }



    p {
      font-family: $font-family_1;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #39537D;
      margin-bottom: 0;

    }
  }



}




.inner-insight-data {
  margin: 0px 16px 16px;
  background: #FFFFFF;
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
      background: #EFF1F5;
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
      color: $color_1 ;
      margin-bottom: 0;


    }
  }

}

.form-check-input {
  height: 20px;
  width: 36px;
}

.form-check-input:checked {
  background-color: #39537D;
  border-color: #39537D;
}

.form-group {
  input {
    background: #FFFFFF;
    border: 1px solid #CDD5E1;
    border-radius: 4px;
    padding: 12px 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #8F9FB8;
    width: 100%;
    margin-bottom: 8px;

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #8F9FB8;
    }
  }


}

.form-groups {
  input[type="text"] {
    background: #FFFFFF;
    border: 1px solid #CDD5E1;
    border-radius: 4px;
    padding: 12px 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #8F9FB8;
    width: 100%;
    margin-bottom: 8px;

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #8F9FB8;
    }
  }

}

select {

  background: #FFFFFF;
  border: 1px solid #CDD5E1;
  border-radius: 4px;
  padding: 12px 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8F9FB8;
  width: 90%;
  margin-bottom: 8px;

}

.text-area-section {
  position: relative;

  textarea {
    background: #FFFFFF;
    width: 100%;
    margin-top: 16px;
    border: 1px solid #CDD5E1;
    border-radius: 4px;
    padding: 12px;
    height: 102px;
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8F9FB8;

  }

  span {
    font-family: $font-family_1;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    color: #8F9FB8;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
}

.modal-content {
  border: none !important;
}

// About modal End
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
  background: #FFFFFF;
  border-radius: 16px;
  padding: 0px;
  max-height: 90%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .header-content {
    border-bottom: 1px solid #CDD5E1;
    padding: 20px 16px 20px;

    img {
      cursor: pointer;
    }

    h1 {
      font-family: 'Ubuntu';
      font-style: italic;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #39537D;
      margin-bottom: 0;
    }

    a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #3578F8;
      text-decoration: none;

    }
  }

  .inner-toggle {
    background: #EFF1F5;
    border-radius: 32px;
    padding: 8px 16px 8px 49px;
    margin: 16px;
    min-height: auto !important;


  }

  .bizycard-btn {
    padding: 0px 20px 16px 35px;

    a {
      background: #39537D;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      padding: 6px 36px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      text-decoration: none;

      span {
        font-family: 'Ubuntu';
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
  background-color: #39537D;
  border-color: #39537D;
}

label {
  font-family: 'Roboto';
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
  background: #FFFFFF;
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
      background: #EFF1F5;
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
      color: $color_1 ;
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
    background: #39537D;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-decoration: none;
    width: 100%;
    padding: 16px 0;

  }
}
</style>
<script setup>
import BackArrow from "~/public/assets/images/back-arrow.png";
import StatisticsIcon from "~/public/assets/images/info-icon.png"
import BlueClockIcon from "~/public/assets/images/degree-icon.png"
import UserBlue from "~/public/assets/images/user-blue.png"
import MaskIcon from "~/public/assets/images/Mask-icon.png"
import BlueBag from "~/public/assets/images/blue-bag.png"
import PrivacyIcon from "~/public/assets/images/Privacy-icon.png"
import MembershipIcon from "~/public/assets/images/membership-icon.png"
import AboutModalSlider from "./AboutModalSlider.vue";





</script>