<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <header class=" ">
    <div class="mt-10">
      <router-link to="/"
        class=" ml-80 m-10 uppercase bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded">
        Français
      </router-link>


      <router-link to="/ResumeViewEnglish"
        class="m-10 uppercase bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded ">
        Englsih
      </router-link>
    </div>
  </header>
  <Router-View />


  <div>

  </div>
</template>

<script>
import { MenuIcon, } from "@heroicons/vue/solid";
import ResumeView from './views/ReseumeView.vue'


export default {
  name: "App",
  components: { MenuIcon, ResumeView },
};

</script>


