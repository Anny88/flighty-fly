import { useEffect, useState } from "react";
import {PriceOffer} from "../models";

export const useFetchPriceOffers = () : { loading: boolean, data: PriceOffer[] | undefined } => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/promotions/priceoffers/ond", {
            method: 'GET',
            mode: "cors",
            headers: {'Content-Type':'application/json'},
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data || []);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => setLoading(false));
    }, []);

    return { loading, data };
}