import { ChevronRight, LogIn, Menu } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navbarData } from ".";
import { dropdownMenuData } from ".";

export default function MobileNavbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 px-2 border-b-2 border-[#F2F6F8] ">
      {/* SideMenu */}
      <Sheet>
        <SheetTrigger>
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full h-screen overflow-y-auto pt-10 z-[100]"
        >
          {navbarData.map((item, index) => (
            <div key={item.text} className="mb-4">
              {index === 0 ? (
                <div>
                  <Sheet>
                    <SheetTrigger className="flex items-center">
                      {item.text}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </SheetTrigger>
                    <SheetContent
                      side="left"
                      className="w-full pt-10 h-screen overflow-y-auto z-[100]"
                    >
                      {dropdownMenuData.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start gap-x-3 w-full rounded-lg hover:bg-slate-50 duration-200 ease-in-out transition-colors mb-5 p-2"
                        >
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={20}
                            height={20}
                            className="rounded-lg mt-1"
                          />
                          <div className="space-y-1">
                            <h2>{item.label}</h2>
                            <h4 className="text-slate-400">
                              {item.description}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </SheetContent>
                  </Sheet>
                </div>
              ) : (
                <Link className="hover:text-slate-500" href={item.href}>
                  {item.text}
                </Link>
              )}
            </div>
          ))}
        </SheetContent>
      </Sheet>
      {/* Logo */}
      <Logo />
      {/* Login Button */}
      <Link href="/signup">
        <LogIn />
      </Link>
    </div>
  );
}
