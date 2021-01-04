<template>
    <h1 class="heading">Post a Job</h1>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Company</label>
            <input type="text"
                id="companyName"
                class="form-control"
                v-model="localJob.company.name">
        </div>
        <div class="form-group">
            <label for="title">Job Title</label>
            <input type="text"
                id="title"
                class="form-control"
                v-model="localJob.title">
        </div>
        <div class="form-group">
            <label for="salary">Salary</label>
            <input type="text"
                id="salary"
                class="form-control"
                v-model="localJob.salary">
        </div>
        <div class="form-group">
            <label for="location">Location</label>
            <input type="text"
                id="companyLocation"
                class="form-control"
                v-model="localJob.company.location">
        </div>
        <div class="form-group">
            <label for="type">Type</label>
            <input type="text"
                id="type"
                class="form-control"
                v-model="localJob.type"
                placeholder="E.g. parttime, internship">
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <input type="text"
                id="category"
                class="form-control"
                v-model="localJob.category"
                placeholder="E.g. Computer Science, AI">
        </div>
        <div class="form-group">
            <label for="type">Description</label>
            <textarea id="type"
                class="form-control"
                v-model="localJob.description"
                placeholder="You can use markdown here"
                rows="6"
            ></textarea>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email"
                id="companyEmail"
                class="form-control"
                v-model="localJob.company.email">
        </div>
        <div class="form-group">
            <label for="website">Website</label>
            <input type="text"
                id="companyWebsite"
                class="form-control"
                v-model="localJob.company.website">
        </div>
        <button class="btn btn-submit" type="submit">Submit</button>
    </form>
</template>

<script>
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default {
    props: ['job'],
    data: function () {
        return {
            localJob: this.job,
            submitted: false
        }
    },
    methods: {
        onSubmit: function (e) {
            e.preventDefault();
            let uuid = uuidv4();
            this.localJob.id = uuid;
            let now = new Date();
            this.localJob.date = now.toISOString();
            this.$emit('preview');
        }
    }
}
</script>

<style scoped lang="scss">

.heading {
    background-color: black;
    color: white;
    padding: 3rem;
}

form {
    padding: 1rem 3rem;

    .form-group label {
        line-height: 2rem;
        font-size: 1.4rem;
    }

    .form-control {
            border: none;
            border-bottom: 1px solid black;
            font-size: 1.4rem;
            
            &:focus {
                border-color: black;
                outline: none;
                box-shadow: none;
                -webkit-box-shadow: none;
            }
    }
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
</style>