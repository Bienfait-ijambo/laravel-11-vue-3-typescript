<template>
    <div :id="idAttribute" class="d-flex justify-content-center">
      <div :class="`spinner-border spinner-border-${size}`" role="status">
        <span class="visually-hidden">Loading... </span>
      </div>
      <slot></slot>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      idAttribute: {
        type: String,
        default: "",
      },
      size: {
        type: String,
      },
    },
  });
  </script>
  