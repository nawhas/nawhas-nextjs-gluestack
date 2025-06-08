import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { AlbumCard } from "@/components/album/AlbumCard";

interface Track {
  title: string;
}

interface Album {
  coverUrl: string;
  title: string;
  year: string;
  trackCount: number;
  tracks?: Track[];
}

interface AlbumsSectionProps {
  albums: Album[];
}

export function AlbumsSection({ albums }: AlbumsSectionProps) {
  return (
    <Box>
      <Text className="text-xl font-semibold text-background-900 mb-4">Albums</Text>
      <Box className="flex flex-col gap-8">
        {albums.map((album, idx) => (
          <AlbumCard key={idx} {...album} />
        ))}
      </Box>
    </Box>
  );
} 