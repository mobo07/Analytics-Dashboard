import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import SidebarContextProvider from "./context/SideBarContext";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Analytics Dashboard",
  description: "Built By Mike Mobo",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pjs.className}>
        <ThemeProvider>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
