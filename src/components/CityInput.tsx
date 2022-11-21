import * as React from 'react';
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export type CityInputProps = {
    label: String,
    options: string[],
    onChange: ( val : string ) => void,
} & Omit<AutocompleteProps<string, boolean, boolean, boolean>, "renderInput" | "onChange" | "options">;

export const CityInput = (props: CityInputProps) => {
    const { label, onChange, ...otherProps } = props;

    return (
        <Autocomplete
            { ...otherProps}
            disablePortal
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={(e, val) => onChange(val as string)}
        />
    );
};