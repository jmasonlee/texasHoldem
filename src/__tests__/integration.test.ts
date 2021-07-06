import ShowdownRanker from "../ShowdownRanker"

describe("The Poker Ranker", () => {
    //Rank Cards by high card
    //look for highest pair
    //Highest pair with kicker
    //three of a kind
    //No hands provided
    it('ranks the only hand provided if one hand is provided', () =>  {
        let showdown: string = `
        QH KS 3H 2C AD
        Jayne TC 4D
        `
        let expectedRanking: string = `1. Jayne High Card Ace\n`
        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })
    xit('will rank hands by highest card if no other combination  is available', () => {
        let showdown: string = `
        QH KS 3H 2C AD
        Jayne TC 4D
        Zoe   3S 5C
        Mal   7D 6H
        Wash  5D JH
        `
        let expectedRanking: string = `
        1. Wash High Card JH
        2. Jayne High Card TC
        3. Mal High Card 7D
        4. Zoe High Card 5C
        `
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
        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })
})
