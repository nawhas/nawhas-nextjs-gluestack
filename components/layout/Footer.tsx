import { Box } from "@/components/ui/box";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <Box className="w-full bg-[#18181b] border-t border-neutral-800 px-4 py-4 flex items-center justify-between relative mt-8">
      <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
        About
      </Link>
      <Box className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <Image src="/logo.svg" alt="Nawhas Logo" width={32} height={32} />
      </Box>
      <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
        Feedback
      </Link>
    </Box>
  );
} 