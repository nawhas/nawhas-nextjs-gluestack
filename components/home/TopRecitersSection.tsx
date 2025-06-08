import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const reciters = [
  { name: "Tejani Brothers", albums: 18, color: "dark:bg-[#6d4c2b]" },
  { name: "Nadeem Sarwar", albums: 38, color: "dark:bg-[#5b4a7d]" },
  { name: "Mir Hasan Mir", albums: 20, color: "dark:bg-[#4a5b3d]" },
  { name: "Irfan Haider", albums: 22, color: "dark:bg-[#6d4c2b]" },
  { name: "Farhan Ali Waris", albums: 23, color: "dark:bg-[#6d4c2b]" },
  { name: "Hassan Sadiq", albums: 15, color: "dark:bg-[#5b2b2b]" },
];

export default function TopRecitersSection() {
  return (
    <Box className="w-full max-w-6xl mx-auto mt-12 px-4">
      <Box className="flex flex-row items-center justify-between mb-4">
        <Text className="text-xl font-semibold text-background-900">Top Reciters</Text>
        <Text className="text-sm text-amber-400 font-semibold cursor-pointer">VIEW ALL</Text>
      </Box>
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reciters.map((reciter, idx) => (
          <Box key={idx} className={`rounded-lg bg-background-50 ${reciter.color} p-4 flex flex-row items-center gap-3`}>
            <Box className="w-10 h-10 rounded-full bg-background-200 flex items-center justify-center">
              {/* Placeholder avatar */}
              <span className="text-typography-900 text-lg font-bold">{reciter.name[0]}</span>
            </Box>
            <Box>
              <Text className="text-typography-900 font-medium">{reciter.name}</Text>
              <Text className="text-xs text-typography-700">{reciter.albums} albums</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 