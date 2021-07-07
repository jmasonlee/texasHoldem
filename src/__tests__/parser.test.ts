import Parser from '../Parser'
import {PokerHand} from "../pokerHands/PokerHand";
import {PokerHandFactory} from "../pokerHands/PokerHandFactory";

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

    it('throws an exception when community cards are too short', function () {
        let input: string = `
        QH KS 3H 2C
        `;

        expect(() => {return Parser.parse(input)}).toThrow('Oops! [QH,KS,3H,2C] should have 5 community cards')
    });

    it('throws an exception when community cards are too long', function () {
        let input: string = `
        QH KS 3H 2C 5D AS
        `;

        expect(() => Parser.parse(input)).toThrow('Oops! [QH,KS,3H,2C,5D,AS] should have 5 community cards')
    });

    it('throws an exception when not given enough hole cards', () => {
        let input: string = `
        QH KS 3H 2C AS
        Simon 
        `;

        expect(() => Parser.parse(input)).toThrow('Oops! Simon should have 2 hole cards instead of: []')
    })

    it('throws an exception when given too many hole cards', () => {
        let input: string = `
        QH KS 3H 2C AS
        Simon AD AH AC
        `;

        expect(() => Parser.parse(input)).toThrow('Oops! Simon should have 2 hole cards instead of: [AD,AH,AC]')
    })

});

