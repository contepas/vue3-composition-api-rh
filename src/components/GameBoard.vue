<template>
    <div :class="$style.board">
        <GameVehicle
            v-for="(gameElement, key) in gameElements"
            :key="`vehicle_${key}`"
            :class="$style.vehicle"
            :position-raw="gameElement"
            :element-id="key"
            @move="moveElement(key, $event)"
        />
        <span :class="$style.exit">
            <SvgArrow />
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import GameVehicle from './GameVehicle.vue'
import SvgArrow from './icons/SvgArrow.vue'
import { gameElements, moveElement } from '../composables/stores/gameEngine'

export default defineComponent({
    name: 'GameBoard',
    components: {
        GameVehicle,
        SvgArrow
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
            moveElement,
            barriers,
        }
    },
})
</script>

<style module lang="scss">
.board {
    position: relative;
    margin: 50px auto;
    width: 608px;
    height: 608px;
    @apply border-4 border-opacity-100 border-green-900 border-solid rounded-sm;
}
.exit {
    position: relative; 
    z-index: 10; 
    top: 210px; 
    left: 570px;
}
</style>
