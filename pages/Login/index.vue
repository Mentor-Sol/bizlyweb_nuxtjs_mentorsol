<template>
    <div class="login-bg d-flex justify-content-center align-items-center">
        <form class="login-form d-flex align-items-center flex-column px-3 py-5">
            <!-- @submit="(e) => handleFormSubmit(e)" -->
            <div class="logo">
                <img :src="BizlyLogo" alt="Bizly_Logo">
            </div>
            <h1 class="text-left align-self-start text-white mt-5 mb-3" style="font-weight: 600;">Sign In</h1>
            <div class="form-group w-100 mb-3">
                <input type="text" class="form-control" placeholder="Enter your email">
            </div>
            <div class="form-group w-100 d-flex flex-column mb-4">
                <span class=" w-100 d-flex">
                    <input type="password" class="form-control" placeholder="Password">
                    <!-- <button type="button" @click="togglePasswordShow()" class="p-2 showpass"><img :src="Eye"></button> -->
                </span>
                <!-- <p class="text-white align-self-end">Forgot Password?</p> -->
            </div>
            <button type="submit" class="btn btn-white bg-white w-100 py-2 submitBtn my-2">Sign In</button>
            <div class="seperator-text w-100 d-flex justify-content-center align-items-center px-2">
                <div class="seperator"></div>
                <p class="mx-1">
                    OR
                </p>
                <div class="seperator"></div>
            </div>
            <div class="social-sign-in d-flex justify-content-evenly w-100 px-2 my-2 mb-3">
                <button type="button"><img :src="Google" alt="Google"></button>
                <button type="button"><img :src="Facebook" alt="Facebook"></button>
                <button type="button"><img :src="LinkedIn" alt="LinkedIn"></button>
                <button type="button"><img :src="Apple" alt="Apple"></button>
            </div>
            <!-- <p class="text-white">
                Don't have an account?<a href="#"> Sign Up</a>
            </p> -->
        </form>
    </div>
</template>
<script setup>
import BizlyLogo from "~/assets/images/logo.svg"
// import Eye from "~/assets/images/eye.png"
// import ClosedEye from "~/assets/images/closed-eye.png"
import Google from "~/assets/images/google.svg"
import Facebook from "~/assets/images/facebook.svg"
import LinkedIn from "~/assets/images/linkedin.svg"
import Apple from "~/assets/images/apple.svg"

import { storeToRefs } from 'pinia';
import { useStore } from "../../store";
import { onMounted } from 'vue';
const { loading } = storeToRefs(useStore());
const route = useRouter();
const handleFormSubmit = (e) => {
    e.preventDefault();
    route.push('/')
}
onMounted(() => {
    loading.value = false;
})
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
    background: url("../../assets/images/Hero.png");
    background-blend-mode: screen;
    background-size: cover;
    background-repeat: no-repeat;

    .login-form {
        height: 90%;
        width: 40%;
        border-radius: 10px;

        .logo {
            height: 100px;
            width: 100px;
            margin-left: -85px !important;

            img {
                height: 100%;
                filter: drop-shadow(0 0 10px black);
            }
        }

        .form-group {
            input {
                padding: 15px 20px !important;
                background-color: rgba(0, 0, 0, 0.4);
                border: none;
                color: white;
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
        }

        .seperator-text {
            color: white;

            .seperator {
                height: 1px;
                background-color: white;
                width: 50%;
            }
        }

        .social-sign-in {
            button {
                outline: none;
                border: none;
                background-color: white;
                // padding: 10px !important;
                border-radius: 50%;
                height: 60px;
                width: 60px;

                img {
                    height: 60%;
                    width: 60%;
                }
            }
        }
    }
}
</style>