import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-fuchsia-800 to-fuchsia-950 max-w-xl mx-auto mt-1 rounded-lg p-6">
      <div>
        <h1 className="font-bold text-white text-2xl hover:text-black transition-colors ease-in-out cursor-pointer">
          QuickCook.
        </h1>
      </div>
      <div className="flex gap-2">
        <Link href={"/"}>
          <Button gradientDuoTone="purpleToPink">Home</Button>
        </Link>
        <Link href={"/recipe-list"}>
          <Button gradientDuoTone="purpleToPink">Recipes</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
