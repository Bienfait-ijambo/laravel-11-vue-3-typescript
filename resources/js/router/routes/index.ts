
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// 

const router = createRouter({
  history: createWebHistory('/app'),
  routes: [
    
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/admin/AdminPage.vue'),
    //   children:[
    //     {
    //       path: '/admin',
    //       name: 'dashboard',
    //       component: () => import('../views/admin/dashbaord/DashbaordPage.vue'),
    //     },
    //     {
    //       path: '/create-post',
    //       name: 'create-post',
    //       component: () => import('../views/admin/createPost/CreatePostPage.vue'),
    //       // beforeEnter(to, from, next) {
             
    //       //   if (confirm('Are you sure you want to leave this page?')) {
    //       //     next(); // Proceed with leaving the route
    //       //   } else {
    //       //     next(false); // Cancel navigation
    //       //   }
    //       // }
    //     },
      
    //   ]
    // },

   
  ]
})



export default router
