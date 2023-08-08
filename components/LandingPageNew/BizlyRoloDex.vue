<template>
  <div>
    <div class="RoloDexMain">
      <div
        class="bizlyRoloDexSection"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div>
          <div class="bizly-rolo-heading">BUILD</div>
          <div class="bizly-rolo-main-heading">Your rolodex</div>
          <div class="bizly-rolodex-para">
            This is your new and improved contact list. An intuitive rolodex for
            organizing your business contacts.
          </div>
        </div>
        <div class="rolo-card">
          <div class="save-heading">Save</div>
          <div class="save-para">
            Whether you've met someone at an event, or found them in the
            <span>bizlyNetwork</span>, you can now store them in your bizlyList.
          </div>
          <hr />
          <div class="rolo-categorize">Categorize</div>
          <div class="rolo-categorize-para">
            Easily organize your network with customizable categories and
            sub-categories, complete with notes to help you remember the details
            of each connection.
          </div>
          <hr />
          <div class="rolo-collaborate">Collaborate</div>
          <div class="rolo-collaborate-para">
            Share your categorized contacts with ease, perfect for hiring and
            recruiting or sharing with peers.
          </div>
          <hr />
        </div>
      </div>
      <div
        class="bizlyRoloDexImage"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img :src="RoloDexMain" alt="RoloDexMain" width="640" />
      </div>
    </div>
  </div>
</template>

<script setup>
import RoloDexMain from "~/src/assets/images/roloDexMain.svg";
</script>

<style lang="scss" scoped>
.RoloDexMain {
  display: flex;
  padding: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
  }
  .bizlyRoloDexImage {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .bizlyRoloDexSection {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 50%;
    padding: 4rem;
    gap: 2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2rem;
      gap: 1rem;
    }
    .bizly-rolo-heading {
      color: #aebacc;
      font-weight: 500;
      font-size: 21px;
      text-decoration: none;
      text-align: left;
      @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
      }
    }
    .bizly-rolo-main-heading {
      font-size: 56px;
      font-weight: 400;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-size: 35px;
        text-align: center;
      }
    }
    .bizly-rolodex-para {
      color: #8f9fb8;
      font-size: 21px;
      text-decoration: none;
      line-height: normal;
      text-align: left;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
    .rolo-card {
      background: rgba(0, 0, 0, 0.2);
      box-shadow: -7px 0px 22px 2px rgba(0, 0, 0, 0.51);
      padding: 30px;
      border-radius: 16px;

      .save-heading {
        color: #ffffff;
        font-size: 21px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .save-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        line-height: normal;

        border-bottom: 1px solid rgb(89, 89, 89);
        @media screen and (max-width: 768px) {
          font-size: 14px;
          padding-bottom: 1rem;
          text-align: center;
        }
      }

      .rolo-categorize {
        color: #ffffff;
        font-size: 21px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .rolo-categorize-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        line-height: normal;

        border-bottom: 1px solid rgb(89, 89, 89);
        @media screen and (max-width: 768px) {
          font-size: 14px;
          padding-bottom: 1rem;
          text-align: center;
        }
      }
      .rolo-collaborate {
        color: #ffffff;
        font-size: 21px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .rolo-collaborate-para {
        color: #cdd5e1;
        line-height: normal;

        font-size: 16px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
</style>
