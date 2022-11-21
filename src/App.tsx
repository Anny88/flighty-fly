import { useState } from 'react'
import './App.css'
import { Box, Grid } from "@mui/material";
import {CityInput} from "./components";
import OfferCard from "./components/OfferCard";

const response = [
    {
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    }, {
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    }, {
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'DUS',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'FRA',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'FRA',
        destination: 'ALA',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },{
        origin: 'FRA',
        destination: 'AST',
        departureDate: '2017-01-13',
        returnDate: '2016-01-14',
        price: '288$',
        uuid: 'SA00003',
    },
];
const inputOptions = ['DUS', 'FRA', 'ISS', 'DUB'];

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [filteredItems, setFilteredItems] = useState(response);

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
        <Box mb={6} mt={6}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <CityInput id="origin" label="origin" options={inputOptions} value={origin} onChange={handleOriginChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CityInput id="destination" label="destination" options={inputOptions} value={destination} onChange={handleDestinationChange} />
                </Grid>
            </Grid>
        </Box>

        <Box mb={6}>
            <Grid container spacing={2} justifyContent="center">
                {filteredItems.map((resItem) =>
                    <Grid item xs={12}>
                        <OfferCard priceOffer={resItem} />
                    </Grid>)}
            </Grid>
        </Box>




      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </div>
  )
}

export default App
