import { ref, computed, reactive, Ref, watch, watchEffect } from 'vue'
import { getGamesCall } from '../../mockBackEnd/restApis'
import { userId } from '../stores/user'
import { startGame, stopGame } from '../stores/gameEngine'
import { cloneDeep } from 'lodash'

// ========================
// INTERFACES SELLERS STORE
// ========================
type Mode = | 'easy' | 'medium' | 'difficult' | 'hard'

interface State {
    games: string[]
    lastGamePlayed: number | null
    mode: null | Mode
}

// ======
// STATE
// ======
const initialState = () => (reactive({
    games: [],
    lastGamePlayed: null,
    mode: null,
}))
const state: State = initialState()
// setInterval(() => console.log(state), 5000)


// ========
// GETTERS
// ========
export const games = computed(() => state.games)
export const board = computed(() => {
    return state.lastGamePlayed !== null
        ? state.games[state.lastGamePlayed]
        : null
})
watch(board, (newBoard) => {
    if (newBoard !== null && newBoard !== undefined)
        startGame(newBoard)
})

// ====================
// ACTIONS / MUTATIONS
// ====================
export const start = async (mode: Mode, quantity = 3) => {
    state.mode = mode
    if (userId.value) {
        const {
            success,
            data = null,
            id = null,
            message = null,
        } = await getGamesCall(userId.value, quantity, mode)
        if (success && id === userId.value) {
            if (data) state.games = data
            state.lastGamePlayed = 0
        } else {
            throw message || 'Someting went wrong'
        }
    } else {
        throw 'missing user id to getGames'
    }
}

export const stop = async () => {
    Object.assign(state, initialState())
    stopGame()
}

export const changePuzzle = () => {
    if (state.lastGamePlayed !== null && (state.games.length -1 > state.lastGamePlayed)) {
        state.lastGamePlayed++
    } else if (state.mode) {
        start(state.mode)
    }
}
