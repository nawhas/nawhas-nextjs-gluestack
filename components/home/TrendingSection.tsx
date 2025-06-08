import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const trending = [
  { title: "Shia", artist: "Tejani Brothers", year: "2019" },
  { title: "Our Blood Will Write Hussain (AS)", artist: "Tejani Brothers", year: "2013" },
  { title: "Babul Hawaij", artist: "Tejani Brothers", year: "2017" },
  { title: "Abbas Tera Haq Hai Zamana", artist: "Mir Hasan Mir", year: "2017" },
  { title: "Janum Ya Hussain", artist: "Nadeem Sarwar", year: "2019" },
  { title: "Maaf Karna", artist: "Tejani Brothers", year: "2017" },
];

export default function TrendingSection() {
  return (
    <Box className="w-full max-w-6xl mx-auto mt-10 px-4">
      <Text className="text-xl font-semibold text-background-900 mb-4">Trending This Month</Text>
      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trending.map((item, idx) => (
          <Box key={idx} className="rounded-lg bg-background-50 dark:bg-gradient-to-br dark:from-[#6d4c2b] dark:to-[#3a2a1a] p-4 flex flex-col justify-between shadow-md">
            <Text className="text-lg font-semibold text-typography-900 mb-1">{item.title}</Text>
            <Text className="text-sm text-typography-700">{item.artist}</Text>
            <Text className="text-xs text-typography-400">{item.year}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 