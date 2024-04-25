import { FormValues } from "@/components/main-form";
import { useEffect, useState } from "react";
import { Control, useWatch } from "react-hook-form";

export default function useTokens(control: Control<FormValues>) {
  const [tokenForm, tokenTo] = useWatch<FormValues>({
    control,
    name: ["tokenForm", "tokenTo"],
  });
  const [imageTo, setImageTo] = useState("");
  const [imageFrom, setImageFrom] = useState("");

  useEffect(() => {
    if (tokenTo) {
      import(/* @vite-ignore */ `../assets/tokens/${tokenTo}.svg`)
        .then((imageModule) => setImageTo(imageModule.default))
        .catch((error) => console.error(`Error loading image: ${error}`));
    }
  }, [tokenTo]);

  useEffect(() => {
    if (tokenForm) {
      import(/* @vite-ignore */ `../assets/tokens/${tokenForm}.svg`)
        .then((imageModule) => setImageFrom(imageModule.default))
        .catch((error) => console.error(`Error loading image: ${error}`));
    }
  }, [tokenForm]);

  return {
    imageTo,
    imageFrom,
  };
}
