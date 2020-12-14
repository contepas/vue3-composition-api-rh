<template>
    <div :class="$style.board">
        <GameVehicle
            v-for="(gameElement, key) in gameElements"
            :key="`vehicle_${key}`"
            :class="$style.vehicle"
            :position-raw="gameElement"
            :element-id="key"
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
import { gameElements } from '../composables/stores/gameEngine'

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
        const vehicles = reactive([{
            top: 0,
            left: 0,
        }])
        const barriers = reactive([])
        return {
            gameElements,
            barriers,
        }
    },
})
</script>

<style module lang="scss">
.board {
    position: relative;
    margin: 0 auto;
    width: 600px;
    height: 600px;
    @apply border-4 border-opacity-100 border-green-900 border-solid rounded-sm;
}
</style>
