import React from "react";

// import StockChart from "@/components/stockChart";
import dynamic from "next/dynamic";
const StockChart = dynamic(import('../components/stockChart'))

const FinancialChart = () => {


    return (
        <StockChart />

    )
};

export default FinancialChart
