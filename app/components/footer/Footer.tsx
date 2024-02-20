import Link from "next/link";
import {
    AiFillInstagram,
    AiFillTwitterCircle,
    AiFillYoutube,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">shop categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">Shipping policy</Link>
            <Link href="#">Returns & exchange</Link>

            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:md-0">
            <h3 className="text-base font-bold mb-2">About us</h3>
            <p className="mb-2">
              Enhance your electronic devices with a variety of accessories for
              a seamless experience.Elevate your electronic devices with our
              range of accessories. From protective cases to advanced
              peripherals, personalize and optimize your gadgets for a seamless
              and enhanced user experience.
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow us</h3>
            <div className="flex gap-2">
              <Link href="#" style={{ color: "#1877f2" }}>
                <MdFacebook size={24} />
              </Link>
              <Link href="#" style={{ color: "#1da1f2" }}>
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#" style={{ color: "#c4302b" }}>
                <AiFillYoutube size={24} />
              </Link>
              <Link href="#" style={{ color: "#e1306c" }}>
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
