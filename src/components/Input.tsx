import { ComponentPropsWithoutRef } from "react"

type InputProps = {
    id: string
} & ComponentPropsWithoutRef<'input'>

export default function Input({id, ...props}: InputProps) {
    return <div>
        <input {...props} name={id} className="border p-2 rounded-md w-full" />
    </div>
}