import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LoadingSpinner } from "./loading";


export interface Options {
  value: string;
  label: string;
}

export interface SelectHFProps<T extends FieldValues> {
  control?: Control<T>;
  name: Path<T>;
  label?: string;
  options: Options[];
  placeholder?: string;
  isLoading?: boolean;
}
export default function SelectHF<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder,
  isLoading
  
}: SelectHFProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                {
                    isLoading ? <LoadingSpinner /> :  <SelectValue placeholder={placeholder} />
                }
              </SelectTrigger>
            </FormControl>
            <SelectContent>
                {options.map((option, i) => (
                    <SelectItem key={i} value={option.value}>
                    {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
