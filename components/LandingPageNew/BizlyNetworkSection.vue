<template>
  <div class="networkMain" data-aos="fade-right" data-aos-duration="2000">
    <div class="bizlyNetworkImage">
      <img :src="ProfileMob" alt="profile mob" />
    </div>
    <div class="bizlyNetworkSection">
      <div>
        <div class="bizly-heading">CONNECT</div>
        <div class="bizly-main-heading">On <span>bizlyNetwork</span></div>
        <div class="bizly-network-para">
          Network remotely and in person without having to exchange a business
          card. Networking with the right people just got a whole lot easier.
        </div>
      </div>
      <div class="search-card">
        <div class="search-heading">Search and filter</div>
        <div class="search-para">
          Filter your search by services, name, role, tags, location, and
          company!
        </div>
        <hr class="hr-line" />
        <div class="search-chat">Chat</div>
        <div class="search-chat-para">
          Communicate with others using the instant messaging feature.
        </div>
        <hr class="hr-line" />
        <div class="search-share">Share</div>
        <div class="search-share-para">
          Share <span>bizlyCards</span> with your peers who may be looking for
          someone for an upcoming project, or for a new opportunity.
        </div>
        <hr class="hr-line" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileMob from "~/src/assets/images/profile-mob.svg";
</script>

<style lang="scss" scoped>
.networkMain {
  display: flex;
  padding: 5rem !important;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .bizlyNetworkImage {
    width: 50%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    img {
      width: 500px;
      height: 850px;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
  }
  .bizlyNetworkSection {
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

    .bizly-heading {
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
    .bizly-main-heading {
      font-size: 56px;
      font-weight: 400;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-size: 35px;
        text-align: center;
      }
      span {
        font-weight: 700;
        font-style: italic;
      }
    }
    .bizly-network-para {
      color: #8f9fb8;
      font-size: 21px;
      text-decoration: none;
      text-align: left;
      @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 18px;
      }
    }
    .search-card {
      background: rgba(0, 0, 0, 0.2);
      box-shadow: -7px 0px 22px 2px rgba(0, 0, 0, 0.51);
      padding: 30px;
      border-radius: 16px;
      .hr-line {
        @media screen and (max-width: 768px) {
          visibility: hidden;
        }
      }
      .search-heading {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      .search-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgb(89, 89, 89);
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }

      .search-chat {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      .search-chat-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgb(89, 89, 89);
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      .search-share {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      .search-share-para {
        color: #cdd5e1;
        font-size: 16px;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }
}
</style>
