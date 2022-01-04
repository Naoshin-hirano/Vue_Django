<template>
    <div>
        <v-container>
            <h1>Job Board</h1>
            <div v-for="job in jobs" :key="job.pk">
                <p>{{ job.company_name }}：{{ job.job_title }}</p>
            </div>
        </v-container>
    </div>
</template>

<script>
import { apiService } from "../common/api.service.js"
export default {
    name: "home",
    data() {
        return {
            jobs: []
        }
    },
    methods: {
        getJobs() {
            let endpoint = "api/jobs/"
            apiService(endpoint).then(data => {
                this.jobs.push(...data.results)
            })  
        }
    },
    created() {
        this.getJobs()
        console.log(this.jobs)
    }
}
</script>