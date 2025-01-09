import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center w-full mt-14 mb-32 space-x-32">
      <Image
        src={"/auth-screen-image.png"}
        width={805}
        height={781}
        alt="auth screen image"
      />
      <div className="w-1/4">
        <h1 className="text-3xl font-medium">Create an account</h1>
        <p className="font-normal mt-6">Enter your details below</p>
        <form className="mt-12 flex flex-col space-y-10">
          <Input variant={"material"} placeholder="Name" />
          <Input variant={"material"} placeholder="Email or Phone Number" />
          <Input variant={"material"} placeholder="Password" />

          <div className="flex flex-col space-y-4">
            <Button size={"none"} type="submit" className="py-4 px-32">
              Create Account
            </Button>
            <Button
              variant={"outline"}
              size={"none"}
              className="flex border-text1 py-4 px-24"
            >
              <Image
                src={"/icons/google-auth-icon.svg"}
                width={24}
                height={24}
                alt="google auth icon"
              />
              <span>Sign up with Google</span>
            </Button>
          </div>
        </form>
        <div className="flex mt-8 space-x-4">
          <span className="text-text1">Already have an account?</span>
          <Link href={"/login"} className="font-medium underline text-text1">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
