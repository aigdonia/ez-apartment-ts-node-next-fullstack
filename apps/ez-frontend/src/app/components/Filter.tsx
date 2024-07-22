import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { useState } from "react"

export interface FilterComponentProps {
  dits: Record<string, string>[],
  label?: string,
  placeholder?: string,
  onChange?: (value: string) => void
  icon?: React.ReactNode
}
export default function Filter({ dits, onChange, label, placeholder, icon }: FilterComponentProps) {
  const [selected, setSelected] = useState<string>('')
  return (
    <Select defaultValue={selected} onValueChange={(value: any) => {setSelected(value); onChange?.(value)}}>
      <SelectTrigger className="w-[180px] flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0">
        <SelectValue placeholder={placeholder} >
          {icon}
          {label && <small>{label}</small> }
          <span>
            {
              dits.find((el) => el.value === selected)
                ?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {dits.map(({ label, value }) => (
            <SelectItem key={value} value={value}>{label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}