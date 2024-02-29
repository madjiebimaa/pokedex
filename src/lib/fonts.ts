import { Inter, Noto_Sans_Mono } from "next/font/google";

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const inter = Inter({ subsets: ["latin"] });
