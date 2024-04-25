import { switcheoClient } from "./switcheoClient";

export const getPrices = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await switcheoClient.get<any>("/prices.json");
}


export interface ExchangeTokenRequest {
    priceFrom: number;
    priceTo: number;
    amountFrom: number;
}


export const exchangeToken = async ({ amountFrom, priceFrom, priceTo }: ExchangeTokenRequest) => {
    const rate = priceTo / priceFrom;
    const amountTo = amountFrom * rate;
    return amountTo;
}