import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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