
<script setup lang="ts">
import { ErrorObject } from "@vuelidate/core"

const props = defineProps<{
    label:string
    errors: ErrorObject[]
}>()
</script>
<template>
  <div class="form-group" :class="{ error: props.errors.length }">
    <label for=""><b>{{ props.label }}</b></label>
    <slot></slot>
    <div class="input-errors" v-for="error of props.errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<style scoped>
.input-errors {
  color: red;
  font-weight: bold;
}
</style>
