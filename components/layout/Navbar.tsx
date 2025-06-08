import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { HStack } from "@/components/ui/hstack";
import Image from "next/image";
import Link from "next/link";
import { ProfileMenu } from "./ProfileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse", href: "/browse" },
  { label: "Library", href: "/library" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <Box className="w-full bg-background-0 px-4 py-2 border-b border-outline-200 z-50">
      <Box className="flex flex-row items-center justify-between w-full">
        {/* Left: Logo + Site Name */}
        <HStack className="items-center space-x-3 min-w-[180px]">
          <Image src="/logo.svg" alt="Nawhas Logo" width={36} height={36} />
          <Text className="text-2xl font-bold text-background-900 tracking-tight">Nawhas.com</Text>
        </HStack>
        {/* Center: Navigation Links */}
        <HStack className="space-x-2 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref legacyBehavior>
              <a className="px-3 py-1 rounded hover:bg-background-50 transition-colors">
                <Text className="text-background-900 text-base font-medium">{link.label}</Text>
              </a>
            </Link>
          ))}
        </HStack>
        {/* Right: Search + User Icon */}
        <HStack className="items-center space-x-4 min-w-[280px] justify-end">
          <Input className="bg-background-50 border border-outline-200 rounded w-64 focus:outline-none focus:border-red-700">
            <InputField
              className="text-typography-900 px-3 py-1"
              placeholder="Search for nawhas, reciters, or lyrics..."
            />
          </Input>
          <ProfileMenu />
        </HStack>
      </Box>
    </Box>
  );
} 