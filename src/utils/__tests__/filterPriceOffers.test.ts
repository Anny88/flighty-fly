import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { filterPriceOffers } from "../filterPriceOffers";

const sampleResponse = [
    { origin: 'DUS', destination: 'ALA', departureDate: '22-02-2023', returnDate: '2023-07-03', price: { amount: 200, currency: 'EUR' }, seatAvailability: 4, uuid: '3err3d' },
    { origin: 'FRA', destination: 'HND', departureDate: '21-03-2023', returnDate: '2023-28-04', price: { amount: 200, currency: 'EUR' }, seatAvailability: 4, uuid: '3456rr3d' },
    { origin: 'FRA', destination: 'HND', departureDate: '21-07-2023', returnDate: '2023-29-08', price: { amount: 500, currency: 'EUR' }, seatAvailability: 2, uuid: '3454rr3d' },
    { origin: 'ALA', destination: 'FRA', departureDate: '21-03-2023', returnDate: '2023-28-04',price: { amount: 200, currency: 'EUR' }, seatAvailability: 4, uuid: '3456rr3d' },
]

describe("Test function filterPriceOffers", () => {
    test("undefined result check", () => {
        const result = filterPriceOffers(undefined, '', '');
        expect(result).toEqual(undefined);
    });

    test("result check with empty filters", () => {
        const result = filterPriceOffers(sampleResponse, '', '');
        expect(result).toEqual(sampleResponse);
    });

    test("result check with only origin filter", () => {
        const result = filterPriceOffers(sampleResponse, 'ALA', '');
        const expectedResult = [
            { origin: 'ALA', destination: 'FRA', departureDate: '21-03-2023', returnDate: '2023-28-04',price: { amount: 200, currency: 'EUR' }, seatAvailability: 4, uuid: '3456rr3d' }
        ];
        expect(result).toEqual(expectedResult);
    });

    test("result check with only destination filter", () => {
        const result = filterPriceOffers(sampleResponse, '', 'DUS');
        expect(result).toEqual([]);
    });

    test("result check with destination and origin", () => {
        const result = filterPriceOffers(sampleResponse, 'FRA', 'HND');
        const expectedResult =  [
            { origin: 'FRA', destination: 'HND', departureDate: '21-03-2023', returnDate: '2023-28-04', price: { amount: 200, currency: 'EUR' }, seatAvailability: 4, uuid: '3456rr3d' },
            { origin: 'FRA', destination: 'HND', departureDate: '21-07-2023', returnDate: '2023-29-08', price: { amount: 500, currency: 'EUR' }, seatAvailability: 2, uuid: '3454rr3d' }
        ];
        expect(result).toEqual(expectedResult);
    });
})