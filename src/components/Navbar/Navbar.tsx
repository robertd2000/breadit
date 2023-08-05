import React from "react";
import Link from "next/link";
import { Icons } from "../Icons/Icons";
import { buttonVariants } from "../ui/Button";
import UserAccountNav from "./UserAccountNav/UserAccountNav";
import { getAuthSession } from "@/lib/auth";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>

        {/* Search */}
        <SearchBar />

        {/* user actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <div className="flex">
            <Link
              href={"sign-up"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Sign Up
            </Link>
            <Link href={"sign-in"} className={buttonVariants()}>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
