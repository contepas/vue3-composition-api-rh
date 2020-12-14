import { ref, computed, reactive, Ref, watch } from 'vue'
import { getGamesCall } from '../../mockBackEnd/restApis'
import { userId } from '../stores/user'

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
setInterval(() => console.log(state), 5000)

// ========
// GETTERS
// ========
export const games = computed(() => state.games)
export const board = computed(() => {
    return state.lastGamePlayed !== null
        ? state.games[state.lastGamePlayed]
        : null
})

// ====================
// ACTIONS / MUTATIONS
// ====================
export const start = async (quantity: number) => {
    if (userId.value) {
        const {
            success,
            data = null,
            id = null,
            message = null,
        } = await getGamesCall(userId.value, quantity)
        if (success && id === userId.value) {
            data ? (state.games = data) : null
            state.lastGamePlayed = 0
        } else {
            throw message || 'Someting went wrong'
        }
    } else {
        throw 'missing user id to getGames'
    }
}

export const changePuzzle = () => {
    console.log('change puzzle')
}

export const reset = () => {
    console.log('Reset Game')
}
