import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food - Delicious Community Recipes",
  description:
    "Discover and share delicious meals with NextLevel Food, a community for food lovers offering recipes, cooking tips, and culinary inspiration.",
  keywords:
    "recipes, cooking, food community, culinary tips, delicious meals, food blog, recipe sharing",
  author: "NextLevel Food Team",
  openGraph: {
    title: "NextLevel Food - Delicious Community Recipes",
    description:
      "Discover and share delicious meals with NextLevel Food, a community for food lovers offering recipes, cooking tips, and culinary inspiration.",
    url: "https://deepak-nextlevel-food.netlify.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
