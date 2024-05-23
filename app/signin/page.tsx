import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
    return (
        <div>
            <h1>SignIn</h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm />
        </div>
    )
}