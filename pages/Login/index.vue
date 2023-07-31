<template>
  <div class="login-bg d-flex justify-content-center align-items-center">
    <form
      class="login-form d-flex align-items-center flex-column p-0 px-md-5 py-md-4"
    >
      <!-- @submit="(e) => handleFormSubmit(e)" -->
      <div class="logo">
        <img :src="BizlyLogo" alt="Bizly_Logo" />
      </div>
      <h1
        class="text-left align-self-start text-white mt-5 mb-5"
        style="font-weight: 600"
      >
        Sign In
      </h1>
      <div class="form-group w-100 mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group w-100 d-flex flex-column mb-4">
        <span class="w-100 d-flex">
          <input type="password" class="form-control" placeholder="Password" />
          <!-- <button type="button" @click="togglePasswordShow()" class="p-2 showpass"><img :src="Eye"></button> -->
        </span>
        <!-- <p class="text-white align-self-end">Forgot Password?</p> -->
      </div>
      <button
        type="submit"
        class="btn btn-white bg-white w-100 py-2 submitBtn my-2 mb-4"
      >
        Sign In
      </button>
      <div
        class="seperator-text w-100 d-flex justify-content-center align-items-center px-2 mb-4"
      >
        <div class="seperator"></div>
        <p class="mx-2">or</p>
        <div class="seperator"></div>
      </div>
      <div
        class="social-sign-in d-flex justify-content-evenly w-100 px-2 my-2 mb-3"
      >
        <button type="button"><img :src="Google" alt="Google" /></button>
        <button type="button"><img :src="Facebook" alt="Facebook" /></button>
        <button type="button"><img :src="LinkedIn" alt="LinkedIn" /></button>
        <button type="button"><img :src="Apple" alt="Apple" /></button>
      </div>
      <!-- <p class="text-white">
                Don't have an account?<a href="#"> Sign Up</a>
            </p> -->
    </form>
  </div>
</template>
<script setup>
import BizlyLogo from "~/src/assets/images/Logo.svg";
import Google from "~/src/assets/images/google.svg";
import Facebook from "~/src/assets/images/facebook.svg";
import LinkedIn from "~/src/assets/images/linkedin.svg";
import Apple from "~/src/assets/images/apple.svg";

import { storeToRefs } from "pinia";
import { useStore } from "../../store";
import { onMounted } from "vue";
const { loading, isAuthenticated } = storeToRefs(useStore());
const route = useRouter();
const handleFormSubmit = (e) => {
  isAuthenticated = true;
  e.preventDefault();
  route.push("/");
};
onMounted(() => {
  loading.value = false;
  isAuthenticated.value = true;
});
// var inputType = useState(() => 'password');
// const togglePasswordShow = () => {
//     console.log(inputType)
//     if (inputType == 'text') {
//         inputType = 'password
//     }
//     else {
//         inputType == 'text  '
//     }
// }
</script>
<style lang="scss">
* {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

.login-bg {
  width: 100%;
  height: 100vh;
  // background: url("../../src/assets/images/Hero.png");
  background: url("../../src/assets/images/Hero1.jpg");
  // background: url("../../src/assets/images/Hero2.jpg");
  background-blend-mode: screen;
  background-size: cover;
  background-repeat: no-repeat;

  .login-form {
    z-index: 1;
    height: 90%;
    width: 40%;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.4);
    // padding: 20px 50px;

    .logo {
      height: 60px;
      // width: 100px;
      // margin-left: -85px !important;

      img {
        height: 100%;
        // filter: drop-shadow(0 0 10px black);
      }
    }

    .form-group {
      input {
        padding: 15px 20px !important;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        color: white;

        &::placeholder {
          color: rgba(255, 255, 255, 0.836);
        }

        &:focus {
          box-shadow: none;
        }
      }

      .passwordInput {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px;
      }

      .passwordInput:focus .showPass {
        border-bottom: 1px solid white;
      }

      button {
        background-color: rgba(0, 0, 0, 0.4) !important;
        color: white;
        border: none;
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
      }
    }

    .submitBtn {
      border-radius: 30px;
      font-weight: bold;
    }

    .seperator-text {
      color: white;

      // p {
      //     width: 35ch;
      // }

      .seperator {
        height: 1px;
        background-color: white;
        width: -webkit-fill-available;
        // width: 50%;
      }
    }

    .social-sign-in {
      button {
        outline: none;
        border: none;
        background-color: white;
        // padding: 10px !important;
        border-radius: 50%;
        height: 40px;
        width: 40px;

        img {
          height: 70%;
          width: 70%;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .login-form {
    // height: 100% !important;
    width: 80% !important;
  }
}

@media screen and (max-width: 768px) {
  .login-form {
    height: 100% !important;
    width: 100% !important;

    .logo {
      height: 40px !important;
    }
  }
}

@media screen and (max-width: 480px) {
  .login-form {
    padding: 10px 20px !important;

    .logo {
      margin-bottom: 40px !important;
    }

    .social-sign-in {
      justify-content: space-between !important;

      button {
        height: 40px !important;
        width: 40px !important;

        img {
          height: 40px;
          width: 40px;
        }
      }
    }
  }
}
</style>
