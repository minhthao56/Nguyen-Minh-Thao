import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input, InputProps } from "./ui/input";

export interface InputHFProps<T extends FieldValues> extends InputProps{
  control?: Control<T>;
  name: Path<T>;
  lable?: string;
}

export default function InputHF<T extends FieldValues>({ control, name, lable, ...rest }: InputHFProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{lable}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
