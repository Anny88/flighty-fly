import { useState } from 'react'
import './App.css'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AutocompleteInput, OfferCardList } from "./components";
import { useFetchPriceOffers } from "./hooks";
import { COUNTRY_CODES } from "./utils";

function App() {
  const { data: response, loading } = useFetchPriceOffers();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [filteredItems, setFilteredItems] = useState(response);

  console.log(response);
  const handleOriginChange = (val: string) => {
      setOrigin(val);
      setFilteredItems(response?.filter((item) => (item.origin === val || !val) && (item.destination === destination || !destination)));
  }

  const handleDestinationChange = (val: string) => {
      setDestination(val);
      setFilteredItems(response?.filter((item) => (item.origin === origin || !origin) && (item.destination === val || !val)));
  }

  return (
    <div className="App">
        <Container maxWidth="md">
            <Box mb={6} mt={6} width="100%" >
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <AutocompleteInput id="origin" label="origin" options={COUNTRY_CODES} value={origin} onChange={handleOriginChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AutocompleteInput id="destination" label="destination" options={COUNTRY_CODES} value={destination} onChange={handleDestinationChange} />
                    </Grid>
                </Grid>
            </Box>

            <Box mb={6} width="100%">
                <OfferCardList loading={loading} items={response} />
            </Box>
        </Container>
    </div>
  )
}

export default App;
