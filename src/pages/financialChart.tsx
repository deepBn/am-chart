import React, { useEffect, useState } from "react";

// import StockChart from "@/components/stockChart";
import dynamic from "next/dynamic";
import { discontinuousTimeScaleProviderBuilder } from "react-financial-charts";
import { initialData } from "@/components/data";
import CandleStick from "@/components/candleStick";
const StockChart = dynamic(import('../components/stockChart'))

const FinancialChart = () => {
    const height: any = 700;
    const width: any = 1300;
    const margin: any = { left: 0, right: 48, top: 0, bottom: 24 };
    const [chartData, setData] = useState([]);



    const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d) => new Date(d.date)
    );

    const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
        chartData
    );

    return (
        // <StockChart width={width} height={height} margin={margin} data={data} xScale={xScale} xAccessor={xAccessor} displayXAccessor={displayXAccessor} />
        <CandleStick initialData={data} />
    )
};

export default FinancialChart
