import { Price } from "./Price";

export type PriceOffer = {
    uuid: string
    origin: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    price: Price,
    seatAvailability: number,
    offerType?: string,
}