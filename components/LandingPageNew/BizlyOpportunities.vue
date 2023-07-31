<template>
  <div class="networkMain">
    <div
      class="bizlyNetworkImage"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <img :src="BizlyOpportunities" alt="BizlyOpportunities" />
    </div>
    <div
      class="bizlyNetworkSection"
      data-aos="fade-right"
      data-aos-duration="2200"
    >
      <div>
        <div class="opportunities-heading">Find</div>
        <div class="opportunities-main-heading">Opportunities</div>
        <div class="opportunities-para">
          Find and post your next gig, audition, or job using the opportunities
          feature!
        </div>
      </div>
      <div class="Find-card">
        <div class="Find-heading">Find Work</div>
        <div class="Find-para">
          Search for work based on your industry, location, or various other
          filters.
        </div>
        <hr />
        <div class="Recruit">Hire and Recruit</div>
        <div class="Recruit-para">
          Post upcoming gigs, jobs, and casting calls directly from the app.
        </div>
        <hr />
        <div class="notified">Get Notified</div>
        <div class="notified-para">
          Not enough hours in the day? Stay ahead of the game with bizly's job
          alerts, tailored to your target industry, role, or custom filters.
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import BizlyOpportunities from "~/src/assets/images/opportunitiesImg.svg";
</script>

<style lang="scss" scoped>
.networkMain {
  display: flex;
  .bizlyNetworkImage {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 550px;
      height: 769px;
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

    .opportunities-heading {
      color: #aebacc;
      font-weight: 500;
      font-size: 21px;
      text-decoration: none;
      text-align: left;
    }
    .opportunities-main-heading {
      font-size: 56px;
      font-weight: 400;
      color: #ffffff;
    }
    .opportunities-para {
      color: #8f9fb8;
      font-size: 21px;
      text-decoration: none;
      text-align: left;
    }
    .Find-card {
      background: rgba(0, 0, 0, 0.2);
      box-shadow: -7px 0px 22px 2px rgba(0, 0, 0, 0.51);
      padding: 30px;
      border-radius: 16px;
      .Find-heading {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
      }
      .Find-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgb(89, 89, 89);
      }

      .Recruit {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
      }
      .Recruit-para {
        color: #cdd5e1;
        font-size: 16px;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgb(89, 89, 89);
      }
      .notified {
        color: #ffffff;
        font-size: 21px;
        font-weight: 400;
      }
      .notified-para {
        color: #cdd5e1;
        font-size: 16px;
      }
    }
  }
}
</style>
