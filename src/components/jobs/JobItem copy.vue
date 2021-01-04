<template>
    <div class="container">
        <div class="row heading">
            <div class="col-xs-6 main-sidebar">
                <h4 class="job-title">{{ job.title }}</h4>
                <p class="job-type">{{ job.type }}</p>
                <p class="job-category">{{ job.category }}</p>
                <p class="job-salary">{{ job.salary }}</p>
            </div>
            <div class="col-xs-3 company-info">
                <h4 class="company">{{ job.company.name }}</h4>
                <p class="location">{{ job.company.location }}</p>
            </div>
            <div class="col-xs-2 meta-info">
            </div>
            <div class="col-xs-1 btn-collapse">
                <button data-toggle="collapse" :data-target="'#collapse_' + job.id">Button</button>
            </div>
        </div>
        <div class="row body collapse" :id="'collapse_' + job.id">
            <div class="col-sm-12 col-md-6">
                <h6>Contact:</h6>
                <ul class="contact-info">
                    <li><a v-bind:href="'mailto:' + job.company.email">{{ job.company.email }}</a></li>
                    <li><a v-bind:href="'https://' + job.company.website">{{ job.company.website }}</a></li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="job-description">
                    <MarkdownView :rawMarkdown="position.description"></MarkdownView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownView from '../MarkdownView.vue'

export default {
    props: ["job"]
};
</script>

<style scoped lang="scss">
.container {
    border-bottom: 1px solid black;
    padding: 1rem 6rem;
    pointer-events: auto;

    .heading {
        cursor: pointer;
    }

    &:hover {
        background-color: black;
        color: white;
    }
}
</style>