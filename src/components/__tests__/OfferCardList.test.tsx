import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OfferCardList } from '../OfferCardList';

describe("OfferCardList", () => {

    test("should show a loading ui for the list of offers", () => {
        render(<OfferCardList loading={true} items={[]}/>);
        expect(screen.getAllByTestId('card-placeholder')).toHaveLength(4);
    });

    test("should show a placeholder text if there are no offers", () => {
        render(<OfferCardList items={[]}/>);
        expect(screen.getByText(/No offers/)).toBeDefined();
    });

    test("should show some offers", () => {
        const sampleOffers = [
            { origin: 'DUS', destination: 'ALA', departureDate: '22-02-2023', returnDate: '28-02-2023', price: 300, uuid: '3err3d' },
            { origin: 'FRA', destination: 'HND', departureDate: '21-03-2023', returnDate: '28-04-2023', price: 1500, uuid: '3456rr3d' },
            { origin: 'PMI', destination: 'FRA', departureDate: '21-03-2023', returnDate: '28-04-2023', price: 1500, uuid: '3456rr3d' },
        ]
        render(<OfferCardList items={sampleOffers} />);
        expect(screen.queryByText(/No offers/)).toBeNull();
        expect(screen.queryByTestId('card-placeholder')).toBeNull();
        expect(screen.getAllByText(/FRA/)).toHaveLength(2);
        expect(screen.getAllByText(/DUS/)).toHaveLength(1);
        expect(screen.getAllByText('300')).toHaveLength(1);
        expect(screen.getAllByText('1500')).toHaveLength(2);
    });

})