import Parser from '../Parser'
import {PokerHand} from "../pokerHands/PokerHand";

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

        let jaynesHand: PokerHand = new PokerHand("Jayne", [ "QH", "KS", "3H", "2C", "AD", "TC", "4D"]);
        let zoesHand: PokerHand = new PokerHand("Zoe", [ "QH", "KS", "3H", "2C", "AD", "3S", "5C"]);
        let malsHand: PokerHand = new PokerHand("Mal", [ "QH", "KS", "3H", "2C", "AD", "KD", "KH"]);
        let washsHand: PokerHand = new PokerHand("Wash", [ "QH", "KS", "3H", "2C", "AD", "JD", "TH"]);

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
