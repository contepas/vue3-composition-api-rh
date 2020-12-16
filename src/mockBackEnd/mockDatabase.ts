const tables = {
    hard: [
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
    ],
    difficult: [
        '30 BBoLooxJoLDDIJAAMNIEEoMNooKFFNGGKHHo 17039',
        '30 JBBCCxJEELooAAKLoNooKFFNoGGGMoxoIIMo 17029',
        '30 ooLBBxIoLMDDIAAMoNJKEEoNJKxoGGoKooHH 16916',
        '30 ooxKxoooJKDDAAJLooIEELooIFFoMNGGHHMN 16808',
        '30 ooxCCMooJDDMAAJKooHIoKEEHIFFLxooooLo 16765',
        '30 xoKCCxIoKLEEIAALooIJooMNoJFFMNGGHHMo 16641',
        '30 FoBBBKFooHJKoAAHJKCCGIJoooGIDDEEoooo 16607',
        '30 HIBBBoHICCoxHAAKooooJKEEooJFFLooJGGL 16601',
        '30 ooJBBBCCJoLoIAAKLoIooKDDEEFFFMGGHHoM 16595',
        '30 BBoooKGoooJKGAAoJLoCCCJLDDHIEEooHIFF 16490',
        '30 ooJBBBHoJxoMHAAKoMDDoKLNxIFFLNoIGGoo 16440',
        '30 oooJBBGCCJLoGAAKLMHDDKLMHoIEEoFFIooo 16358',
        '30 ooxCCCooJKDDAAJKLMHIEELMHIoFFooxoooo 16345',
        '30 oJBBCCxJEEMoAAoLMNIFFLMNIoKGGNHHKooo 16308',
        '30 BBBCCNoDDoxNAAKoooJoKFFoJGGLMxIIoLMo 16254',
        '30 HBBBoxHooKxoAAoKLooIEELooIJFFoGGJooo 16239',
    ],
    medium: [
        '15 xooIoooooIKoGAAJKLGCCJoLooHDDLxoHoFF 12021',
        '15 oBBooMooJCCMAAJKLMHDDKLoHIoEEEHIFFGG 12020',
        '15 ooooooooHIJoAAHIJKBBHooKFGCCCKFGDDxo 12020',
        '15 ooEoooooEFoHAAEFGHooooGoDBBoGoDCCooo 12018',
        '15 oHooBBoHCCCLAAIooLGoIJKMGDDJKMoooxFF 12017',
        '15 oooIoxoooIKLFAAJKLFHoJCCGHDDooGEEEoo 12017',
        '15 xoKoCCooKDDMJAAooMJxFFoMJGGLooHHoLII 12016',
        '15 oBBHCCoooHoJoAAoIJDDDoIJooGEEEooGoFF 12016',
        '15 ooxCCJooGHoJAAGHooEFGoIoEFDDIooooooo 12016',
        '15 HIBBLMHICCLMHAAKooooJKooooJDDxFFxooo 12014',
        '15 GoooxoGooCCJGAAoIJDDDoIKooHEEKFFHooo 12014',
        '15 oHBBBooHIoooAAIoooooIJKoGCCJKxGEEFFo 12014',
        '15 ooJBBxooJoDDAAKooMooKEEMxGGLoooHHLII 12014',
        '15 BBBoKLooIxKLAAIJooHDDJEEHoFFoMGGoooM 12012',
        '15 oLBBCCoLDDooAAMNooEEMNoxKGGooxKIIJJJ 12012',
        '15 oKBBCCoKDDooAALMooEELMoxJGGooNJHHIIN 12012',
        '15 HxCCLxHoooLMIAAKoMIEEKooooJFFFGGJooo 12010',
        '15 BBoKoMHooKxMHoAALMIDDoLoIxJFFoooJGGG 12009',
        '15 HBBBxxHIooooHIAAKLEEoJKLoooJFFoGGGoo 12008',
    ],
    easy: [
        '10 oHoooxoHCCCKAAIJoKooIJDDooooooEEFFxo 304',
        '10 oGIBBBoGIJoooAAJKooHCCKooHooooDDoxxo 304',
        '10 oGIBBBoGIJoooAAJKooHCCKooHooooDDoxFF 304',
        '10 oGIBBBoGICCCAAIJoooDDJoKoHEEoKoHFFFo 304',
        '10 oGBBKxoGIJKoAAIJKoFHDDDxFHooooFooooo 304',
        '10 oGoxCCoGoooKoHAAJKoHDDJKooIoooEEIFFF 304',
        '10 oGoBBooGCCDDAAHoooooHoIoEEFFIooooooo 304',
        '10 oGoBBooGCCDDAAoHoooooHIoEEFFIooooooo 304',
        '10 oGoooxoGCCCKAAHIoKooHIDDooooJoEEFFJo 304',
        '10 oGoooxoGCCCKAAHIoKooHIDDooooJooxFFJo 304',
        '10 oFHBBBoFHIoooAAIJooGCCJooGoooooxEEEo 304',
        '10 oFBBCCoFooJKoFAAJKoGooJxoGHIooEEHIoo 304',
        '10 oBBxooooGHIJAAGHIJooxEEJoooooooFFFoo 304',
        '10 oBBCCxxFFoNOKAAoNOKMGGHHLMooooLIIJJo 304',
        '10 oBBCCLDDooKLAAooKLoIEEFFoIoJxoHHHJoo 304',
        '10 oBBCCCDDooIJoHAAIJoHEEEKoFFGGKoooooK 304',
        '10 oBBCCCoooIoJAAoIoJooxEEKooFFoKoGGHHH 304',
    ]
}

let lastPlayed = 0

export const games = (quantity: number, mode: 'easy' | 'medium' | 'difficult' | 'hard') => {
    const gamesTable = tables[mode]
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
    
