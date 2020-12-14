import { ref, computed, reactive, Ref, watch } from 'vue'

interface Vehicle {
    position: string
    top: number
    left: number
}

interface State {
    gameElements: {[name: string]: number[]}
    redCar: Vehicle,
    vehicles: Vehicle[],
    obstacles: Vehicle[]
}

const state:State = reactive({
    gameElements: {},
    redCar: {
        position: '',
        top: 0,
        left: 0,
    },
    vehicles: [],
    obstacles: [],
})

// setInterval(() => console.log(state.gameElements), 5000)

export const gameElements = computed(() => {
    const {gameElements} = state
    delete gameElements.o 
    return gameElements
    // const gameElements = []
    // state.gameElements.reduce()
})


// IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM
export const startGame = (game: string) => {
    const gameElements = game.substring(3, 39)
    state.gameElements = Object.entries(gameElements).reduce((acc, [index, element]) => {
        if (Object.hasOwnProperty.call(acc, element)) {
            acc[element].push(Number(index))
        } else {
            acc[element] = [Number(index)]
        }
        return acc
    }, {} as {[name: string]: number[]})
}
