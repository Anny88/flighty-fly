import { useMemo, useState } from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AutocompleteInput, OfferCardList } from "./components";
import { useFetchPriceOffers } from "./hooks";
import { COUNTRY_CODES, filterPriceOffers } from "./utils";
import './App.css';

function App() {
  const { data: response, loading } = useFetchPriceOffers();
  const [origin, setOrigin] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);

  console.log(destination);

  const filteredItems = useMemo(() =>
      filterPriceOffers(response, origin, destination),
      [response, origin, destination]);

  return (
    <Box className="App">
        <Container maxWidth="md">
            <Box mb={6} mt={6} width="100%">
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <AutocompleteInput id="origin" label="origin" options={COUNTRY_CODES} value={origin} onChange={setOrigin} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AutocompleteInput id="destination" label="destination" options={COUNTRY_CODES} value={destination} onChange={setDestination} />
                    </Grid>
                </Grid>
            </Box>

            <Box mb={6} width="100%">
                <OfferCardList loading={loading} items={filteredItems} />
            </Box>
        </Container>
    </Box>
  )
}

export default App;
