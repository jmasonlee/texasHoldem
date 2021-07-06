import {getRankingGroup, Ranker} from "../Ranker"
import {PokerHandFactory} from "../pokerHands/PokerHandFactory"


describe("The Ranker", () => {
    const communityCards: string[] = ['2D', 'KD', 'JD', 'TD', '8S']

    it('returns hands in order based on their ranking', () => {
        const highCard = PokerHandFactory.createPokerHand('Simon', [...communityCards, '7S', 'AS'])
        const pair = PokerHandFactory.createPokerHand('River', [...communityCards,'KS', '3S'])
        const threeOfAKind = PokerHandFactory.createPokerHand('Kaylee', [...communityCards, 'TH', 'TS'])
        const game = [pair, highCard, threeOfAKind]

        const expectedRanking = [
            getRankingGroup([threeOfAKind]),
            getRankingGroup([pair]),
            getRankingGroup([highCard])]

        expect(Ranker.rankHands(game)).toEqual(expectedRanking)
    })

    it('ranks two tied hands by their ranking cards', () => {
        const lowPair = PokerHandFactory.createPokerHand('River', [...communityCards, 'TS', '3S'])
        const highPair = PokerHandFactory.createPokerHand('Kaylee', [...communityCards, 'KH', '2S'])
        const game = [lowPair, highPair]

        const expectedRanking = [
            getRankingGroup([highPair]),
            getRankingGroup([lowPair])]
        expect(Ranker.rankHands(game)).toEqual(expectedRanking)
    })
})
