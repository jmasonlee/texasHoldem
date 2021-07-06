import {Card, compareCards} from "../Card";
import {CardArray} from "../CardArray";

export enum HandType {
    HIGH_CARD,
    PAIR,
    THREE_OF_A_KIND,
    STRAIGHT,
    FLUSH,
    FULL_HOUSE,
    FOUR_OF_A_KIND,
    STRAIGHT_FLUSH,
    ROYAL_FLUSH,
}

export abstract class PokerHand {
    private static HAND_SIZE: number = 5
    playerName: string
    rankingCards: CardArray
    handType: HandType
    handName: string
     protected constructor(playerName: string, cards: CardArray) {
        this.playerName = playerName
        this.rankingCards = this.getRankingCards(cards)
    }

    protected abstract getRankingCards(cards: CardArray): CardArray

    public describeHand() {
        return `${this.playerName} ${this.handName}${(this.getStringRepresentationOfRankingCards())}`
    }


    protected getStringRepresentationOfRankingCards(): string {
        return ` ${this.rankingCards.cards[0].valueName}`
    }
}

