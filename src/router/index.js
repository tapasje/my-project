// 1. Define route components.
import { createRouter, createWebHistory } from "vue-router";
import JobList from "@/components/jobs/JobList.vue";
import PostJob from "@/components/posts/PostJob.vue";
import ManageView from "@/components/manage/ManageView.vue";
import About from "@/components/About.vue";

// 2. Define some routes.
const routes = [
  { path: "/", component: JobList },
  { path: "/post-a-job", component: PostJob },
  { path: "/manage-jobs", component: ManageView },
  { path: "/about", component: About }
];

// 3. Create the router instance and pass the `routes` option.
const router = createRouter({
  // 4. Provides the history implementation to use.
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
});

export default router;
