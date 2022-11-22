import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PriceOffer } from "../models";
import Grid from "@mui/material/Grid";

const getCurrencySign = (currency: string) => currency === "EUR" ? "€" : undefined;

export type OfferCardProps = {
    priceOffer: PriceOffer
}

export const OfferCard = (props: OfferCardProps) => {
    const { priceOffer } = props;
    return (
        <Card variant="elevation" sx={{ boxShadow: 3 }} >
            <CardContent>
                <Grid container spacing={1} display="flex" justifyContent="center">
                    <Grid item xs={12} md={8} display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="subtitle1" color="text.primary">
                            {`${priceOffer.origin} ---> ${priceOffer.destination}`}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {`${priceOffer.departureDate} ---> ${priceOffer.returnDate}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} pb={2} display="flex" flexDirection="column" justifyContent="center" >
                        <Typography variant="h6">
                            {`${priceOffer.price?.amount}${getCurrencySign(priceOffer.price?.currency)}`}
                        </Typography>
                        <Typography variant="body2" color={priceOffer.seatAvailability && priceOffer.seatAvailability > 0 ? "text.secondary" : "error"}>
                            {`${priceOffer.seatAvailability || 'No'} seats available `}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};