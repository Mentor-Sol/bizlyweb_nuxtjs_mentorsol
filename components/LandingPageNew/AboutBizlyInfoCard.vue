<template>
  <div class="main-info-card">
    <div class="bizly-card">
      <div
        class="bizly-heading-wrapper"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div class="head-wrap">
          <div class="heading">CREATE</div>
          <div class="heading-main">Your <span>bizlyCard</span></div>
          <div class="para-main">
            A dynamic profile showcasing your content, contact info, and much
            more, all in one seamless experience.
          </div>
        </div>
      </div>
      <div class="bizly-card-wrapper">
        <div class="about-card" data-aos="fade-left" data-aos-duration="2000">
          <div class="about-img">
            <img :src="Info" alt="info" width="75" height="75" />
          </div>
          <div class="about-text">
            <div class="about-heading">About</div>
            <div class="about-para">
              Introduce yourself with your latest photos and videos to tell your
              story.
            </div>
          </div>
        </div>
        <div class="contact-card" data-aos="fade-left" data-aos-duration="2000">
          <div class="contact-img">
            <img :src="Contact" alt="Contact" width="75" height="75" />
          </div>
          <div class="contact-text">
            <div class="contact-heading">Contact</div>
            <div class="contact-para">
              Streamline your contact info and social links in one place.
            </div>
          </div>
        </div>
        <div class="content-card" data-aos="fade-left" data-aos-duration="2000">
          <div class="content-img">
            <img :src="Content" alt="content" width="75" height="75" />
          </div>
          <div class="content-text">
            <div class="content-heading">Content</div>
            <div class="content-para">
              Effortlessly upload, embed, and build content pages straight to
              your <span>bizlyCard.</span>
            </div>
          </div>
        </div>
        <div
          class="experience-card"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div class="experience-img">
            <img :src="Experience" alt="experience" width="75" height="75" />
          </div>
          <div class="experience-text">
            <div class="experience-heading">Experience</div>
            <div class="experience-para">
              A modern day CV page that works for you! Personalize it however
              you would like for others to view your past work experience.
            </div>
          </div>
        </div>
        <div class="service-card" data-aos="fade-left" data-aos-duration="2000">
          <div class="service-img">
            <img :src="Services" alt="services" width="75" height="75" />
          </div>
          <div class="service-text">
            <div class="service-heading">Service</div>
            <div class="service-para">
              Share your expertise, availability, skills, and work preferences.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Info from "~/src/assets/images/info.svg";
import Contact from "~/src/assets/images/contact-card.svg";
import Content from "~/src/assets/images/content-card.svg";
import Experience from "~/src/assets/images/experience-card.svg";
import Services from "~/src/assets/images/services-card.svg";
</script>

<style lang="scss" scoped>
.main-info-card {
  width: 100%;

  .bizly-card {
    display: flex;
    gap: 6rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
    }
    .bizly-heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .head-wrap {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 0% 10%;

        .heading {
          color: #aebacc;
          font-size: 21px;
          text-decoration: none;
          text-align: left;
          @media screen and (max-width: 768px) {
            text-align: center;
          }
        }
        .heading-main {
          color: #ffffff;
          font-size: 60px;
          text-align: left;
          @media screen and (max-width: 768px) {
            font-size: 36px;
            text-align: center;
          }
          span {
            font-weight: 600;
            font-style: italic;
          }
        }
        .para-main {
          color: #8f9fb8;
          font-size: 21px;
          text-decoration: none;
          text-align: left;
          @media screen and (max-width: 768px) {
            font-size: 18px;
            text-align: center;
          }
        }
      }
    }
    .bizly-card-wrapper {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media screen and (max-width: 768px) {
        width: 90%;
        margin: auto;
      }
      .about-card {
        background: #ffffff;
        border-radius: 15px;
        max-width: 500px;
        display: flex;
        padding: 1.5rem;
        gap: 2rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          gap: 1rem;
          text-align: center;
        }
        .about-text {
          .about-heading {
            color: #141414;
            font-size: 21px;
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 18px;
            }
          }
          .about-para {
            color: #595959;

            font-size: 16px;
            text-decoration: none;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 14px;
            }
          }
        }

        &:hover {
          transform: translateX(0px) translateY(0px) scaleX(1.05) scaleY(1.05)
            rotate(0deg) skewX(0deg) skewY(0deg);
        }
      }
      .contact-card {
        background: #ffffff;
        border-radius: 15px;
        max-width: 500px;
        display: flex;
        padding: 1.5rem;
        gap: 2rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          gap: 1rem;
          text-align: center;
        }

        .contact-text {
          .contact-heading {
            color: #141414;
            font-size: 21px;
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 18px;
            }
          }
          .contact-para {
            color: #595959;

            font-size: 16px;
            text-decoration: none;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 14px;
            }
          }
        }

        &:hover {
          transform: translateX(0px) translateY(0px) scaleX(1.05) scaleY(1.05)
            rotate(0deg) skewX(0deg) skewY(0deg);
        }
      }
      .content-card {
        background: #ffffff;
        border-radius: 15px;
        max-width: 500px;
        display: flex;
        padding: 1.5rem;
        gap: 2rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          gap: 1rem;
          text-align: center;
        }
        .content-text {
          .content-heading {
            color: #141414;
            font-size: 21px;
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 18px;
            }
          }
          .content-para {
            color: #595959;

            font-size: 16px;
            text-decoration: none;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 14px;
            }
          }
        }

        &:hover {
          transform: translateX(0px) translateY(0px) scaleX(1.05) scaleY(1.05)
            rotate(0deg) skewX(0deg) skewY(0deg);
        }
      }
      .experience-card {
        background: #ffffff;
        border-radius: 15px;
        max-width: 500px;
        display: flex;
        padding: 1.5rem;
        gap: 2rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          gap: 1rem;
          text-align: center;
        }
        .experience-text {
          .experience-heading {
            color: #141414;
            font-size: 21px;
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 18px;
            }
          }
          .experience-para {
            color: #595959;

            font-size: 16px;
            text-decoration: none;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 14px;
            }
          }
        }

        &:hover {
          transform: translateX(0px) translateY(0px) scaleX(1.05) scaleY(1.05)
            rotate(0deg) skewX(0deg) skewY(0deg);
        }
      }
      .service-card {
        background: #ffffff;
        border-radius: 15px;
        max-width: 500px;
        display: flex;
        padding: 1.5rem;
        gap: 2rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          gap: 1rem;
          text-align: center;
        }
        .service-text {
          .service-heading {
            color: #141414;
            font-size: 21px;
            text-decoration: none;
            font-weight: 500;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 18px;
            }
          }
          .service-para {
            color: #595959;

            font-size: 16px;
            text-decoration: none;
            text-align: left;
            @media screen and (max-width: 768px) {
              text-align: center;
              font-size: 14px;
            }
          }
        }

        &:hover {
          transform: translateX(0px) translateY(0px) scaleX(1.05) scaleY(1.05)
            rotate(0deg) skewX(0deg) skewY(0deg);
        }
      }
    }
  }
}
</style>
