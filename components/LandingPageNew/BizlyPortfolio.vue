<template>
  <div
    class="porfolio-main-heading"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    Your business. Your rules.
  </div>
  <div class="porfolio-main-para" data-aos="fade-up" data-aos-duration="2200">
    bizly empowers you to take control of your professional life and make it
    work for you. Whether you're a freelancer, an entrepreneur, a performer, or
    any type of creative, bizly provides the tools and resources you need to
    succeed. Create a personalized profile, showcase your skills and
    achievements, and connect with like-minded individuals in your industry.
    With bizly, you set the rules for how you want to grow your business,
    network, and find new opportunities. So, take control of your career today
    and make bizly a part of your success story.
  </div>
  <div class="portfolioCardWrapper" data-aos="fade-up" data-aos-duration="2300">
    <div
      class="portfolioCardCreative"
      @click="handleActive"
      :class="isActive ? 'content-active' : null"
    >
      <div class="portfolio-wrapper">
        <span>
          <div class="heading">Creative</div>
          <div
            class="plus d-flex m-0 align-items-center justify-content-center px-3 py-1"
          >
            <span> + </span>
          </div>
        </span>
        <div class="portfolio-para">
          Showcase your portfolio and network with other creatives in your
          industry. Find and post job opportunities, locally or globally.
          Organize your contacts and stay informed of new job postings that
          match your desired industry and role. Make the most of your creative
          career with bizly.
        </div>
      </div>
    </div>
    <div
      class="portfolioCardTalent"
      @click="handleActive"
      :class="isActive ? 'content-active' : null"
    >
      <div class="portfolio-wrapper">
        <span>
          <div class="heading">Talent</div>
          <div
            class="plus d-flex m-0 align-items-center justify-content-center px-3 py-1"
          >
            <span> + </span>
          </div>
        </span>
        <div class="portfolio-para">
          bizly allows your talent to take center stage. Highlight your talents,
          network with others, and find the opportunity you’ve been working
          towards. With features like personalized portfolios and detailed
          talent attributes, you can easily promote your work and grow your
          network.
        </div>
      </div>
    </div>
    <div
      class="portfolioCardCreative"
      @click="handleActive"
      :class="isActive ? 'content-active' : null"
    >
      <div class="portfolio-wrapper">
        <span>
          <div class="heading">Professionals</div>
          <div
            class="plus d-flex m-0 align-items-center justify-content-center px-3 py-1"
          >
            <span> + </span>
          </div>
        </span>
        <div class="portfolio-para">
          Stand out and make a lasting impression by showcasing your
          professional background and qualifications with ease. With effective
          contact management and a resume feature, you'll have a centralized hub
          for networking and exchanging information.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = useState(() => false);
const handleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.porfolio-main-heading {
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    padding: 1rem;
  }
}
.porfolio-main-para {
  font-weight: 400;
  font-size: 18px;
  color: #8f9fb8;
  text-align: center;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}
.portfolioCardWrapper {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
  .portfolioCardCreative {
    display: flex;
    flex-direction: column;
    background-image: url("../../src/assets/images/pexels-kyle-loftus.webp");
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    width: 485px;
    height: 500px;
    border-radius: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 3.54px 3.54px 41px 20px rgba(0, 0, 0, 0.83);
    transition: all 0.3s ease-in;
    gap: 12rem;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100% !important;
      height: auto !important;
      gap: 1rem;
      padding: 1rem;
    }
    .portfolio-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 13rem;
      width: 100%;
      height: 100%;
      transition: all 0.7s;
      transform: translateY(85%);
      padding: 0rem 2rem;
      @media screen and (max-width: 768px) {
        gap: 2rem !important;
        padding: 0rem 1rem !important;
      }
      span {
        display: flex;
        justify-content: space-between;
      }

      .heading {
        color: #ffffff;
        font-weight: 400;
        font-size: 28px;
        font-style: normal;
        text-align: left;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .plus {
        font-size: 24px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.4s;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          padding: 0rem 0.5rem !important;
        }
        span {
          transition: all 0.4s;
        }
      }
    }
    .portfolio-para {
      color: #cdd5e1;
      line-height: 29px;
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0);
      .plus {
        background: #ffffff;
        color: black;
        span {
          transform: rotate(180deg);
        }
      }
    }
    &:is(.content-active) {
      background-color: rgba(0, 0, 0, 0.7);
      .portfolio-wrapper {
        padding: 2rem;
        transform: translateY(0%);
      }
    }
  }
  .portfolioCardTalent {
    display: flex;
    flex-direction: column;
    background-image: url("../../src/assets/images/pexels-kyle-loftus.webp");
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    width: 485px;
    height: 500px;
    border-radius: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 3.54px 3.54px 41px 20px rgba(0, 0, 0, 0.83);
    transition: all 0.3s ease-in;
    gap: 12rem;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100% !important;
      height: auto !important;
      gap: 1rem;
      padding: 1rem;
    }
    .portfolio-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 13rem;
      width: 100%;
      height: 100%;
      transition: all 0.7s;
      transform: translateY(85%);
      padding: 0rem 2rem;
      @media screen and (max-width: 768px) {
        gap: 2rem !important;
        padding: 0rem 1rem !important;
      }
      span {
        display: flex;
        justify-content: space-between;
      }

      .heading {
        color: #ffffff;
        font-weight: 400;
        font-size: 28px;
        font-style: normal;
        text-align: left;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .plus {
        font-size: 24px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.4s;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          padding: 0rem 0.5rem !important;
        }
        span {
          transition: all 0.4s;
        }
      }
    }
    .portfolio-para {
      color: #cdd5e1;
      line-height: 29px;
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0);
      .plus {
        background: #ffffff;
        color: black;
        span {
          transform: rotate(180deg);
        }
      }
    }
    &:is(.content-active) {
      background-color: rgba(0, 0, 0, 0.7);
      .portfolio-wrapper {
        padding: 2rem;
        transform: translateY(0%);
      }
    }
  }
  .portfolioCardCreative {
    display: flex;
    flex-direction: column;
    background-image: url("../../src/assets/images/pexels-kyle-loftus.webp");
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    width: 485px;
    height: 500px;
    border-radius: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 3.54px 3.54px 41px 20px rgba(0, 0, 0, 0.83);
    transition: all 0.3s ease-in;
    gap: 12rem;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100% !important;
      height: auto !important;
      gap: 1rem;
      padding: 1rem;
    }
    .portfolio-wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 13rem;
      width: 100%;
      height: 100%;
      transition: all 0.7s;
      transform: translateY(85%);
      padding: 0rem 4rem;
      @media screen and (max-width: 768px) {
        gap: 2rem !important;
        padding: 0rem 1rem !important;
      }
      span {
        display: flex;
        justify-content: space-between;
      }

      .heading {
        color: #ffffff;
        font-weight: 400;
        font-size: 28px;
        font-style: normal;
        text-align: left;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
      .plus {
        font-size: 24px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.4s;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          padding: 0rem 0.5rem !important;
        }
        span {
          transition: all 0.4s;
        }
      }
    }
    .portfolio-para {
      color: #cdd5e1;
      line-height: 29px;
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0);
      .plus {
        background: #ffffff;
        color: black;
        span {
          transform: rotate(180deg);
        }
      }
    }
    &:is(.content-active) {
      background-color: rgba(0, 0, 0, 0.7);
      .portfolio-wrapper {
        padding: 2rem;
        transform: translateY(0%);
      }
    }
  }
}
</style>
