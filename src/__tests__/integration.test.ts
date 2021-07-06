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
        expect(ShowdownRanker.rank(showdown)).toEqual(expectedRanking)
    })
})
