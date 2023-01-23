import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("@/components/aamChat"), {
  ssr: false,
});
const Baramchart = dynamic(() => import("../components/BarChart"), {
  ssr: false,
});

export default function Chart() {
  return (
    <>
      {/* <ChartComponent /> */}
      <Baramchart />
    </>
  );
}
