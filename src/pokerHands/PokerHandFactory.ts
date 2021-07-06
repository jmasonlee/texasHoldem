import {RepeatedValues} from "./RepeatedValues"
import {Straight} from "./Straight";
import {Flush} from "./Flush";
import {StraightFlush} from "./StraightFlush";
import {PokerHand} from "./PokerHand";
import {Ranker} from "../Ranker";

export class PokerHandFactory {
    public static createPokerHand(playerName: string, allCards: string[]) {

        const possibleHands: PokerHand[] = [
            StraightFlush.makeStraightFlushIfValid(playerName, allCards),
            Flush.makeFlushIfValid(playerName, allCards),
            Straight.makeStraightIfValid(playerName, allCards),
            new RepeatedValues(playerName, allCards)
        ].filter(hand => hand)

        const bestHand: PokerHand = Ranker.rankHands(possibleHands)[0].pokerHands[0]

        return bestHand
    }

}
