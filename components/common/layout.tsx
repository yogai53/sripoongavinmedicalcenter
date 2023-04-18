import { Montserrat } from "next/font/google";
import { Header1, Header2, Footer } from ".";
const inter = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }: any) {
  return (
    <div className={`${inter.className}`}>
      <header>
        <Header1 />
        <Header2 />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
