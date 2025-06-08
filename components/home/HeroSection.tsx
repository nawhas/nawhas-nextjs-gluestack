import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <Box className="relative flex flex-col items-center justify-center min-h-[340px] md:min-h-[420px] w-full bg-background-0 pb-12">
      <Text className="text-4xl md:text-5xl font-light text-background-900 text-center mt-12 mb-8 max-w-3xl">
        Explore the most advanced library of nawhas online.
      </Text>
      <Box className="w-full flex justify-center items-center">
        <Box className="w-full max-w-xl flex justify-center">
          <Input className="bg-background-50 border border-outline-200 rounded focus:outline-none focus:border-red-700 w-full">
            <InputField
              className="text-typography-900 px-4 py-3 text-lg"
              placeholder="Search Nawhas.com"
            />
          </Input>
        </Box>
      </Box>
    </Box>
  );
} 