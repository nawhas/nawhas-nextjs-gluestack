import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import Image from "next/image";

interface ReciterBannerProps {
  banner: string;
  image: string;
  name: string;
}

export function ReciterBanner({ banner, image, name }: ReciterBannerProps) {
  return (
    <Box className="relative h-48 w-full rounded-lg overflow-hidden mb-8">
      <Image src={banner} alt="Banner" fill className="object-cover" />
      <Box className="absolute left-6 bottom-[-40px] flex items-center">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-4 border-background-50 shadow-lg bg-background-50"
        />
        <Text className="ml-4 text-2xl font-bold text-background-900 drop-shadow-lg">{name}</Text>
      </Box>
    </Box>
  );
} 