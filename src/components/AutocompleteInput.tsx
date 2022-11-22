import * as React from 'react';
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type AutocompleteInputProps = {
    label: string,
    options: string[],
    onChange: ( val : string ) => void,
} & Omit<AutocompleteProps<string, boolean, boolean, boolean>, "renderInput" | "onChange" | "options">;

export const AutocompleteInput = (props: AutocompleteInputProps) => {
    const { label, onChange, ...otherProps } = props;

    return (
        <Autocomplete
            autoComplete
            autoSelect
            disablePortal
            clearOnEscape
            selectOnFocus
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={(e, val) => onChange(val as string)}
            { ...otherProps}
        />
    );
};