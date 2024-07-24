<template>
  <div class="py-4 border-b">
    <div class="flex justify-between w-full max-w-6xl mx-auto px-4">
      <div class="flex items-center gap-4">
        <span class="font-bold text-xl mr-20"><span class="text-main">psychologists.</span>services</span>
        <navigation-link to="/">Home</navigation-link>
        <navigation-link to="/">Psychologist</navigation-link>
      </div>
      <div class="flex gap-4">
        <styled-button button-style="outlined">Log In</styled-button>
        <styled-button>Register</styled-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import StyledButton from '@/modules/components/StyledButton.vue';
import NavigationLink from '@/modules/components/NavigationLink.vue';

export default defineComponent({
  components: { NavigationLink, StyledButton },
  setup() {
    const test = () => {
      console.log('Button clicked');
    };
    return {
      test
    };
  }
});

</script>
