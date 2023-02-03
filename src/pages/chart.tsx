import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("@/components/aamChat"), {
  ssr: false,
});

export default function Chart() {
  return (
    <>
      <ChartComponent />
    </>
  );
}
