<template>
  <div>tet</div>
  <styled-button buttonStyle="outlined"
                 loading
  >Log In
  </styled-button>
  <styled-button
    buttonStyle="filled"
    loading
  >Registration
  </styled-button>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import StyledButton from '@/modules/components/StyledButton.vue';

export default defineComponent({
  components: { StyledButton },
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
