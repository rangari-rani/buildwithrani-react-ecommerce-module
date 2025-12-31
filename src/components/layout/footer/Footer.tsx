import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FooterColumn from "./FooterColumn";
import { FOOTER_LINKS } from "./footerLinks";

const Footer: React.FC = () => {
  return (
    <footer className="relative max-w-350 mx-auto px-6 rounded-xl py-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Wellness Cart🌿</h3>
          <p className="text-gray-700">A minimal ecommerce template</p>
        </div>

        {/* Footer Columns */}
        <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
        <FooterColumn title="Self-Care" links={FOOTER_LINKS.selfCare} />
        <FooterColumn title="Active Life" links={FOOTER_LINKS.activeLife} />
        <FooterColumn
          title="Home Essentials"
          links={FOOTER_LINKS.homeEssentials}
        />
      </div>

      {/* Bottom Row */}
      <div
        className="
          container mx-auto 
          flex flex-row flex-nowrap 
          justify-center items-center 
          gap-2 px-2 py-3 
          text-center overflow-x-auto
        "
      >
        <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#10B981]">Rani Rangari</span>
        </p>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-[#10B981] transition-colors"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://linkedin.com/in/rani-rangari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-[#10B981] transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
        </div>

        <a
          href="https://buildwithrani.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-teal-500 hover:text-[#10B981] transition-colors whitespace-nowrap"
        >
          buildwithrani.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
