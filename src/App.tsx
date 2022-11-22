import { useEffect, useState } from 'react'
import './App.css'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AutocompleteInput, OfferCardList } from "./components";
import { PriceOffer } from "./models";
import { COUNTRY_CODES } from "./utils";

const initialResponse: PriceOffer[] = [];
function onlyUnique(value:any, index: any, self:any) {
    return self.indexOf(value) === index;
}
function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [response, setResponse] = useState(initialResponse);
  const [filteredItems, setFilteredItems] = useState(response);
  const [loading, setLoading] = useState(true);

  const or = response.map((item) => item.origin);
  const des = response.map((item) => item.origin);


  console.log([...or, ...des].filter(onlyUnique).sort());

  useEffect(() => {
      fetch("http://localhost:8080/promotions/priceoffers/ond", {
          method: 'GET',
          mode: "cors",
          headers: {'Content-Type':'application/json'},
      })
          .then((res) => res.json())
          .then((data) => {
              setResponse(data);
              setFilteredItems(data);
              setLoading(false);
              // setTimeout(() => setLoading(false), 4000);
          })
  }, []);

  const handleOriginChange = (val: string) => {
      setOrigin(val);
      setFilteredItems(response.filter((item) => (item.origin === val || !val) && (item.destination === destination || !destination)));
  }

  const handleDestinationChange = (val: string) => {
      setDestination(val);
      setFilteredItems(response.filter((item) => (item.origin === origin || !origin) && (item.destination === val || !val)));
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
                <OfferCardList loading={loading} items={filteredItems} />
            </Box>
        </Container>
    </div>
  )
}

export default App;
