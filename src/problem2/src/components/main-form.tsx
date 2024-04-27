/* eslint-disable @typescript-eslint/no-explicit-any */
// import { lazy } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputHF from "./input-hf";
import { useMutation } from "@tanstack/react-query";
import { ReloadIcon } from "@radix-ui/react-icons"
import { exchangeToken } from "@/apis/prices";
import SelectHF from "./select-hf";
import { Label } from "./ui/label";
import usePrices from "@/hooks/usePrices";
import useTokens from "@/hooks/useTokens";

const formSchema = z.object({
  amountFrom: z.string().min(1, "Required").max(50),
  amountTo: z.string().min(0).max(50),
  tokenForm: z.string().min(1, "Required").max(50),
  tokenTo: z.string().min(1, "Required").max(50),
});
export type FormValues = z.infer<typeof formSchema>;

export default function MainForm() {
  const { data = [], isLoading, error } = usePrices();

  const { mutate, error: exchangeTokenError, isPending } = useMutation({
    mutationKey: ["exchangeToken"],
    mutationFn: exchangeToken,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amountFrom: "1",
      amountTo: "",
      tokenForm: "bNEO",
      tokenTo: "USD",
    },
  });

  const { imageFrom, imageTo } = useTokens(form.control);

  function onSubmit(values: FormValues) {
    const priceFrom = data.find(
      (item: any) => item.currency === values.tokenForm
    )?.price;
    const priceTo = data.find(
      (item: any) => item.currency === values.tokenTo
    )?.price;
    mutate(
      {
        amountFrom: parseFloat(values.amountFrom),
        priceFrom: priceFrom,
        priceTo: priceTo,
      },
      {
        onSuccess(data) {
          form.setValue("amountTo", data.toString());
        },
      }
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (exchangeTokenError) {
    return <div>Error: {exchangeTokenError.message}</div>;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <div className="flex space-x-4">
          <div>
            <div className="flex items-center">
              <img src={imageFrom} alt="TokenFrom" className="mr-2" />
              <Label>From</Label>
            </div>
            <SelectHF<FormValues>
              name="tokenForm"
              control={form.control}
              options={data?.map((item: any) => ({
                value: item.currency,
                label: item.currency,
              }))}
              placeholder="Select Token From"
              isLoading={isLoading}
            />
            <InputHF<FormValues>
              name="amountFrom"
              control={form.control}
              placeholder="Amount to send"
            />
          </div>
          <div>
            <div className="flex items-center">
              <img src={imageTo} alt = "TokenTo" className="mr-2" />
              <Label>To</Label>
            </div>
            <SelectHF<FormValues>
              name="tokenTo"
              control={form.control}
              options={data?.map((item: any) => ({
                value: item.currency,
                label: item.currency,
              }))}
              placeholder="Select Token To"
              isLoading={isLoading}
            />
            <InputHF<FormValues>
              name="amountTo"
              control={form.control}
              placeholder="Amount to receive"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button type="submit" disabled={isPending}>
            {isPending ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
            Exchange
            </Button>
        </div>
      </form>
    </Form>
  );
}
