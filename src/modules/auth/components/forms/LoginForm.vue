<script lang="ts">
import { defineComponent } from 'vue';
import FormInput from '@/modules/components/inputs/FormInput.vue';

export default defineComponent({
  name: 'LoginForm',
  components: { FormInput }
});
</script>

<template>
  <form-input placeholder="Email"
              error="super error"
  ></form-input>
  <form-input placeholder="Password"></form-input>
</template>

<style scoped>

</style>
