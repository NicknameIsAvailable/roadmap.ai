import { AnimatedThemeToggler } from "@workspace/ui/components/magicui/animated-theme-toggler";
import { Dock, DockIcon } from "@workspace/ui/components/magicui/dock";
import { HomeIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="h-16 border-b flex justify-center items-center w-screen px-4 z-10 fixed bottom-0 left-0 right-0">
      <div className="flex gap-4">
        <Dock direction="middle">
          <DockIcon>
            <MenuIcon />
          </DockIcon>
          <DockIcon>
            <Link href="/">
              <HomeIcon />
            </Link>
          </DockIcon>
          <DockIcon>
            <AnimatedThemeToggler />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};
