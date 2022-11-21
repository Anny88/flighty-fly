import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import { PriceOffer } from "../models";

export type OfferCardProps = {
    priceOffer: PriceOffer
}

export const OfferCard = (props: OfferCardProps) => {
    const { priceOffer } = props;
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary">
                    {priceOffer.origin + ' ---> ' + priceOffer.destination}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {priceOffer.departureDate + ' ---> ' + priceOffer.returnDate}
                </Typography>
                <Typography variant="body2">
                    {priceOffer.price}
                </Typography>
            </CardContent>
        </Card>
    );
};