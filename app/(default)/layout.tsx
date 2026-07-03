import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import "aos/dist/aos.css";
import Animate from "@/components/Animate";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Animate />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
