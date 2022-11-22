import { PriceOffer } from "../models";

/**
 * filters price offers by origin and / or destination
 * @param priceOffers
 * @param origin
 * @param destination
 */
export const filterPriceOffers = (priceOffers: PriceOffer[] | undefined, origin: string, destination: string)
    : PriceOffer[] | undefined => {
    if ((!origin && !destination) || !priceOffers) {
        return priceOffers;
    }
    return priceOffers.filter((item) =>
        (!origin || item.origin === origin) && (!destination || item.destination === destination));
}