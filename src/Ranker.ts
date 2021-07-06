import {PokerHand} from "./pokerHands/PokerHand";
export interface RankingGroup {
    pokerHands: PokerHand[],
}

export function getRankingGroup(pokerHands: PokerHand[]) {
   return {pokerHands: pokerHands}
}

export class Ranker {
    static rankHands(pokerHands: PokerHand[]) : RankingGroup[]{
        let sortedHands: PokerHand[] = pokerHands.sort(Ranker.compareHands)
        return sortedHands.map(h => getRankingGroup([h]));
    }

    private static compareHands(hand1: PokerHand, hand2: PokerHand): number {
        return (hand2.handType - hand1.handType)  ||  Ranker.compareHandByRankingCardValue(hand1, hand2)
    }

    private static compareHandByRankingCardValue(hand1: PokerHand, hand2: PokerHand): number {
        return hand2.rankingCards.cards[0].value - hand1.rankingCards.cards[0].value
    }

}

