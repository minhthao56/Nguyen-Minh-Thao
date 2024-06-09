import Nav from "@/components/nav";
import { SymbolOverview } from "react-ts-tradingview-widgets";

export default function Overview() {
  return (
    <>
      <div className="mb-4">
        <Nav />
      </div>
      <SymbolOverview
        colorTheme="dark"
        chartType="area"
        downColor="#800080"
        borderDownColor="#800080"
        wickDownColor="#800080"
        dateFormat={"dd MMM 'yy"}
        width="100%"
        height={600}
        // locale="vi_VN"
        // symbols={[["HOSE:VIC"]]}
      />
    </>
  );
}
