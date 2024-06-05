<template>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-append">
          <BaseBtn
            spinnerSize="sm"
            :loading="loading"
            class="btn-light btn-sm"
            :icon="icon"
            size="sm"
          />
        </div>
        <slot></slot>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import BaseInput from "./BaseInput.vue";
  import BaseBtn from "./BaseBtn.vue";
  export default defineComponent({
    components: { BaseInput, BaseBtn },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: "search",
      },
    },
  });
  </script>
  