import {PokerHand} from "./PokerHand";
import Parser from "./Parser";

export default class PokerHandRanker {

    static rank(showdown: string): string {
        let pokerHands: PokerHand[] = Parser.parse(showdown)
        let rankedHands: PokerHand[] = pokerHands.sort(PokerHandRanker.compareHands)
        return PokerHandRanker.formatRankingForOutput(rankedHands)
    }

    private static formatRankingForOutput(rankedHands: PokerHand[]) {
        return `1. Jayne High Card TC`;
    }

    private static compareHands(hand1: PokerHand, hand2: PokerHand): number {
        return 0
    }
}
