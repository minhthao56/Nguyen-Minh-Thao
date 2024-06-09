import Nav from "@/components/nav";
import { useTheme } from "@/components/theme-provider";
import { ColorTheme, MarketData, TickerTape } from "react-ts-tradingview-widgets";

export default function Market() {
  const { theme } = useTheme()

  return (
    <>
      <div className="mb-4">
        <Nav />
      </div>
      <TickerTape colorTheme={theme as ColorTheme} ></TickerTape>
      <MarketData colorTheme={theme as ColorTheme} width="100%" height={400}></MarketData>
    </>
  );
}
