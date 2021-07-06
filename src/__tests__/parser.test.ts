import Parser from '../Parser'
import {PokerHand} from "../pokerHands/PokerHand";
import {PokerHandFactory} from "../pokerHands/PokerHandFactory";

//Nonstandard whitespace
//Nonstandard formatting
describe('The input parser', function () {
    it('returns a poker hand for each player given', function () {
        let input: string = `
        QH KS 3H 2C AD
        Jayne TC 4D
        Zoe   3S 5C
        Mal   KD KH
        Wash  JD TH
        `;

        let communityCards = ["QH", "KS", "3H", "2C", "AD"];
        let jaynesHand: PokerHand = PokerHandFactory.createPokerHand("Jayne", [...communityCards, "TC", "4D"])
        let zoesHand: PokerHand = PokerHandFactory.createPokerHand("Zoe", [...communityCards, "3S", "5C"])
        let malsHand: PokerHand = PokerHandFactory.createPokerHand("Mal", [...communityCards, "KD", "KH"])
        let washsHand: PokerHand = PokerHandFactory.createPokerHand("Wash", [...communityCards, "JD", "TH"])

        let pokerHands: PokerHand[] = [jaynesHand, zoesHand, malsHand, washsHand];
        expect(Parser.parse(input)).toEqual(pokerHands)
    });

    it('returns an empty list when given input with no players', function () {
        let input: string = `
        QH KS 3H 2C AD
        `;

        expect(Parser.parse(input)).toEqual([])
    });
});
