import { ref, computed, reactive, Ref, watch } from 'vue'

interface Vehicle {
    position: string
    top: number
    left: number
}

interface State {
    gameElements: {[name: string]: number[]}
    emptySpaces: number[]
    redCar: Vehicle
    vehicles: Vehicle[]
    obstacles: Vehicle[]
}

const state:State = reactive({
    gameElements: {},
    emptySpaces: [],
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
    const { gameElements } = state
    return gameElements
    // const gameElements = []
    // state.gameElements.reduce()
})


export const startGame = (game: string) => {
    const gameElementsString = game.substring(3, 39)
    const gameElements = Object.entries(gameElementsString).reduce((acc, [index, element]) => {
        if (Object.hasOwnProperty.call(acc, element)) {
            acc[element].push(Number(index))
        } else {
            acc[element] = [Number(index)]
        }
        return acc
    }, {} as {[name: string]: number[]})
    const { o: emptySpaces, ...otherGameElements } = gameElements
    state.gameElements = otherGameElements
    state.emptySpaces = emptySpaces
}

export const moveElement = (id: string, direction: string) => {
    const { emptySpaces } = state
    if (direction === 'up') {
        const newPosition = state.gameElements[id][0] - 6
        const indexEmptySpace = emptySpaces.indexOf(newPosition)
        if (indexEmptySpace !== -1) {
            const lengthDelta = (state.gameElements[id].length - 1) * 6
            emptySpaces[indexEmptySpace] = state.gameElements[id][0] + lengthDelta
            state.gameElements[id][0] = newPosition
        }
    } else if (direction === 'down') {
        const newPosition = state.gameElements[id][0] + 6
        const lengthDelta = (state.gameElements[id].length - 1) * 6
        const indexEmptySpace = emptySpaces.indexOf(newPosition + lengthDelta)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.gameElements[id][0]
            state.gameElements[id][0] = newPosition
        }
    } else if (direction === 'right') {
        const lengthDelta = state.gameElements[id].length -1
        const newPosition = state.gameElements[id][0] + 1 
        const indexEmptySpace = emptySpaces.indexOf(newPosition + lengthDelta)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.gameElements[id][0]
            state.gameElements[id][0] = newPosition
            state.gameElements[id][1] = newPosition +1
        }
    } else if (direction === 'left') {
        const lengthDelta = state.gameElements[id].length -1
        const newPosition = state.gameElements[id][0] - 1 
        const indexEmptySpace = emptySpaces.indexOf(newPosition)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.gameElements[id][0] + lengthDelta
            state.gameElements[id][0] = newPosition
            state.gameElements[id][1] = newPosition +1
        }
    }
}