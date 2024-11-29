import { useRef } from "react";
import Form, { FormHandle } from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function UserFormPage() {
  const formRef = useRef<FormHandle>(null);
  function handleOnSave(data: unknown) {
    console.log(data);
    
    const extractedData = data as { first_name: string, last_name: string, email: string; password: string };
    const email = extractedData.email;
    const password = extractedData.password;

    formRef.current?.clear();
    console.log(`Email: ${email} & Password: ${password}`);
  }

  return (
    <div className="flex h-screen">
        <div className="flex justify-center lg:w-1/2 md:w-full bg-gradient-to-br from-purple-700 via-purple-900 to-black">
            <div className="w-full m-6 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-30">
                <h2 className="text-4xl text-white">Welcome to Town Chale!</h2>
                <h2 className="text-md text-slate-300">Whenever you're ready!</h2>
            </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
            <div className="px-4 w-full max-w-md flex flex-col space-y-6">
                <h2 className="text-4xl font-medium">Create an account</h2>
                <span className="text-sm">Already have an account? <a href="https://google.com" className="text-orange-500">Login</a></span>
                <Form onSave={handleOnSave} ref={formRef}>
                    <div className="flex space-x-2 w-full">
                        <Input id="first_name" placeholder="First Name" />
                        <Input id="last_name" placeholder="Last Name" />
                    </div>
                    <Input id="email" placeholder="Email" />
                    <Input id="password" placeholder="Password" />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="h-4 w-4" required />
                        <label htmlFor="terms" className="text-sm text-gray-400">
                            I agree to the <a href="#" className="text-purple-400 hover:underline">Terms & Conditions</a>
                        </label>
                    </div>
                    <Button type="submit" className="bg-orange-500 rounded-md px-4 py-2 w-full text-white">
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
    </div>
  );
}
