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
        return (hand2.handType - hand1.handType) 
    }
}

