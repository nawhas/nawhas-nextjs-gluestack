import { Box } from "@/components/ui/box";
import { ReciterBanner } from "@/components/reciter/ReciterBanner";
import { TopNawhasSection } from "@/components/reciter/TopNawhasSection";
import { AlbumsSection } from "@/components/reciter/AlbumsSection";

const reciter = {
  name: "Tejani Brothers",
  image: "/placeholder-reciter.jpg", // Place a placeholder image in public/
  banner: "/placeholder-banner.jpg", // Place a placeholder image in public/
};

const topNawhas = [
  { title: "Shia", year: "2019" },
  { title: "Our Blood Will Write Hussain (AS)", year: "2013" },
  { title: "Babul Hawaij", year: "2017" },
  { title: "Maaf Karna", year: "2017" },
  { title: "Nana mera Asghar", year: "2018" },
  { title: "Shame Ghariban", year: "2019" },
];

const albums = [
  {
    coverUrl: "/placeholder-album.jpg",
    title: "Hussain Zindabad",
    year: "2022",
    trackCount: 8,
    tracks: [
      { title: "Ayam E Aza Alvida" },
      { title: "Bhai Abbas" },
      { title: "Farsh E Aza" },
      { title: "Hussain Dil Na Torna" },
      { title: "Hussain Is My Leader" },
      { title: "Hussain Zindabad" },
      { title: "Yad Kiya Hai Baba" },
      { title: "Ye Arz e Karbala Hai" },
    ],
  },
  // Add more albums as needed
];

export default function ReciterPage() {
  return (
    <Box className="w-full max-w-6xl mx-auto mt-8 px-4">
      <ReciterBanner banner={reciter.banner} image={reciter.image} name={reciter.name} />
      <Box className="mt-12">
        <TopNawhasSection nawhas={topNawhas} />
        <AlbumsSection albums={albums} />
      </Box>
    </Box>
  );
} 