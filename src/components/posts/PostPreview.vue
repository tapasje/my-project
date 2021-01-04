<template>
    <div class="accordion active">
        <div class="panel-heading active">
            <div class="row">
                <div class="col-sm-6">
                    <h4 class="job-title">{{ job.title }}</h4>
                    <p class="job-type">{{ job.type }}</p>
                    <p class="job-category">{{ job.category }}</p>
                    <p class="job-salary">{{ job.salary }}</p>
                </div>
                <div class="col-sm-3">
                    <h4 class="company">{{ job.company.name }}</h4>
                    <p class="location">{{ job.company.location }}</p>
                </div>
                <div class="col-sm-3 text-right">
                    <div class="days-ago">{{ daysAgo }}</div>
                </div>
            </div>
        </div>
        <div class="panel-content">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <h6>Contact</h6>
                    <ul class="contact-information">
                        <li><a v-bind:href="'mailto:' + job.company.email">{{ job.company.email }}</a></li>
                        <li><a v-bind:href="'https://' + job.company.website">{{ job.company.website }}</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-6" >
                    <div v-html="compiledMarkdown"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDistance } from 'date-fns';
const marked = require('marked');

export default {
    props: ['job'],
    computed: {
        daysAgo: function () {
            return formatDistance(new Date(), new Date(this.job.date));
        },
        compiledMarkdown: function () {
            return marked(this.job.description, { sanitize: true });
        }
    }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Open+Sans&display=swap');

$sm-display: 48rem;
$line-height: 6rem;
$transition-duration: 0.1s;

.accordion {
    border-bottom: 1px solid black;
    padding: 1rem 6rem;
    pointer-events: auto;
    font-family: "Open Sans", "sans-serif";

    .panel-heading {
        cursor: pointer;
    }

    h6 {
        font-size: 1.5rem;
    }

    // ------ HEADING ------ //
    .job-title,
    .company {
        transition: font-size $transition-duration ease-in;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .job-type,
    .job-category,
    .job-salary,
    .location {
        transition: font-size $transition-duration ease-in;
        margin: 0;
        font-size: 1.3rem;
    }

    .job-category,
    .job-salary {
        display: none;
    }
    
    .days-ago {
        line-height: $line-height;
    }

    // ------ CONTENT ------ //
    .panel-content {
        display: none;
        padding-top: 10rem;

        .contact-information {
            list-style: none;
            font-size: 1.3rem;
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
            -webkit-margin-start: 0;
            -webkit-margin-end: 0;
            -webkit-padding-start: 0;
        }

        .job-description {
            font-size: 1.5rem;
        }
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}

.accordion.active {
    background-color: black;
    color: white;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .job-title,
    .company {
        font-size: 2.5rem;
    }

    .job-type,
    .job-category,
    .job-salary,
    .location {
        font-size: 1.5rem;
    }

    .job-category,
    .job-salary {
        display: inherit;
    }

    .panel-content {
        display: inherit;
    }
}

@media (max-width: $sm-display) {
    .accordion {
        padding: 3rem;

        .job-title,
        .company {
            font-size: 1.7rem;
        }

        .job-type,
        .job-category,
        .job-salary,
        .location {
            font-size: 1.2rem
        }
    }
}
</style>