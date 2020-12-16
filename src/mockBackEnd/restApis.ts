import { getIsServerUp } from './serverStatus'
import { games } from './mockDatabase'

interface GamesPlayed {
    gameId: number
    time: string
    moves: number
}

interface ResponseGetUserData {
    id: number
    name: string
    email: string
    gamesPlayed: GamesPlayed[]
}

interface Response {
    success: boolean
    id?: number
    data?: string[] | ResponseGetUserData
    message?: string
}

interface ResponseGetUser extends Response {
    data?: ResponseGetUserData
}

interface ResponseGetGames extends Response {
    data?: string[]
}

let id = 1
const nextUniqueId = () => id++

export const getGamesCall = async (id: number | null, quantity: number, mode: 'easy' | 'medium' | 'difficult' | 'hard') => {
    await setTimeout(() => {
        // console.log('response getGamesCall arrived')
    }, 3000)
    const response: ResponseGetGames = {
        success: true,
    }
    if (getIsServerUp.value) {
        response.data = games(quantity, mode)
        if (id) {
            response.id = id
            // get 'quantity' different games with id request
            response.data
        } else {
            response.id = nextUniqueId()
            // get first 'quantity' games
        }
    } else {
        ;(response.success = false), (response.message = 'Someting went wrong')
    }
    return response
}

export const getUserData = async (
    id: number | null,
): Promise<ResponseGetUser> => {
    const response: ResponseGetUser = {
        success: true,
    }
    await setTimeout(() => {
        // console.log('response getUserData arrived')
    }, 3000)
    if (id !== null) {
        response.data = {
            id,
            name: 'Donald',
            email: 'donald@duck.it',
            gamesPlayed: [],
        }
    } else {
        response.success = false
        response.message = 'Something went wrong'
    }
    return response
}
