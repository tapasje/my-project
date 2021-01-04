<template>
  <div class="job-list">
    <div class="search-wrapper">
      <input type="text" placeholder="Search" class="search-bar" v-model="searchText">
    </div>
    <JobItem
      v-for="filterJob in filterJobs"
      :key="filterJob.id"
      :job="filterJob"
    ></JobItem>
  </div>
  <div class="load-complete" v-if="loadingComplete">
      <p>Uh-oh.. there are no more jobs..</p>
  </div>
  <div class="load-more" v-else>
      <button class="btn btn-load" @click="loadMore" v-show="!loadingComplete">Load More</button>
  </div>
</template>

<script>
import JobItem from './JobItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    JobItem
  },
  data: function () {
    return {
      searchText: ''
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
    },
    uuid: function () {
      return Math.random().toString(16).slice(2);
    }
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Open+Sans:wght@600&display=swap');

$transition-duration: 0.1s;
$sm-display: 48rem;

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
    transition-duration: $transition-duration;
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

.load-more {
  text-align: center;
}

.btn {
  border: 1px solid black;
  background-color: white;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  margin: 1rem 2rem;
  border-radius: 0px;

  &:hover {
    background: black;
    color: white;
  }
}

.load-complete {
  padding-top: 28px;
  font-size: 2rem;
  text-align: center;
}
</style>