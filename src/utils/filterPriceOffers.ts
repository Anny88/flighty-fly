import { PriceOffer } from "../models";

export const filterPriceOffers = (priceOffers: PriceOffer[] | undefined, origin: string, destination: string) => {
    if ((!origin && !destination) || !priceOffers) {
        return priceOffers;
    }
}