import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center w-full mt-14 mb-32 space-x-32">
      <Image
        src={"/auth-screen-image.png"}
        width={805}
        height={781}
        alt="auth screen image"
      />
      <div>
        <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
        <p className="font-normal mt-6">Enter your details below</p>
        <form className="mt-12 flex flex-col space-y-10">
          <Input variant={"material"} placeholder="Email or Phone Number" />
          <Input variant={"material"} placeholder="Password" />

          <div className="flex space-x-20 items-center">
            <Button size={"none"} type="submit" className="py-4 px-12">
              Login
            </Button>
            <Link
              href="/forgot-password"
              className="text-secondary2 space-x-20"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
