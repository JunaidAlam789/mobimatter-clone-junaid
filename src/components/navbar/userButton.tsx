"use client";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export default function UserButton({
  isLargeScreen,
}: {
  isLargeScreen: boolean;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const userName = "John Doe";
  const handleButtonClick = () => {
    setIsClicked(true);
    // Additional logic can be added here if needed
  };

  function getInitials(fullName: string) {
    const names = fullName.split(" ");
    const initials = names.map((name) => name[0].toUpperCase());
    return initials.join("");
  }

  return (
    <div>
      {isClicked ? (
        <div className="flex items-center gap-2">
          <Link href={"/profile"}>
            <Avatar>
              <AvatarImage src="/user.jpg" alt="user" />
              <AvatarFallback className="bg-white border border-[#38BDEF] text-[#38BDEF]">
                {getInitials(userName)}
              </AvatarFallback>
            </Avatar>
          </Link>
          {/* Reward Balance */}
          <Link href="/profile/wallet">
            <p className="text-[9px]">Reward Balance</p>
            <p className="text-[15px] mt-0.5 font-[450]">$0.00</p>
          </Link>
        </div>
      ) : (
        <>
          {isLargeScreen ? (
            // <Link href="/signup">
            <Button
              className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
              onClick={handleButtonClick}
            >
              Join Now
            </Button>
          ) : (
            // </Link></div>)}
            <Button
              className="bg-[#38BDEF] hover:text-[#38BDEF] hover:bg-white border border-[#38BDEF]"
              onClick={handleButtonClick}
            >
              <LogIn />
            </Button>
            // </Link>
          )}
        </>
      )}
    </div>
  );
}
