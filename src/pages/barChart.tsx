import dynamic from "next/dynamic";
const BarChartComp = dynamic(() => import("../components/BarChartComp"), {
  ssr: false,
});

function BarChart() {
  return <BarChartComp />;
}
export default BarChart;
