import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import Image from "next/image";

interface Track {
  title: string;
}

interface AlbumCardProps {
  coverUrl: string;
  title: string;
  year: string;
  trackCount: number;
  tracks?: Track[];
}

export function AlbumCard({ coverUrl, title, year, trackCount, tracks }: AlbumCardProps) {
  return (
    <Box className="w-full rounded-xl shadow-lg overflow-hidden bg-[#18181b]">
      {/* Header */}
      <Box className="flex flex-row items-center bg-[#7b2c3a] px-6 py-4">
        <Image
          src={coverUrl}
          alt={title}
          width={64}
          height={64}
          className="object-cover rounded-md border-2 border-white"
        />
        <Box className="ml-4 flex flex-col justify-center">
          <Text className="text-xl font-bold text-white leading-tight">{title}</Text>
          <Text className="text-sm text-white/90 mt-1">{year} • {trackCount} tracks</Text>
        </Box>
      </Box>
      {/* Track List */}
      <Box className="px-6 pb-4 pt-2">
        {tracks && tracks.length > 0 && (
          <Box>
            {tracks.map((track, idx) => (
              <Box
                key={idx}
                className="flex flex-row items-center border-b border-background-700 last:border-b-0 py-2"
              >
                <Text className="w-6 text-white/80 text-sm text-right mr-2">{idx + 1}</Text>
                <Text className="flex-1 text-white text-base truncate">{track.title}</Text>
                <Box className="flex flex-row gap-3 ml-4 text-white/80 text-lg">
                  {/* Placeholder icons: play, lyrics, favorite */}
                  <span title="Play">▶️</span>
                  <span title="Lyrics">📝</span>
                  <span title="Favorite">🤍</span>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
} 