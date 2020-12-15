import { ref, computed, reactive, Ref, watch } from 'vue'
import { isEmpty, cloneDeep } from 'lodash'


interface State {
    initialGame: {[name: string]: number[]}
    vehicles: {[name: string]: number[]}
    obstacles: number[]
    emptySpaces: number[]
}

const state:State = reactive({
    initialGame: {},
    vehicles: {},
    obstacles: [],
    emptySpaces: [],
})
// setInterval(() => console.log(state), 5000)

export const compleated = computed(() => {
    return state.vehicles['A']
        ? state.vehicles['A'].includes(17)
        : false
})

export const gameElements = computed(() => {
    const { initialGame, vehicles, obstacles } = state
    return isEmpty(initialGame) 
        ? null 
        : {
            vehicles,
            obstacles,
        }
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
    const { o: emptySpaces, x: obstacles, ...vehicles } = gameElements
    state.initialGame = cloneDeep(gameElements)
    state.vehicles = vehicles
    state.obstacles = obstacles
    state.emptySpaces = emptySpaces
}

export const restartGame = () => {
    const { o: emptySpaces, x: obstacles, ...vehicles } = cloneDeep(state.initialGame)
    state.vehicles = vehicles
    state.obstacles = obstacles
    state.emptySpaces = emptySpaces
}

export const moveElement = (id: string, direction: string) => {
    const { emptySpaces } = state
    if (direction === 'up') {
        const newPosition = state.vehicles[id][0] - 6
        const indexEmptySpace = emptySpaces.indexOf(newPosition)
        if (indexEmptySpace !== -1) {
            const lengthDelta = (state.vehicles[id].length - 1) * 6
            emptySpaces[indexEmptySpace] = state.vehicles[id][0] + lengthDelta
            state.vehicles[id][0] = newPosition
        }
    } else if (direction === 'down') {
        const newPosition = state.vehicles[id][0] + 6
        const lengthDelta = (state.vehicles[id].length - 1) * 6
        const indexEmptySpace = emptySpaces.indexOf(newPosition + lengthDelta)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.vehicles[id][0]
            state.vehicles[id][0] = newPosition
        }
    } else if (direction === 'right') {
        const lengthDelta = state.vehicles[id].length -1
        const newPosition = state.vehicles[id][0] + 1 
        const indexEmptySpace = emptySpaces.indexOf(newPosition + lengthDelta)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.vehicles[id][0]
            state.vehicles[id][0] = newPosition
            state.vehicles[id][1] = newPosition +1
        }
    } else if (direction === 'left') {
        const lengthDelta = state.vehicles[id].length -1
        const newPosition = state.vehicles[id][0] - 1 
        const indexEmptySpace = emptySpaces.indexOf(newPosition)
        if (indexEmptySpace !== -1) {
            emptySpaces[indexEmptySpace] = state.vehicles[id][0] + lengthDelta
            state.vehicles[id][0] = newPosition
            state.vehicles[id][1] = newPosition +1
        }
    }
}