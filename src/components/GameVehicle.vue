<template>
    <div :class="$style.vehicle">
        <div>{{}}</div>
        <div>{{}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'GameVehicle',
    props: {
        direction: {
            type: String,
            required: true,
            validation: (direction: string) =>
                ['orizzontal', 'vertical'].includes(direction),
        },
    },
    setup() {
        const canGoA = () => {
            console.log(false)
        }
        const canGoB = () => {
            console.log(false)
        }
        return {}
    },
})
</script>

<style module>
.vehicle {
    @apply border-green-600;
}
</style>
