<template>
    <div class="main-insight pt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-insight">
                        <div class="inner-inight-heading mb-3 d-flex justify-content-between align-items-cente">
                            <h1>Insights</h1>
                            <a href="#">Manage Preferences</a>
                        </div>
                        <div class="inner-insight-data">
                            <h1>Connections</h1>
                            <div class="d-flex justify-content-between connections-values">
                                <div>
                                    <h5>273</h5>
                                    <p>Total connections</p>
                                </div>
                                <div>
                                    <h5>80hrs</h5>
                                    <p>Connections from networking</p>
                                </div>
                                <div>
                                    <h5>98</h5>
                                    <p>Connections from social search</p>
                                </div>
                            </div>
                            <div>
                                <!-- <BarChart :chartData="chartData" :options="chartOptions" /> -->
                                <LandingPageTabs/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import LandingPageTabs from "./LandingPageTabs.vue";








</script>
<style lang="scss" scoped>
$color_1: #141414;
$color_2: #FFFFFF;
$color_3: #39537D;
$color_4: #595959;
$font-family_1: 'Roboto';

.main-insight {
	background: #F5F5F5;
	.container {
		max-width: 664px !important;
		margin: auto;
	}
}
.inner-inight-heading {
	h1 {
		font-family: $font-family_1;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
		color: $color_1;
		margin-bottom: 0;
	}
	a {
		background: #39537D;
		border-radius: 8px;
		font-family: $font-family_1;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		color: $color_2;
		padding: 6px 24px;
		text-decoration: none;
	}
}
.inner-insight-data {
	h1 {
		font-family: $font-family_1;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
		color: $color_1;
		margin-bottom: 0;
	}
	background: #FFFFFF;
	padding: 24px 16px;
	box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
}
.connections-values {
	h5 {
		font-family: $font-family_1;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 28px;
		color: $color_3;
		margin-bottom: 0;
	}
	padding: 24px 0;
	p {
        
		font-family: $font-family_1;
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: $color_4;
		margin-bottom: 0;
	}
}

</style>
<script>
// import BarChart from '~/components/BarChart.vue';

// export default {
//   components: {
//     BarChart,
//   },
//   data() {
//     return {
//       chartData: {
//         labels: ['Label 1', 'Label 2', 'Label 3'],
//         datasets: [
//           {
//             label: 'Data',
//             backgroundColor: '#41B883',
//             data: [10, 20, 30],
//           },
//         ],
//       },
//       chartOptions: {
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     };
//   },
// };
</script>