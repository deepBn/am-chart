import dynamic from "next/dynamic";
// import ReactFinancialChart from "../components/ReactFinancialChart";

const ReactFinancialChart = dynamic(
  () => import("@/components/ReactFinancialChart"),
  {
    ssr: false,
  }
);

function FinancialChart() {
  return <ReactFinancialChart />;
}
export default FinancialChart;
