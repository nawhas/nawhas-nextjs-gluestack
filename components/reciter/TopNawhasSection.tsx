import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

interface Nawha {
  title: string;
  year: string;
}

interface TopNawhasSectionProps {
  nawhas: Nawha[];
}

export function TopNawhasSection({ nawhas }: TopNawhasSectionProps) {
  return (
    <Box>
      <Text className="text-xl font-semibold text-background-900 mb-4">Top Nawhas</Text>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {nawhas.map((nawha, idx) => (
          <Box key={idx} className="bg-background-50 rounded-lg p-4 flex flex-col shadow">
            <Text className="text-lg font-medium text-typography-900 mb-1">{nawha.title}</Text>
            <Text className="text-xs text-typography-700">{nawha.year}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
} 