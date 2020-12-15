import { ref, computed, reactive, Ref, watch } from 'vue'
import { getGamesCall } from '../../mockBackEnd/restApis'
import { userId } from '../stores/user'
import { startGame } from '../stores/gameEngine'

// ========================
// INTERFACES SELLERS STORE
// ========================
interface State {
    games: string[]
    lastGamePlayed: number | null
}

// ======
// STATE
// ======
const state: State = reactive({
    games: [],
    lastGamePlayed: null,
})
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
export const start = async (quantity = 3) => {
    if (userId.value) {
        const {
            success,
            data = null,
            id = null,
            message = null,
        } = await getGamesCall(userId.value, quantity)
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

export const changePuzzle = () => {
    if (state.lastGamePlayed !== null && (state.games.length -1 > state.lastGamePlayed)) {
        state.lastGamePlayed++
    } else {
        start()
    }
}
