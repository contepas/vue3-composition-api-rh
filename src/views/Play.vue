<template>
    <div>
        <GameBoard :board-state="boardState"/>
        <div>
            <BaseButton @click="reset()">Reset</BaseButton>
            <BaseButton @click="changePuzzle()">ChangePuzzle</BaseButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import GameBoard from '../components/GameBoard.vue'

export default defineComponent({
    components: {
        BaseButton,
        GameBoard,
    },
    setup () {
        const reset = () => console.log('reset')
        const changePuzzle = () => console.log('change puzzle')
        const boardState = ref('')
        return {
            reset,
            changePuzzle
        }
    }
})
</script>