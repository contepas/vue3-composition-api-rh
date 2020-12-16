<template>
    <div>
        <h1 v-if="compleated">Congratulations!!! You won the Game</h1>
        <template v-if="gameElements">
            <BaseButton @click="stop()">Menu</BaseButton>
            <GameBoard :game="gameElements" />
            <div>
                <BaseButton @click="restartGame()">Reset</BaseButton>
                <BaseButton @click="changePuzzle()">ChangePuzzle</BaseButton>
            </div>
        </template>
        <div class="menu" v-else>
            <BaseButton @click="start('hard')">Hard</BaseButton>
            <BaseButton @click="start('difficult')">Difficult</BaseButton>
            <BaseButton @click="start('medium')">Medium</BaseButton>
            <BaseButton @click="start('easy')">Easy</BaseButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import GameBoard from '../components/GameBoard.vue'
import { start, stop, changePuzzle } from '../composables/stores/game'
import { gameElements, restartGame, compleated } from '../composables/stores/gameEngine'

export default defineComponent({
    components: {
        BaseButton,
        GameBoard,
    },
    setup() {

        return {
            start,
            stop,
            restartGame,
            changePuzzle,
            gameElements,
            compleated,
        }
    },
})
</script>

<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>