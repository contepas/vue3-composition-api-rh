<template>
    <div>
        <GameBoard v-if="board" :game="board" />
        <template v-if="gameStarted">
            <BaseButton @click="reset()">Reset</BaseButton>
            <BaseButton @click="changePuzzle()">ChangePuzzle</BaseButton>
        </template>
        <template v-else>
            <BaseButton @click="start()">Start</BaseButton>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import GameBoard from '../components/GameBoard.vue'
import { start, changePuzzle, reset, board } from '../composables/stores/game'

export default defineComponent({
    components: {
        BaseButton,
        GameBoard,
    },
    setup() {
        const gameStarted = computed(() => !!board.value)
        return {
            start,
            reset,
            changePuzzle,
            board,
            gameStarted,
        }
    },
})
</script>
