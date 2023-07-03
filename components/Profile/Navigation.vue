<template>
    <nav class="profile-nav">
        <div class="info-section">
            <div class="profile-pic">
                <img :src="data?.owner?.image || NoProfilePic" alt="">
            </div>
            <div class="info">
                <h6 class="mb-0 text-transform-capitalize"> {{ data?.owner?.first_name }} {{ data?.owner?.last_name }}</h6>
                <p class="mb-0">{{ data?.owner?.roles.join(" . ") }}</p>
            </div>
        </div>
        <div class="contact-section d-none d-lg-block">
            <input type="email" placeholder="Email">
            <button>Join</button>
        </div>
    </nav>
</template>
<script setup>
import NoProfilePic from '../../assets/images/NoProfilePic.png';

defineProps({
    data: Object
})
</script>
<style scoped lang="scss">
.profile-nav {
    position: fixed;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10%;
    z-index: 4;

    .info-section {
        display: flex;
        align-items: center;
        justify-content: center;

        .profile-pic {
            height: 35px;
            width: 35px;
            border-radius: 50px;
            background-color: #ffffff;
            margin-right: 10px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .info {
            h6 {
                font-size: 14px;
                font-weight: 400;
                color: #ffffff;
            }

            p {
                font-size: 13px;
                color: #8c8c8c;
                display: inline-block;
            }
        }
    }

    .contact-section {
        input {
            color: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 30px;
            padding: 0px 20px;
            background-color: transparent;
            height: 35px;
            outline: none;
            width: 16rem;
            margin-right: 15px;
            font-size: 1rem;
            font-weight: 300;

            &:focus {
                box-shadow: none;
            }

            &::placeholder {
                color: #ffffff;
                font-weight: 300;
            }
        }

        button {
            background-color: white;
            outline: none;
            border: none;
            border-radius: 30px;
            height: 35px;
            padding: 0px 30px;
            font-weight: bold;
        }
    }
}
</style>