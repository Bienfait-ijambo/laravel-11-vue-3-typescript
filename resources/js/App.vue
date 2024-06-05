<script lang="ts" setup>
import {ref,onMounted} from "vue"

const count=ref<number>(0);


function setupEvent(){
        window.Echo.channel('testChannel')
        .listen('testingEvent', (e:any) => {
          console.log(e)
          // hello world in console 
        })
      
  }
  
onMounted(()=>{
  setupEvent()
})
</script>
<template>
  <div class="container">
  <h1>{{count}}</h1>
<button @click="count++">increment</button>
  <!-- <RouterView/> -->
  </div>
</template>