import {PokerHand} from "./pokerHands/PokerHand";
import Parser from "./Parser";
import {Ranker, RankingGroup} from "./Ranker";

export default class ShowdownRanker {

    static rank(showdown: string): string {
            let pokerHands: PokerHand[] = Parser.parse(showdown)
            let rankedHands = Ranker.rankHands(pokerHands);
            return ShowdownRanker.formatRankingForOutput(rankedHands)
    }

    private static formatRankingForOutput(rankedHands: RankingGroup[]) {
        let output: string = ``
        rankedHands.forEach((ranking:RankingGroup, index:number) => {
            const hand = ranking.pokerHands[0];
                output += `${index+1}. ${hand.describeHand()}`;
                output += `\n`
        })
        return output
    }
}
