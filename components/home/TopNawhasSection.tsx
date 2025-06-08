import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const nawhas = [
  { title: "Shia", artist: "Tejani Brothers", year: "2019" },
  { title: "Our Blood Will Write Hussain (AS)", artist: "Tejani Brothers", year: "2013" },
  { title: "Babul Hawaij", artist: "Tejani Brothers", year: "2017" },
  { title: "Abbas Tera Haq Hai Zamana", artist: "Mir Hasan Mir", year: "2017" },
];

export default function TopNawhasSection() {
  return (
    <Box className="w-full max-w-6xl mx-auto mt-12 px-4">
      <Text className="text-xl font-semibold text-background-900 mb-4">Top Nawhas</Text>
      <Box className="rounded-lg overflow-hidden">
        {nawhas.map((item, idx) => (
          <Box key={idx} className={`flex flex-row items-center px-4 py-3 bg-background-50 border-b border-outline-200 last:border-b-0`}>
            <Text className="text-lg font-bold text-typography-900 w-8 text-center">{idx + 1}</Text>
            <Box className="flex-1 ml-4">
              <Text className="text-typography-900 font-medium">{item.title}</Text>
              <Text className="text-xs text-typography-700">{item.artist} • {item.year}</Text>
            </Box>
            <Box className="flex flex-row gap-3 ml-4">
              {/* Placeholder icons */}
              <span className="text-amber-400">[icon]</span>
              <span className="text-amber-400">[icon]</span>
              <span className="text-amber-400">[icon]</span>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 