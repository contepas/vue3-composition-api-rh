import {ref} from 'vue'

const gamesTable = [
    '60 IBBxooIooLDDJAALooJoKEEMFFKooMGGHHHM 2332',
    '58 BBoKMxDDDKMoIAALooIoJLEEooJFFNoGGoxN 9192',
    '55 ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLox 9712',
    '55 ooBBMxDDDKMoAAJKoNooJEENIFFLooIGGLHH 8257',
    '54 oxCCMoDDDKMoAAJKooooJLEEIFFLoNIGGoxN 6355',
    '54 oooJLxCCCJLoHAAKooHoIKDDooIEEMoFFoxM 3461',
    '54 oooJxoCCCJLoHAAKLoHoIKDDooIEEMoFFoxM 2948',
    '54 BBBKCCDDoKoLIAAKoLIoJEEMFFJooMooxoHH 1845',
    '53 BBBCCNDDoxMNJAAoMOJoKFFOGGKLooxIILoo 4705',
    '53 ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLHH 4228',
    '53 ooBBoxDDDKooAAJKoMooJEEMIFFLooIGGLox 4102',
    '52 oxCCMNDDDKMNAAJKooooJEEoIFFLooIGGLox 7178',
    '52 oxCCMNDDDKMNAAJKooooJLEEIFFLooIGGHHo 5717',
    '51 xCCoLMooJoLMAAJoLNHIDDDNHIoKEExooKGG 9360',
    '51 GBBoLoGHIoLMGHIAAMCCCKoMooJKDDEEJFFo 4780',
    '50 BBIooMGHIoLMGHAALNGCCKoNooJKDDooJEEx 14385',
    '50 ooIBBBooIKooAAJKoLCCJDDLGHEEoLGHFFoo 4643',
    '50 ooooxoCCCJLoAAIJLMooIDDMHEEKooHFFKox 3874',
    '50 ooooLxCCCJLoAAIJoMooIDDMHEEKooHFFKox 3676',
    '50 ooooLxCCCJLoAAIJoMooIDDMHEEKooHFFKGG 3169',
    '50 ooooxoCCCJLoAAIJLMooIDDMHEEKooHFFKGG 2966',
    '50 ooxCCLDDoKoLIAAKooIoJKEEFFJooMGGGHHM 1845',
    '50 BBBJCCHooJoKHAAJoKooIDDLEEIooLooxoGG 1066',
]

// const lastPlayed = ref(0)
let lastPlayed = 0

export const games = (quantity: number) => {
    const response = quantity < gamesTable.length 
        ? gamesTable.slice(lastPlayed, lastPlayed + quantity) 
        : gamesTable
    if (lastPlayed > gamesTable.length -1) {
        lastPlayed = 0
    } else {
        lastPlayed+= quantity
    }
    return response
}
    
