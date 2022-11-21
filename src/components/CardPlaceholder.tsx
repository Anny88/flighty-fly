import React from 'react';
import { Card, CardContent, Skeleton } from "@mui/material";

export const CardPlaceholder = () => {
    return (
        <Card>
            <CardContent>
                <Skeleton
                    animation="wave"
                    height={10}
                    width="40%"
                    style={{ marginBottom: 6 }}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="60%"
                    style={{ marginBottom: 6 }}
                />
                <Skeleton
                    animation="wave"
                    height={10}
                    width="90%"
                    style={{ marginBottom: 6 }}
                />
            </CardContent>
        </Card>
    );
};