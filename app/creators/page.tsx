import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatorProfileView from "@/components/CreatorProfileView";

export const metadata: Metadata = {
  title: "Creators — ByteSpace",
};

const purepearl = {
  name: "PurePearl Studio",
  role: "Passionate UI/UX, Web designer",
  avatar: "/assets/avatars/avatar-4.png",
  products: "3",
  followers: "12",
};

export default function CreatorsPage() {
  return (
    <>
      <Header />
      <CreatorProfileView creator={purepearl} />
      <Footer />
    </>
  );
}
