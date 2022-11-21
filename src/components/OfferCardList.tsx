import React from 'react';
import Grid from "@mui/material/Grid";
import { CardPlaceholder, OfferCard } from "../components";
import { PriceOffer } from "../models";

type OfferCardListProps = {
    loading?: boolean,
    items?: PriceOffer[]
}

const PlaceholderList = () => {
    return (
        <>
            {Array.from(Array(4).keys()).map((i) => (
                <Grid item xs={12} key={i}>
                    <CardPlaceholder />
                </Grid>))
            }
        </>)
}

export const OfferCardList = (props: OfferCardListProps) => {
    const { loading = false, items } = props;

    if (loading) {
        return (
            <Grid container spacing={2} justifyContent="center">
                <PlaceholderList />
            </Grid>
        );
    }

    return (
        <Grid container spacing={2} justifyContent="center">
            {items?.map((resItem) =>
                <Grid item xs={12} key={resItem.uuid}>
                    <OfferCard priceOffer={resItem}/>
                </Grid>)}
        </Grid>
    );
};