import Nav from "@/components/nav";
import { useTheme } from "@/components/theme-provider";
import { AdvancedRealTimeChart, ColorTheme } from "react-ts-tradingview-widgets";

export default function Chart() {
  const { theme } = useTheme()
  return (
    <>
      <div className="mb-4">
        <Nav />
      </div>
        <AdvancedRealTimeChart theme={theme as ColorTheme} width="100%"></AdvancedRealTimeChart>
    </>
  );
}
