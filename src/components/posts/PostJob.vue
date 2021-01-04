<template>
    <div class="post-container">
        <PostForm
            v-if="editPreview"
            :job="newJob"
            @preview="showPreview"
        ></PostForm>
        <div class="preview-container" v-if="!editPreview">
            <h1 class="heading">Preview</h1>
            <PostPreview :job="newJob" ref="jobItem"></PostPreview>
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <button class="btn btn-edit" type="submit" @click="editPreview = true">Cancel</button>
                </div>
                <div class="col-sm-6 col-md-6">
                    <button class="btn btn-edit" type="submit" @click="savePreview">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from './PostForm';
import PostPreview from './PostPreview.vue';

export default {
    components: {
        PostForm,
        PostPreview
    },
    data: function () {
        return {
            editPreview: true,
            newJob: {
                title: '',
                type: 'Parttime',
                salary: '',
                category: '',
                description: '',
                company: {
                    name: '',
                    location: '',
                    email: '',
                    website: ''
                },
                id: ''
            }
        }
    },
    methods: {
        showPreview: function () {
            this.editPreview = false;
        },
        savePreview: function (e) {
            e.preventDefault();
            console.log('Saving job..');
            let job = this.newJob
            this.$store.commit('CREATE_JOB', job);
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
.post-container {
    margin: 0;
    padding: 0;
    .preview-container {
        .heading {
            margin: inherit;
        }

        .row {
            padding-left: 3rem;
            padding-right: 3rem;
            margin: inherit;
        }

        .heading {
            background-color: black;
            color: white;
            padding: 3rem;
        }

        .btn {
            border: 1px solid black;
            background-color: white;
            color: black;
            padding-top: 12px;
            padding-bottom: 12px;
            font-size: 1.4rem;
            cursor: pointer;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0px;
            width: 100%;

            &:hover {
                background: black;
                color: white;
            }
        }
    }
}
</style>