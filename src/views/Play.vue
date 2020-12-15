<template>
    <div>
        <GameBoard v-if="gameElements" :game="gameElements" />
        <template v-if="gameElements">
            <BaseButton @click="restartGame()">Reset</BaseButton>
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
import { start, changePuzzle } from '../composables/stores/game'
import { gameElements, restartGame } from '../composables/stores/gameEngine'

export default defineComponent({
    components: {
        BaseButton,
        GameBoard,
    },
    setup() {

        return {
            start,
            restartGame,
            changePuzzle,
            gameElements,
        }
    },
})
</script>