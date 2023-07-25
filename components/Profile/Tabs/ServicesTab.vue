<template>
    <div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
        <div className="ServicesWrapper bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="innerServices">
                            <div className="serviceHeading d-flex justify-content-between">
                                <p>Availability</p>
                                <p :class="data?.available_to_work ? 'available' : 'not-available'">
                                    {{
                                                                        data?.available_to_work ? "Available" : "Not Available"
                                                                        }}
                                </p>
                            </div>
                            <div className="d-flex">
                                <div className="w-50">
                                    <div v-if="data?.available_to_work" className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Clock" alt="clock_icon" />
                                        </div>

                                        <p>{{ data?.availability_overview || 'No data provided yet' }}</p>
                                    </div>
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Relocation" alt="relocation_icon" />
                                        </div>

                                        <p>No Information yet</p>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="AnyTimeZone" alt="Phone" />
                                        </div>
                                        <p>No Information Yet</p>
                                    </div>
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Passport" alt="Phone" />
                                        </div>

                                        <p>No Information Yet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="locationWrapper mb-3">
                                <span>Locations</span>
                                <div className="location">

                                    <p v-if="data?.services_locations?.length"
                                        v-for="(item, index) in data?.services_locations" :key="index">
                                        {{ item }}
                                    </p>
                                    <p v-if="!data?.services_locations?.length">N/A</p>
                                </div>
                            </div>
                            <div className="locationWrapper  mb-3">
                                <span>Opportunity Interests</span>
                                <div className="location">
                                    <p v-if="data?.opportunity_settings?.length"
                                        v-for="(item, index) in data?.opportunity_settings" :key="index">
                                        {{ item }}
                                    </p>
                                    <p v-if="!data?.opportunity_settings?.length">N/A</p>
                                </div>
                            </div>
                            <div className="locationWrapper">
                                <span>Workplace</span>
                                <div className="location">
                                    <p v-if="data.workplace_settings?.length"
                                        v-for="(item, index) in data?.workplace_settings" :key="index">
                                        {{ item }}
                                    </p>
                                    <p v-if="!data.workplace_settings?.length">N/A</p>
                                </div>
                            </div>
                        </div>
                        <div className="innerServices">
                            <div className="serviceHeading ">
                                <p>About</p>
                            </div>
                            <div className="info">
                                <p className="mb-3">{{ data?.about }}</p>
                            </div>
                        </div>
                        <div className="innerServices">
                            <div class="serviceHeading">
                                <p>Professional Skills</p>
                            </div>
                            <div className="locationWrapper">
                                <div className="location">
                                    <p v-if="data?.professional_skills?.length"
                                        v-for="(item, index) in data?.professional_skills" :key="index">
                                        {{ item }}
                                    </p>
                                    <p>
                                        No skills added
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <TypeofServices title="Services Section 1 Title" id="sect1" :data="data" />
                        <!-- <TypeofServices title="Services Section 2 Title" id="sect2" :data="data" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FullBizCard } from '../../../models/ProfileData/FullBizCard';
import TypeofServices from './TypeofServices.vue';
import Clock from "~/src/assets/images/clock.svg"
import Relocation from "~/src/assets/images/relocation.svg"
import AnyTimeZone from "~/src/assets/images/anytimezone.svg"
import Passport from "~/src/assets/images/passport.svg"
defineProps({
    data: FullBizCard
})
</script>
<style scoped lang="scss"></style>