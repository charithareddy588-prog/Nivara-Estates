import {
  Home,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-custom py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm">
                <Home size={21} />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Nivara<span className="text-brand-600">.</span>
                </h2>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Estates
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
              Helping you discover beautiful homes, premium properties
              and better places to live with confidence.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <FaYoutube size={17} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/properties"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                All Properties
              </Link>

              <Link
                to="/agents"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Our Agents
              </Link>

              <Link
                to="/about"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Property Types
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/properties?type=villa"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Luxury Villas
              </Link>

              <Link
                to="/properties?type=apartment"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Modern Apartments
              </Link>

              <Link
                to="/properties?type=house"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Family Homes
              </Link>

              <Link
                to="/properties?type=premium"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Premium Estates
              </Link>

              <Link
                to="/properties?type=rent"
                className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              >
                Rental Properties
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-500 dark:text-slate-400">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-600"
                />

                <span>
                  5th Floor, Nivara Towers,
                  <br />
                  Hyderabad, Telangana
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-brand-600"
                />

                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-brand-600"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-brand-600"
                />

                <a
                  href="mailto:hello@nivaraestates.com"
                  className="break-all transition-colors hover:text-brand-600"
                >
                  hello@nivaraestates.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">

          <p>
            © 2026 Nivara Estates. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="transition-colors hover:text-brand-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-brand-600"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;