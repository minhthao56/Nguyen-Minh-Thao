import { PropsWithChildren } from "react";

export interface H4Props extends PropsWithChildren {}

export function H4(props: H4Props) {
    return (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {props.children}
      </h4>
    )
  }
  