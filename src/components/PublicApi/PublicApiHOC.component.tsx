import React from 'react'
import PublicApi from './PublicApi.component';
import { Currency } from '@/types/types';




const PublicApiHOC: React.FC = async() => {

  async function getData(): Promise<any>{
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const result = await response.json();
    return result;
}

const data = await getData();

const currencies: Currency[] = Object.keys(data.bpi).map((currencyCode) => {
  const currency = data.bpi[currencyCode];
  return {
    code: currency.code,
    symbol: currency.symbol,
    rate: currency.rate,
    description: currency.description,
    rate_float: currency.rate_float,
  };});

  console.log({currencies});

  return (
    <div>

      {/* {currencies.map((currency, index) => <PublicApi data={currency} key={index} />)} */}

      {currencies.map((currency, index) => <PublicApi data={currency} key={index} />)}

      
    </div>
  )
}

export default PublicApiHOC;