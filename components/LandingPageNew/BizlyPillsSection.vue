<template>
  <div class="pill-section">
    <div class="pill">
      <div v-for="(pill, index) in pills" :key="index">
        <div class="custom-pills" data-aos="fade-up" data-aos-duration="2000">
          {{ pill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let pills = [
  "Film & TV",
  "Design",
  "Entertainment",
  "Media",
  "Photography",
  "Fine Art",
  "Animation",
  "Performing Arts",
  "Theatre",
  "Information Technology and Services",
  "Hospitality",
  "Consumer Services",
  "Banking",
  "Arts & Crafts",
  "Sports",
  "Biotechnology",
  "Architecture",
  "Legal Services",
  "Medical",
  "Electronics",
  "Writing & Editing",
  "E-Learning",
  "Social Media",
  "Computer Games",
  "Education",
  "Marketing",
  "Online Media",
  "Merchandising",
  "Event Services",
  "Franchising",
  "Government Relations",
  "Real Estate",
  "Investment Banking",
  "International Affairs",
  "Veterinary",
  "Politics",
  "Wine & Spirits",
  "Broadcast",
  "Cosmetics",
  "Apparel & Fashion",
  "Telecommunications",
  "Health, Wellness and Fitness",
];
</script>

<style lang="scss" scoped>
.pill-section {
  padding: 70px 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  .pill {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: 1rem;
    padding: 1rem;
    .custom-pills {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid white;
      border-radius: 20px;
      min-width: 168px;
      height: 40px;
      border-radius: 2;
      color: #f7f8fb;
      line-height: 40px;
      font-size: 16px;
      padding: 0px 12px;
    }
  }
}
</style>
