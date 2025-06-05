import { useEffect, useState } from "react"
import axios from "axios"
import "./ExchangeCurrency.css"
const CurrencyExchange=()=>{
    const [amount,setAmount]=useState(1);
    const [fromCurrency,setfromCurrency]=useState("USD");
    const [toCurrency,settoCurrency]=useState("INR");
    const [exchangeRate,setExchangeRate]=useState(null);
    const [convertAmount,setConvertAmount]=useState(null);
    useEffect(()=>{
        const converter=async ()=>{
        try{
            const url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const data=await axios.get(url);
        setExchangeRate(data.data.rates[toCurrency]);
        console.log(data);
        }catch(err){
            console.log(err);
        }
   };
   converter(); 
},[fromCurrency,toCurrency])
   const generateValue=()=>{
    setConvertAmount((amount*exchangeRate).toFixed(2));
   }
   useEffect(
    ()=>{
        generateValue();
    },
   [amount,exchangeRate])
    return (
        <>
        <div className="container">
        <h1 className="">Currency Converter</h1>
        <div className="image"></div>
        <div className="input-container">
            <label htmlFor="currency"  className="f-style">Amount:</label>
            <input value={amount} type="number" name="currency" placeholder="Enter the Amount" id="" onChange={(e)=>{setAmount(e.target.value)}} />
        </div>
        <div className="from-currency label-style">
            <label htmlFor="fromCurrency">From Currency</label>
            <select value={fromCurrency}name="fromCurrency" id="" onChange={(e)=>{setfromCurrency(e.target.value)}}>
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">GBP-British Pound Sterling</option>
                <option value="JPY">JPY-Japanese Yen</option>
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-Canadian Dollar</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="INR">INR-Indian Rupee</option>
                <option value="BRL">BRL-Brazilian Real</option>
                <option value="ZAR">ZAR-South African Rand</option>
            </select>
        </div>
        <div className="to-currency label-style">
            <label htmlFor="toCurrency">To Currency</label>
            <select name="toCurrency" value={toCurrency}id="" onChange={(e)=>{settoCurrency(e.target.value)}}>
                <option value="INR">INR-Indian Rupee</option>
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">GBP-British Pound Sterling</option>
                <option value="JPY">JPY-Japanese Yen</option>
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-Canadian Dollar</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="BRL">BRL-Brazilian Real</option>
                <option value="ZAR">ZAR-South African Rand</option>
            </select>
        </div>
        <div className="result">
            <p>{amount} {fromCurrency} is Equal to {convertAmount} {toCurrency}</p>
        </div>
        </div>
        </>
    )
}
export default CurrencyExchange