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
    gamesPlayed: []
})

const state: State = reactive(initialState())

export const loadUserData = async (userId: number) => {
    const {success, data} = getUserData(userId)
    if (success) {
        const {name, email, gamesPlayed} = data
        state.userId = userId
        state.name = name
        state.email = email,
        state.gamesPlayed = gamesPlayed
    } else {
        throw 'Someting went wrong'
    }
}

export const userData = computed(() => state)

export const userId = computed(() => state.userId)