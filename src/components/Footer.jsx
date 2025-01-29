 import { FaFacebook } from "react-icons/fa"
 import { FaGoogle } from "react-icons/fa"
import { FaApple } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";

export const Footer=()=> {
  return (
    <>
      <footer className="bg-[#011B5B] text-white px-4 py-8">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Description and Social Icons */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>

            
            <div className="flex gap-4">
             
              <FaFacebook href="#" className="hover:text-orange-500"></FaFacebook>
             
              <FaGoogle href="#" className="hover:text-orange-500"></FaGoogle>
              
              <FaApple href="#" className="hover:text-orange-500"></FaApple>
              
              <FaInstagram href="#" className="hover:text-orange-500"></FaInstagram>
            </div>
          </div>

          {/* Menu Sections */}
          {Object.values(menuItems).map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-[#FFA229] font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#AAB5CD] hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <button ton  className="bg-orange-500 rounded-full p-3 hover:bg-orange-600">
            ↑
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}


const menuItems = {
    business: {
      title: "START A BUSINESS",
      links: ["Features", "Solutions", "Integrations", "Enterprise"],
    },
    government: {
      title: "GOVERNMENT ",
      links: ["Partners", "Community", "Developers", "App","Blog"],
    },
    compliance: {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo","Our Competition"],
    },
    bis: {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership","Media Kit"],
    },
  }