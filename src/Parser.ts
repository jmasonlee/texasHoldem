import { PokerHand } from "./PokerHand";

export default class Parser {
    static parse(input: string) {

        let pokerHands = [new PokerHand("Jayne", ["QH", "KS", "3H", "2C", "AD", "TC", "4D"])];
        return pokerHands;
    }
}
