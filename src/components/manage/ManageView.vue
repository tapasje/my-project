<template>
    <div class="management-container">
        <div class="search-wrapper">
            <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
        </div>
        <table class="job-table">
            <tr>
                <th>Job Title</th>
                <th>Type</th>
                <th>Category</th>
                <th>Company</th>
                <th>Location</th>
                <th>Email</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
            <tr v-for="job in filterJobs" :key="job.id" class="job-table-row">
                <td>{{ job.title }}</td>
                <td>{{ job.type }}</td>
                <td>{{ job.category }}</td>
                <td>{{ job.company.name }}</td>
                <td>{{ job.company.location }}</td>
                <td>{{ job.company.email }}</td>
                <td>{{ job.company.website }}</td>
                <td>
                    <button type="button" class="btn" @click="deleteJob(job)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['job'],
    data: function () {
        return {
            searchText: ''
        }
    },
    methods: {
        deleteJob: function (job) {
            this.$store.commit('DELETE_JOB', job);
        }
    },
    computed: {
        ...mapGetters({
        allJobs: 'allJobs',
        loadingComplete: 'loadingComplete'
        }),
        filterJobs: function () {
            const filterText = this.searchText.toLowerCase();
            const filteredJobs = this.allJobs.filter(function (job) {
                return job.title.toLowerCase().includes(filterText) ||
                    job.company.name.toLowerCase().includes(filterText) ||
                    job.category.toLowerCase().includes(filterText) ||
                    job.type.toLowerCase().includes(filterText) ||
                    job.company.location.toLowerCase().includes(filterText)
            })
            return filteredJobs;
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Open+Sans:wght@600&display=swap');

.search-wrapper {
  height: 10rem;
  width: 100%;

    .search-bar {
        width: 100%;
        height: 100%;
        padding-left: 6rem;
        font-size: 4rem;
        font-family: "Open Sans", "sans-serif";
        border: none;
        border-bottom: 1px solid black;
        background-color: black;
        color: white;
        transition-duration: 0.1;
        transition-timing-function: eas-in;

        &:focus {
            cursor: text;
            background-color: white;
            color: black;
            outline: none;
        }
    }

    .search-bar::-webkit-input-placeholder {
    color: white;
  }
}

.management-container {
    .job-table {
        width: 100%;
        font-size: 1.3rem;

        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid black;
        }

        th {
            height: 50px;
        }

        td {
            height: 50px;
            vertical-align: bottom;
        }
    }

    .btn {
        border: 1px solid black;
        background-color: white;
        color: black;
        padding: 12px 24px;
        font-size: 1.4rem;
        cursor: pointer;
        border-radius: 0px;

        &:hover {
            background: black;
            color: white;
        }
    }
}

</style>