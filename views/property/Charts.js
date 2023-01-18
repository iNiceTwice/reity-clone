import { useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const Chartsss = ({ tokenPrice, rentalGains, boost }) => {

    const [tokensBuyed, setTokensBuyed] = useState(1);
    const [gains, setGains] = useState(9);
    const [capRate, setCapRate] = useState(rentalGains);
    const data = {
        labels:["Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
        datasets: [
            {   
                stack: "1",
                label:"Inversion inicial",
                data:[tokensBuyed*tokenPrice,tokensBuyed*tokenPrice,tokensBuyed*tokenPrice,tokensBuyed*tokenPrice,tokensBuyed*tokenPrice],
                backgroundColor:"#0EA5E9"
            },
            {
                stack: "1",
                label:"Flujo Acumulado Arriendo",
                data:[(tokenPrice*tokensBuyed)*capRate/100,(tokenPrice*tokensBuyed)*capRate/100 + ((tokenPrice*tokensBuyed)*capRate/100)*2,(tokenPrice*tokensBuyed)*capRate/100 + ((tokenPrice*tokensBuyed)*capRate/100)*3,(tokenPrice*tokensBuyed)*capRate/100 + ((tokenPrice*tokensBuyed)*capRate/100)*4,(tokenPrice*tokensBuyed)*capRate/100 + ((tokenPrice*tokensBuyed)*capRate/100)*5],
                backgroundColor:"#10b981"
            },
            {
                stack: "1",
                label:"Plusvalía Acumulada",
                data:[(tokenPrice*tokensBuyed)*gains/100,((tokenPrice*tokensBuyed)*gains/100)*2,((tokenPrice*tokensBuyed)*gains/100)*3,((tokenPrice*tokensBuyed)*gains/100)*4,((tokenPrice*tokensBuyed)*gains/100)*5],
                backgroundColor:"#f59e0b"
            },
        ]
    }
    const options = {
        maintainAspectRatio:false
    }
    
    const handleTokenChange = (value) => {
        setTokensBuyed(value)
    }
    const handleGainsChange = (value) => {
        setGains(value)
    }
    const handleCapRateChange = (value) => {
        setCapRate(value)
    }

    return ( 
        <div className="w-full p-6 border border-main rounded-lg">
            <div className="w-full mt-4">
                <label className="text-main/60 font-sm" htmlFor="buyedTokens">Tokens comprados: <span className="text-main">{ tokensBuyed }</span></label>
                <input name="buyedTokens" className="w-full bg-main/30 appearance-none rounded-full h-3" type="range" min={0} max={50} steps={1} value={ tokensBuyed } onChange={ (e) => handleTokenChange(e.target.value) }/>
                <div className="text-main text-sm flex justify-between">
                    <p>1</p>
                    <p>50</p>
                </div>
            </div>
            <div className="w-full mt-4">
                <label className="text-main/60 font-sm" htmlFor="buyedTokens">Plusvalía: <span className="text-main">{ gains }%</span></label>
                <input name="buyedTokens" className="w-full bg-main/30 appearance-none rounded-full h-3" type="range" min={0} max={50} steps={1} value={ gains } onChange={ (e) => handleGainsChange(e.target.value) }/>
                <div className="text-main text-sm flex justify-between">
                    <p>0%</p>
                    <p>20%</p>
                </div>                
            </div>
            <div className="w-full mt-4">
                <label className="text-main/60 font-sm" htmlFor="buyedTokens">Arriendo: <span className="text-main">{ capRate }%</span></label>
                <input name="buyedTokens" className="w-full bg-main/30 appearance-none rounded-full h-3" type="range" min={0} max={50} steps={1} value={ capRate } onChange={ (e) => handleCapRateChange(e.target.value) }/>
                <div className="text-main text-sm flex justify-between">
                    <p>0%</p>
                    <p>10%</p>
                </div>
            </div>
            <div style={{ width: "99%" }} className="h-[20rem] mt-10">
                <Bar data={data} options={options}/>
            </div>
        </div>
     );
}
 
export default Chartsss;