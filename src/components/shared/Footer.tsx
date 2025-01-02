import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t select-none">
      <div className="wrapper flex-between flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="w-fit focus:outline-none flex flex-nowrap gap-2"
        >
          <Image
            src="/assets/images/logo.svg"
            alt="eventrix Logo"
            width={1000}
            height={120}
            className="w-6 h-auto"
          />
          <Image
            src="/assets/images/eventrix.svg"
            alt="eventrix Logo"
            width={518}
            height={120}
            className="w-24 h-auto"
          />
        </Link>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/aboutus" className="text-sm text-gray-500 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contactus" className="text-sm text-gray-500 hover:text-blue-600">
            Contact Us
          </Link>
          <Link
            href="/refundandcancellation"
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            Refund & Cancellation
          </Link>
        </div>
        <p className="text-sm text-gray-500 tracking-wide mt-3 sm:mt-0">
          2024 eventrix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
