<template>
  <Error404 v-if="errorCode === '404'" />
  <Error500 v-else-if="errorCode === '500'" />
  <ErrorDefault v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Error404 from "./Error404.vue";
import Error500 from "./Error500.vue";
import ErrorDefault from "./ErrorDefault.vue";

export default defineComponent({
  components: {
    Error404,
    Error500,
    ErrorDefault
  },
  props: {
    errorCode: {
      type: String,
      default: "",
      validations: (errorCode: string) => ["", "404"].includes(errorCode)
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
