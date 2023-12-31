import "./styles/globals.css";
import "./styles/header.css";
import "./styles/footer.css";
import { Lato } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <nav className="topNav">
          <div className="mainNav container">
            <div className="navItem logoContainer">
              <Image className="avatarImg" src="/images/avatar-img.png" height="100" width="100" alt="avatar image"></Image>
            </div>
            <div className="navItem navLinkContainer">
              <Link className="navLink" href="/">
                Home
              </Link>
              <Link className="navLink" href="/showcase">
                Showcase
              </Link>
              <Link className="navLink" href="/decks">
                Decks
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
        <footer>
          <div className="footer">
            <div className="row socialContainer">
              <Link className="footerLink" href="/">
                <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
              </Link>
              <Link className="footerLink" href="/">
                <FontAwesomeIcon className="socialIcon" icon={faTiktok} />
              </Link>
              <Link className="footerLink" href="/">
                <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
              </Link>
            </div>
            <div className="row">
              <ul>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Our Services</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="row">MEWPACKOPENINGS © 2023 MEW - All rights reserved || Designed By: Mike</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
