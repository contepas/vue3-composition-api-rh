import { getIsServerUp } from './serverStatus'


interface Response {
    success: boolean
    id?: number
    data?: string[]
    message?: string
}


let id = 1
const nextUniqueId = () => id++


export const getGamesCall = (id: number | null, quantity: number) => {
    const response: Response = {
        success: true
    }
    if (getIsServerUp.value) {
        if (id) {
            response.id = id
            // get 'quantity' different games with id request
        } else {
            response.id = nextUniqueId()
            // get first 'quantity' games
        }
    } else {
        response.success = false,
        response.message = 'Someting went wrong'
    }
    return response
}

export const getUserData = (id: number | null) => {
    return {
        success: true,
        data: {
            name: 'Donald',
            email: 'donald@duck.it',
            gamesPlayed: []
        }
    }
}