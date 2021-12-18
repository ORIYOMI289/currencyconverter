const express = require('express') ;
const axios = require('axios') ;

const app = express() ;
require('dotenv').config() ;

const url = 'https://freecurrencyapi.net/api/v2/historical?apikey=99bf1cc0-6048-11ec-b31c-efdf5ff3fabc&from=USD&to=CZK';
axios.get(url).then( function (res) {console.log(res)})
.catch( (error) => { console.log(error) })

const port = process.env.PORT || 7000 ;
app.listen(port, (req, res) => {
    console.log(`server is connected to port ${port}`)
})