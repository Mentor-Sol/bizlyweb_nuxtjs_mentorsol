<template>
  <div className="BannerWrapper">
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="bannerImg">
            <Slick>
              <div className="inner-bannerImg">
                <img :src="data?.owner?.image" />
              </div>
            </Slick>
          </div>

          <div className="bannerInner container-fluid">
            <div className="userName">
              <h3 class="text-transform">
                {{ data?.owner?.first_name }} {{ data?.owner?.last_name }}
              </h3>
              <div>

                <p class="role" v-for="role in data?.owner?.roles">{{ role }}<span></span></p>
              </div>
              <div className="socialWork d-flex flex-wrap mb-3">
                <p v-for="(item, index) in data?.professional_skills" :key="{ index }">{{ item }}<span></span></p>
              </div>
              <div>
                <div className="d-flex gap-2 SelfEmployed">
                  <img :src="SelfEmployeeIcon" alt="Self " />
                  <p>{{ toUpperCaseFirstLetter(data?.owner?.occupation?.employment_type) }}</p>
                </div>
                <div className="d-flex gap-2  SelfEmployed">
                  <img :src="LocationIcon" alt="Self " />
                  <p>{{ data?.owner?.location }}</p>
                </div>
              </div>
              <div className="bannerDesc">
                <p>{{ data?.about }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde accusamus nisi
                  dignissimos? Deleniti, saepe aliquid. Libero repellat, ad, nihil officiis eveniet debitis fuga hic
                  veritatis quaerat tempora dolore, perferendis reiciendis incidunt quod? Quam a earum fugit, ipsam
                  reprehenderit voluptatibus laboriosam hic, sapiente mollitia consequatur quasi assumenda. Cupiditate,
                  placeat explicabo?</p>
              </div>
              <div className="d-flex messageIcon">
                <img :src="MessageIcon" alt="Ambassador" />
                <img :src="PlusUserIcon" alt="Ambassador" />
              </div>
              <div v-for="(item, index) in data?.buttons" :key="{ index }" className="bannerBtn">
                <CustomButton :text="item?.title" @click="handleClick(item)" />
              </div>
              <div className="tags">
                <p v-for="(item, index) in data?.tags" :key="index">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue"
import SelfEmployeeIcon from "~/src/assets/images/self.svg"
import LocationIcon from "~/src/assets/images/location.svg"
import MessageIcon from "~/src/assets/images/message.svg"
import PlusUserIcon from "~/src/assets/images/ambassador.svg"

defineProps({
  data: [Object, Array],
});

function handleClick(item) {
  window.open(item.url);
}

function toUpperCaseFirstLetter(letter) {
  const arr = letter?.replace("-", ' ').split(" ");
  for (var i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr?.join(" ");
  return str2
}
</script>

<style lang="scss" scoped>
.text-transform {
  text-transform: capitalize;
}

.BannerWrapper {
  position: relative;
  overflow: hidden;

  .bannerImg {
    position: absolute;
    right: 0;
    left: 0;

    img {
      height: 1800px;
      width: 100%;
      object-fit: cover;
    }
  }

  .bannerInner {
    z-index: 1;
    position: relative;
    padding: 10%;
    box-sizing: border-box;
    background: linear-gradient(to right, #000000, transparent);

    .userName {
      h3 {
        font-weight: 700;
        font-size: 72px;
        // line-height: 84px;
        color: #ffffff;
        max-width: 300px;
        margin-bottom: 10px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        display: inline-block;
        // line-height: 24px;
        color: #ffffff;
        margin-bottom: 10px;

        span {
          height: 4px;
          width: 4px;
          display: inline-block;
          border-radius: 50%;
          background-color: #ffffff;
          margin: 4px 14px;
        }

        &:last-of-type {
          span {
            display: none;
          }
        }
      }

      .socialWork {

        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #bfbfbf;
          margin-bottom: 0;
          text-transform: capitalize;

          span {
            height: 72%;
            width: 1px;
            display: inline-block;
            background-color: #bfbfbf;
            margin: -3px 10px;
          }

          &:last-of-type {
            span {
              display: none;
            }
          }
        }
      }

      .SelfEmployed {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        margin-bottom: 15px;

        p {
          margin-bottom: 0;
        }
      }

      .bannerDesc {
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #bfbfbf;
          max-width: 55%;
        }
      }

      .messageIcon {
        margin-top: 20px;
        gap: 30px;
        margin-bottom: 30px;
      }

      .CustomButton {
        margin-bottom: 10px;

        button {
          font-weight: 600;
          font-size: 14px;
          color: #141414;
          padding: 12px 82px;
          line-height: 24px;
          background: #ffffff;
          border-radius: 25px;
          border: none !important;
        }
      }

      .tags {
        display: flex;
        column-gap: 5px;
        row-gap: 5px;
        flex-wrap: wrap;
        width: 100%;
        max-width: 816px;
        margin-top: 30px;

        p {
          font-weight: 400;
          font-size: 12px;
          margin-bottom: 0;
          line-height: 10px;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid #ffffff;
          backdrop-filter: blur(2px);
          border-radius: 30px;
          padding: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .userName {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 40px;
      font-size: 40px !important;
      line-height: 3rem in !important;
    }

    h3,
    p {
      max-width: max-content !important;
    }

    p.role {
      font-size: 13px !important;
    }
  }
}
</style>