import {PokerHandFactory} from "../pokerHands/PokerHandFactory"
import {Card, getCardMatchingSymbol} from "../Card"
import {getRankingGroup, getRankingGroupWithKickers, Ranker} from "../Ranker"


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

    it('ranks two tied hands by their kickers', () => {
        const lowKicker = PokerHandFactory.createPokerHand('River', [...communityCards, 'TS', '3S'])
        const highKicker = PokerHandFactory.createPokerHand('Kaylee', [...communityCards, 'TH', 'QS'])
        const game = [lowKicker, highKicker]

        const expectedRanking = [
            getRankingGroupWithKickers([highKicker], getCardMatchingSymbol('QS')),
            getRankingGroupWithKickers([lowKicker], getCardMatchingSymbol('JD'))]
        expect(Ranker.rankHands(game)).toEqual(expectedRanking)
    })

    it('Groups two completely equivalent hands', () => {
        const pair1 = PokerHandFactory.createPokerHand('River', [...communityCards, 'TS', '3S'])
        const pair2 = PokerHandFactory.createPokerHand('Kaylee', [...communityCards, 'TH', '3H'])
        const game = [pair2, pair1]

        const expectedRanking = [getRankingGroup([pair2, pair1])]
        expect(Ranker.rankHands(game)).toEqual(expectedRanking)
    })

    it('Groups two completely equivalent hands without kickers', () => {
        const communityCards = ['2D', 'KD', 'JD', 'TD', 'JS']
        const pair1 = PokerHandFactory.createPokerHand('River', [...communityCards, 'TS', 'JC'])
        const pair2 = PokerHandFactory.createPokerHand('Kaylee', [...communityCards, 'TH', 'JH'])
        const game = [pair2, pair1]

        const expectedRanking = [getRankingGroup([pair2, pair1])]

        expect(Ranker.rankHands(game)).toEqual(expectedRanking)
    })
})
