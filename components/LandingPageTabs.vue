<template>
    <ul class="nav home-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="true">

                <p>Day</p>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="content-tab" data-bs-toggle="tab" data-bs-target="#content" type="button"
                role="tab" aria-controls="content" aria-selected="false">

                <p>Week</p>
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button"
                role="tab" aria-controls="services" aria-selected="false">

                <p>Month</p>
            </button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContentHome">
        <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="TabsWrapper">
                <div>
     <LineChart :chartData="chartData" :chartOptions="chartOptions" />
  </div>
            </div>
        </div>
        <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="content-tab">
            <h2>hi</h2>
        </div>
        <div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
            <h1>heloooo</h1>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
$color_1: #BFBFBF;
$color_2: #8c8c8c;
$color_3: #FAFAFA;
$font-family_1: 'Roboto';
$background-color_1: transparent;
.TabsWrapper{
    background-color: #fff;
}
.home-tabs {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
    border-bottom: none !important;
    margin: 0 !important;
    background: #EFF1F5;
    border-radius: 30px;
    padding: 0px 0px 0px !important;

    .nav-link {
        width: 200px;
        border: none;
        color: $color_1;
        background-color: $background-color_1;
        border-radius: 30px;
      
        &.active {
            background-color: #39537D;
            border-bottom: 2px solid white;
            border-radius: 30px;
            border: none;
            p {

                color: #FFFFFF;
            }



        }



        p {
            font-family: $font-family_1;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #39537D;
            margin-bottom: 0;

        }
    }



}
</style>

<script>
import LineChart from '~/components/LineChart.vue';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Dataset',
            data: [10, 20, 30, 25, 15],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            fill: false,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true, // Set the y-axis minimum value to 0
            suggestedMax: 50, // Set the y-axis maximum value
          },
        },
      },
    };
  },
};
</script>