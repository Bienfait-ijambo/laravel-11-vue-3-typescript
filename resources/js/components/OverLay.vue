<template>
    <div v-if="loading" :loading="loading">
      <Spinner id="overLay"> Loading... </Spinner>
    </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  import Spinner from "./Spinner.vue";
  export default defineComponent({
    components: {
      Spinner,
    },
    props: {
      loading: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  });
  </script>
  <style scoped>
  #overLay {
    border: 1px solide grey;
    border-radius: 3px;
    box-shadow: 2px 2px 10px 1px grey;
    width: 200px;
    padding: 10px;
    position: absolute;
    margin-left: 40%;
  }
  </style>
  