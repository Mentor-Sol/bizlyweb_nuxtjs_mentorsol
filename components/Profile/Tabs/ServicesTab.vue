<template>
    <div class="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
        <div className="ServicesWrapper bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="innerServices">
                            <div className="serviceHeading d-flex justify-content-between">
                                <p>Availability</p>
                                <p>
                                    {{
                                        data?.available_to_work ? "Available" : "Not Available"
                                    }}
                                </p>
                            </div>
                            <div className="d-flex">
                                <div className="w-50">
                                    <div v-if="data?.available_to_work" className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Clock" alt="Clock " />
                                        </div>

                                        <p>{{ data?.availability_overview }}</p>
                                    </div>
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Travel" alt="Phone" />
                                        </div>

                                        <p>Will travel anywhere</p>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Timezone" alt="Phone" />
                                        </div>

                                        <p>Any timezone</p>
                                    </div>
                                    <div className="d-flex align-items-center info">
                                        <div className="infoIcon">
                                            <img :src="Passport" alt="Phone" />
                                        </div>

                                        <p>Passport available</p>
                                    </div>
                                </div>
                            </div>
                            <div className="locationWrapper mb-3">
                                <span>Locations</span>
                                <div className="location">
                                    <p v-for="(item, index) in data?.services_locations" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                            <div className="locationWrapper  mb-3">
                                <span>Opportunity Interests</span>
                                <div className="location">
                                    <p v-for="(item, index) in data?.opportunity_settings" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                            <div className="locationWrapper">
                                <span>Workplace</span>
                                <div className="location">
                                    <p v-for="(item, index) in data?.workplace_settings" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="innerServices">
                            <div className="serviceHeading ">
                                <p>Availability</p>
                            </div>
                            <div className="info">
                                <p className="mb-3">{{ data?.availability_overview }}</p>
                            </div>
                        </div>
                        <div className="innerServices">
                            <div class="serviceHeading">
                                <p>Professional Skills</p>
                            </div>
                            <div className="locationWrapper">
                                <div className="location">
                                    <p v-for="(item, index) in data?.professional_skills" :key="index">
                                        {{ item }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <TypeofServices title="Services Section 1 Title" id="sect1" />
                        <TypeofServices title="Services Section 2 Title" id="sect2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss"></style>