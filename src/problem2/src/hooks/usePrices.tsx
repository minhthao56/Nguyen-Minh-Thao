/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPrices } from "@/apis/prices";
import { useQuery } from "@tanstack/react-query";

export default function usePrices() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getPrices"],
    queryFn: getPrices,
    select(data) {
      const mapCurrency = new Map();
      const r: any[] = [];
      data.forEach((item: any) => {
        if (!mapCurrency.get(item.currency)) {
          mapCurrency.set(item.currency, true);
          r.push(item);
        }
      });
      return r;
    },
  });
  return { data, isLoading, error };
}
