<template>
    <b-card class="dashboard-filled-line-chart" no-body>
        <b-card-body>
            <div class="float-left float-none-xs">
                <div class="d-inline-block">
                    <h5 class="d-inline" v-text="title"></h5>
                </div>
            </div>
            <b-dropdown
                id="ddown5"
                :text="$t('dashboards.this-week')"
                size="xs"
                variant="outline-primary"
                class="float-right float-none-xs mt-2"
                @click="changeData"
            >
                <b-dropdown-item>{{
                    $t("dashboards.this-year")
                }}</b-dropdown-item>
                <b-dropdown-item>{{
                    $t("dashboards.this-month")
                }}</b-dropdown-item>
                <b-dropdown-item>{{
                    $t("dashboards.last-week")
                }}</b-dropdown-item>
            </b-dropdown>
        </b-card-body>
        <div class="chart card-body pt-0" v-if="loaded">
            <area-chart :data="main_data" container-class="chart" shadow />
        </div>
    </b-card>
</template>
<script>
import AreaChart from "../../components/Charts/Area";
import { areaChartData } from "../../data/charts";
import { ThemeColors } from "../../utils";
const colors = ThemeColors();

export default {
    props: ["title", "data", "labels"],
    components: {
        "area-chart": AreaChart
    },
    computed: {
        //
    },
    data() {
        return {
            loaded: false,
            main_data: {
                labels: [],
                datasets: [
                    {
                        label: [],
                        data: [],
                        borderColor: colors.themeColor1,
                        pointBackgroundColor: colors.foregroundColor,
                        pointBorderColor: colors.themeColor1,
                        pointHoverBackgroundColor: colors.themeColor1,
                        pointHoverBorderColor: colors.foregroundColor,
                        pointRadius: 4,
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        fill: true,
                        borderWidth: 2,
                        backgroundColor: colors.themeColor1_10
                    }
                ]
            }
        };
    },
    methods: {
        changeData() {
            console.log("SOMETHING");
        }
    },
    async created() {
        this.main_data.labels = this.labels;
        this.main_data.datasets[0].data = this.data;
        this.loaded = true;
    }
};
</script>
