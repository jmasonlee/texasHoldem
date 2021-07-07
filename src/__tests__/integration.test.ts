import ShowdownRanker from "../ShowdownRanker"

describe("The Poker Ranker", () => {
    //Highest pair with kicker
    //No hands provided
    it('ranks two equivalent hands as a tie', () => {
        let showdown: string = `
        QH QD 3H 2C AD
        Jayne QC 3D
        Wash  QS 3S
        `

        let expectedRanking: string =
            '1. Jayne Full House Queen 3 (TIE)\n' +
            '1. Wash Full House Queen 3 (TIE)\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('ranks two equivalent hands by Kickers', () => {
        let showdown: string = `
        QH 3D 5H 2C 6D
        Wash  QS 3S
        Jayne QC TD
        `
        let expectedRanking: string =
            '1. Jayne Pair Queen Kicker 10\n' +
            '2. Wash Pair Queen Kicker 6\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('will rank hands by highest card if no other combination  is available', () => {
        let showdown: string = `
        5H 6S 3H 2C 8D
        Jayne JC 9D
        Mal   TD 9H
        Wash  9D QH
        `
        let expectedRanking: string =
            '1. Wash High Card Queen\n' +
            '2. Jayne High Card Jack\n' +
            '3. Mal High Card 10\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('will rank hands by type first, ranking cards second ', () => {
        let showdown: string = `
        9H 6S 3H TC 9D
        Jayne JC JD
        Zoe   9S 9C
        Wash  4D QH
        `

        let expectedRanking: string =
            '1. Zoe Four of a Kind 9\n' +
            '2. Jayne Pair Jack\n' +
            '3. Wash Pair 9\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('ranks a straight above 3 of a kind and below a Flush', () => {
        let showdown: string = `
        AH 2H 3H TC 9D
        Jayne 4C 5D
        Zoe   9S 9C
        Mal   KH JH
        `

        let expectedRanking: string =
            '1. Mal Flush Ace\n' +
            '2. Jayne Straight 5\n' +
            '3. Zoe Three of a Kind 9\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('ranks a full house above a flush', () => {
        let showdown: string = `
        AH 2H 3H 5C 3D
        Jayne 3C 5D
        Mal   KH JH
        `

        let expectedRanking: string =
            '1. Jayne Full House 3 5\n' +
            '2. Mal Flush Ace\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('ranks 4 of a kind above a full house, and below a Straight Flush', () => {
        let showdown: string = `
        4H 2H 3H 2C 3D
        Jayne 3C 5D
        Mal   2H 2S
        Zoe   5H 6H
        `

        let expectedRanking: string =
            '1. Zoe Straight Flush 6\n' +
            '2. Mal Four of a Kind 2\n' +
            '3. Jayne Full House 3 2\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })

    it('ranks a straight flush below a Royal Flush', () => {
        let showdown: string = `
        JH QH TH 9H 8H
        Jayne AH KH
        Mal   7H 6H
        `

        let expectedRanking: string =
            '1. Jayne Royal Flush\n' +
            '2. Mal Straight Flush Queen\n'

        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })
})
