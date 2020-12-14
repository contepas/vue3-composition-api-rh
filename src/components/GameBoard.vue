<template>
    <div :class="$style.board">
        <GameVehicle
            v-for="(vehicle, index) in vehicles"
            :key="`vehicle_${index}`"
            :class="$style.vehicle"
        />
        <GameBarrier
            v-for="(barrier, index) in barriers"
            :key="`barrier_${index}`"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import GameVehicle from './GameVehicle.vue'
import GameBarrier from './GameBarrier.vue'

export default defineComponent({
    name: 'GameBoard',
    components: {
        GameVehicle,
        GameBarrier,
    },
    props: {
        game: {
            type: String,
            required: true,
        },
    },
    setup() {
        const vehicles = reactive([])
        const barriers = reactive([])
        return {
            vehicles,
            barriers,
        }
    },
})
</script>

<style module lang="scss">
.board {
    margin: 0 auto;
    width: 600px;
    height: 600px;
    @apply border-4 border-opacity-100 border-green-900 border-solid rounded-sm;
}
</style>
