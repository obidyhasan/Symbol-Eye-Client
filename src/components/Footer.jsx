import { MdCall, MdOutlineMail } from "react-icons/md";
import logo from "./../assets/fabIcon_2.svg";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-black py-10 text-white">
      <div className="max-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-4">
          <img src={logo} className="w-7" alt="" />
          <h1 className="font-bold text-xl ">Symbol Eye</h1>
          <p className="text-sm">
            Symbol Eye offers trendy, high-quality fashion that reflects your
            unique style, making every outfit a statement.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Useful Links</h2>
          <div className="mt-5 flex gap-3 flex-col">
            <Link
              to={"service"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer transform duration-300 hover:translate-x-1.5`}
            >
              Service
            </Link>
            <Link
              to={"category"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer transform duration-300 hover:translate-x-1.5`}
            >
              Category
            </Link>
            <Link
              to={"gallery"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer transform duration-300 hover:translate-x-1.5`}
            >
              Gallery
            </Link>
            <Link
              to={"faq"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer transform duration-300 hover:translate-x-1.5`}
            >
              Faq
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Connect With Us</h2>
          <div className="mt-5 flex gap-3 flex-col">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>WhatsApp</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Contact Us</h2>
          <div className="mt-5 flex gap-3 flex-col">
            <p className="flex gap-2 items-center">
              <MdOutlineMail className="text-red-500 text-xl" />
              <span>symboleyebd@gmail.com</span>
            </p>
            <p className="flex gap-2 items-center">
              <MdCall className="text-red-500 text-xl" />
              <span>+880 1900 00 00 00</span>
            </p>
            <p className="flex gap-2 items-center">
              <GrLocation className="text-red-500 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-10 -mb-4">
        &#169; Symbol Eye 2025. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
