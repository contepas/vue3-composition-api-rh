import { ref, computed, reactive, Ref, watch } from 'vue'
import { getUserData } from '../../mockBackEnd/restApis'

interface GamesPlayed {
    gameId: number
    time: string
    moves: number
}

interface State {
    userId: number | null
    name: string
    email: string
    gamesPlayed: GamesPlayed[]
}

const initialState = () => ({
    userId: null,
    name: '',
    email: '',
    gamesPlayed: [],
})

const state: State = reactive(initialState())
// setInterval(() => console.log(state), 5000)

export const loadUserData = async (userId: number) => {
    const { success, data } = await getUserData(userId)
    if (success && !!data) {
        const { id, name, email, gamesPlayed } = data
        state.userId = id
        state.name = name
        ;(state.email = email), (state.gamesPlayed = gamesPlayed)
    } else {
        throw 'Someting went wrong'
    }
}

export const userData = computed(() => state)

export const userId = computed(() => state.userId)
