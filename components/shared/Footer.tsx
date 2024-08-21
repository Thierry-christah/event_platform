import { SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <div className="flex gap-4 ml-[150px]">
            <div>
              <a href="/about" className="p-regular-14">About</a>
            </div>
            <div>
              <a href="/terms" className="p-regular-14">Terms</a>
            </div>
            <div>
              <a href="/privacy" className="p-regular-14">Privacy</a>
            </div>
          </div>
        </SignedIn>

        <p>&copy; 2024 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer