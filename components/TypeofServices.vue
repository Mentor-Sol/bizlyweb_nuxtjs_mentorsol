<template>
  <h1 className="ServiceSectionHeading">{{ title }}</h1>
  <div className="innerServices">
    <div className="serviceHeading ">
      <p>Title of Service</p>
    </div>
    <div className="info">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis libero et libero et
        libero et... <a href="">read more</a>
      </p>
    </div>
    <div className="d-flex">
      <div className="info w-50">
        <span>$49/hr</span>

        <p>Pay</p>
      </div>
      <div className="info  w-50">
        <span>Pro</span>

        <p>Level of Expertise</p>
      </div>
    </div>
    <div className="ServiceMessage">
      <button
        className="w-100 d-flex align-items-center justify-content-center"
      >
        <img :src="ServiceMessage" alt="location" />
        Message
      </button>
    </div>
    <div className="info mt-3">
      <p>Supporting Content</p>
      <div className="d-flex gap-2 mt-3">
        <img :src="SupportingOne" alt="Contact" />
        <img :src="SupportingTwo" alt="Contact" />
        <img :src="SupportingThree" alt="SupportingOne " />
        <img :src="SupportingFour" alt="Contact" />
      </div>
    </div>
  </div>
  <div>
    <Accordian :id="id" />
  </div>
</template>
<script setup>
import ServiceMessage from "~/assets/images/servicemessage.svg";
import SupportingOne from "~/assets/images/supportigone.svg";
import SupportingTwo from "~/assets/images/supportingtwo.svg";
import SupportingFour from "~/assets/images/supportingfour.svg";
import SupportingThree from "~/assets/images/supportingthree.svg";

defineProps({
  title: String,
  id: String
});
</script>