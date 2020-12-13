import { ref, computed, reactive, Ref, watch } from 'vue'
import { getGamesCall } from '../../mockBackEnd/restApis'
import { userId } from '../stores/user'


// ========================
// INTERFACES SELLERS STORE
// ========================
interface State {
    games: string[]
    activeGame: number | null
}


// ======
// STATE
// ======
const state:State = reactive({
    games: [],
    activeGame: null
})
// watch(state, (newValue) => console.log(newValue))


// ========
// GETTERS
// ========
export const games = computed(() => state.games)


// ====================
// ACTIONS / MUTATIONS
// ====================
export const getGames = async (quantity:number) => {
    if (!!userId.value) {
        const { 
            success, 
            data = null, 
            id = null,
            message = null
        } = getGamesCall(userId.value, quantity)
        if (success && id === userId.value) {
            data ? state.games = data : null
        } else {
            throw message || 'Someting went wrong'
        }
    } else {
        throw 'missing usr id to getGames'
    }
}