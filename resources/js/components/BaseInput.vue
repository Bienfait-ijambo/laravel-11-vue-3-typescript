<template>
    <!-- bind Fallthrough attributes   -->
    <label :for="label">{{ label }}</label>
    <input
      :type="type"
      class="form-control form-control-sm"
      :placeholder="placeholder"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
    />
  </template>
  <script lang="ts">
  import type { required } from "@vuelidate/validators";
  import { defineComponent } from "vue";
  import SetupFormComponent from "./feactures/SetupFormComponent";
  
  export default {
    props: {
      modelValue: {
        type: [String, Number],
        default: "",
      },
      type: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
    },
    setup(props: any, context: { emit: any }) {
      const { updateValue } = SetupFormComponent(props, context);
      return {
        updateValue,
      };
    },
  };
  </script>
  