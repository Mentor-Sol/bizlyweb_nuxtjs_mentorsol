<template>
    <div class="notification-component">
        <!-- Add your notification component markup here -->
        <div class="inner-notification">
            <h5>Notifications</h5>
            <div class="notification-tags d-flex gap-2">
                <p class="active">All</p>
                <p>Following</p>
                <p>Favorites</p>
                <p>Opportunities</p>
                <p>Hiring</p>
                <p>Collaborations</p>
            </div>
            <div class="notification-values d-flex gap-3">
                <div class="notification-values-icons">
                    <img :src="UserNotificationiIcon" alt="Self " />
                </div>
                <div class="notification-values-description">
                    <p>Connection Requests</p>
                    <span>Manage, approve, or ignore requests</span>

                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="EyeNotificationIcon" alt="Self " />
                    </div>
                    <div class="notification-values-description">
                        <p>You had <span>135 visitors</span> in the last 24 hours! Keep up the good work!</p>
                        <a href="#">View more analytics</a>
                        <div class="notification-minutes">
                            <p>12m</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="NotificationManImg" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p><span>Hahn Miles </span> added a new <span>image gallery titled Bumble Headshots</span></p>
                        <a href="#">View</a>
                        <div class="notification-minutes">
                            <p>9m</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="NotificationSecondmanImg" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p><span>Hahn Miles</span> applied to you <span>gig</span> titled <span> Web Designer</span></p>
                        <a href="#">Manage Applicants</a>
                        <div class="notification-minutes">
                            <p>2h</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="HeartNotificationsIcon" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p>There are <span>3 opportunities</span> that you saved that close in the next <span>12
                                hours!</span></p>
                        <a href="#">See Opportunities</a>
                        <div class="notification-minutes">
                            <p>3h</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="NotificationFourmanImg" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p><span>Tiffany Arkansas</span> posted a <span> job</span> that matches your <span> service</span>
                            titled <span>Editor</span></p>
                        <a href="#">View Job</a>
                        <div class="notification-minutes">
                            <p>1h</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="NotificationFivemansImg" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p><span>Robert Fox</span> requested to add you as a collaborator on their <span> collection </span>
                            titled <span> “Welcome Back”</span></p>
                        <div class="d-flex gap-2">
                            <a href="#" class="btn-secondry">Accept</a>
                            <a href="#" class="btn-primary">View Job</a>
                        </div>
                        <div class="notification-minutes">
                            <p>1m</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>
            <div class="Unread-notification d-flex justify-content-between">
                <div class=" d-flex gap-3">
                    <div class="notification-values-icons">
                        <img :src="BizlyNotificationIcon" alt="Self " />
                    </div>
                    <div class="notification-values-description">

                        <p> Check out the latest features we rolled out!</p>
                        <div class="notification-minutes">
                            <p>2m</p>
                        </div>

                    </div>
                </div>
                <div class="menu-notification-icon">
                    <img :src="MenuTabs" alt="Self " />
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import UserNotificationiIcon from "~/src/assets/images/user-notification-icon.png"
import MenuTabs from "~/src/assets/images/Menu_tabs.png"
import EyeNotificationIcon from "~/src/assets/images/eye-notification-icon.png"
import NotificationManImg from "~/src/assets/images/notification-man-img.png"
import NotificationSecondmanImg from "~/src/assets/images/notification-secondman-img.png"
import HeartNotificationsIcon from "~/src/assets/images/heart-notifications-icon.png"
import NotificationFourmanImg from "~/src/assets/images/notification-fourman-img.png"
import NotificationFivemansImg from "~/src/assets/images/notification-fivemans-img.png"
import BizlyNotificationIcon from "~/src/assets/images/bizly-notification-icon.png"











</script>
  
<style scoped>
.notification-component {
    position: absolute;
    top: 60px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    width: 400px;
    right: 100px;
    z-index: 11;
}

.notification-component h5 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #141414;
    padding: 16px;

}

.notification-tags {
    background: rgba(247, 248, 251, 0.7);
    border-bottom: 1px solid #CDD5E1;
    overflow: auto;
    padding: 10px 16px;


}

.notification-tags::-webkit-scrollbar {
    display: none;
}

.notification-tags p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #39537D;
    border: 1px solid #39537D;
    backdrop-filter: blur(2px);
    border-radius: 30px;
    padding: 4px 8px;
    margin-bottom: 0;
}

.notification-tags .active {
    background-color: #5F7496;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #F7F8FB;
    padding: 4px 8px;
}

.notification-values {
    padding: 10px 16px;
}

.notification-values .notification-values-icons {
    background-color: #001F53;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notification-values .notification-values-description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #141414;
    margin-bottom: 0;

}

.notification-values .notification-values-description span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #595959;
}

.menu-notification-icon img {
    transform: rotate(90deg);
    cursor: pointer;
}

.Unread-notification {
    padding: 10px 16px;
    background: #EFF1F5;
    border-bottom: 1px solid #CDD5E1;

}

.Unread-notification:last-child {
    border-radius: 0 0 16px 16px;
}

.Unread-notification .notification-values-icons {
    background-color: #001F53;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Unread-notification .notification-values-description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #141414;
    margin-bottom: 0;
    max-width: 276px;
    margin-bottom: 10px;

}

.Unread-notification .notification-values-description .notification-minutes p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #8C8C8C;
    margin-top: 10px;
    margin-bottom: 0;


}

.Unread-notification .notification-values-description p span {
    font-weight: 700;
}

.Unread-notification .notification-values-description a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #39537D;
    border: 1px solid #39537D;
    backdrop-filter: blur(2px);
    border-radius: 30px;
    padding: 4px 8px;
    text-decoration: none;

}

.btn-primary {

    padding: 4px 11px !important;

}

.btn-secondry {

    color: #fff !important;
    background-color: #39537D;
    padding: 4px 13px !important;

}
</style>