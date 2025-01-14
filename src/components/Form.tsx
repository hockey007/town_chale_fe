import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...props },
  ref
) {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log("Clearing form");
                form.current?.reset();
            },
        }
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        
        onSave(data);
    }

    return <form onSubmit={handleSubmit} {...props} ref={form} className="max-w-md mx-auto space-y-4">
        {children}
    </form>;
});

export default Form