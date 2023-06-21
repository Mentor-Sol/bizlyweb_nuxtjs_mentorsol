<template>
    <nav class="profile-nav">
        <div class="info-section">
            <div class="profile-pic">
                <img :src="data?.owner?.image || NoProfilePic" alt="">
            </div>
            <div class="info">
                <h6 class="mb-0"> {{ data?.owner?.first_name }} {{ data?.owner?.last_name }}</h6>
                <p class="mb-0">{{ data?.owner?.roles.join(" . ") }}</p>
            </div>
        </div>
        <div class="contact-section">
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
    background-color: #141414;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10%;

    .info-section {
        display: flex;
        align-items: center;
        justify-content: center;

        .profile-pic {
            height: 50px;
            width: 50px;
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
                color: #ffffff;
            }

            p {
                color: #8c8c8c;
                display: inline-block;
            }
        }
    }

    .contact-section {
        input {
            color: #8c8c8c;
            border: 2px solid #8c8c8c;
            border-radius: 30px;
            padding: 0px 10px;
            background-color: transparent;
            height: 50px;
            outline: none;
            width: 20rem;
            margin-right: 15px;

            &:focus {
                box-shadow: none;
            }
        }

        button {
            background-color: white;
            outline: none;
            border: none;
            border-radius: 30px;
            height: 50px;
            padding: 0px 30px;
            font-weight: bold;
        }
    }
}
</style>