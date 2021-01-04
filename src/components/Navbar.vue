<template>
    <nav class="navbar navbar-expand-lg">
        <div class="logo-box">
            <router-link to="/" class="navbar-brand">
                WANT<br>
                IT.
            </router-link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src="../assets/menu.png">
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item px-2">
                    <router-link to="/" class="home">Home</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/post-a-job" class="post-a-job">Post a Job</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/manage-jobs" class="manage-jobs" v-show="isAdmin">Manage Jobs</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link to="/about" class="about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            isAdmin: true
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Open+Sans&display=swap');
$sm-display: 48rem;

.navbar {
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: "Open Sans";
    font-size: 2rem;
    .logo-box {
        border: 4px solid black;

        .navbar-brand {
            line-height: 90%;
            padding-left: 10px;
            padding-right: 10px;
            margin: 0px;
            font-family: "Dosis";
            font-size: 4rem;
            text-decoration: none;
            color: black;
        }
    }

    .router-link {
        color: black;
    }
}

.navbar-nav {
    padding-top: 20px;
}

a {
    color: black;

    &:hover{
        color: black;
    }
}

.navbar-toggler {
    outline: none;
}
</style>