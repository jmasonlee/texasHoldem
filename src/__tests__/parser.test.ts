import Parser from '../Parser'
import {PokerHand} from "../PokerHand";

//Multiple Players
//Nonstandard whitespace
//Nonstandard formatting
describe('The input parser', function () {
    it('returns a poker hand when given input with a single player', function () {
        let input: string = `
        QH KS 3H 2C AD
        Jayne TC 4D
        `;

        let pokerHand: PokerHand = new PokerHand("Jayne", [ "QH", "KS", "3H", "2C", "AD", "TC", "4D"]);

        expect(Parser.parse(input)).toEqual([pokerHand])
    });

    it('returns an empty list when given input with no players', function () {
        let input: string = `
        QH KS 3H 2C AD
        `;

        expect(Parser.parse(input)).toEqual([])
    });
});
