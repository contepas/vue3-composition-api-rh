<template>
    <div :class="$style.barrier"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>

<style module>
.barrier {
    @apply border-green-800;
}
</style>
