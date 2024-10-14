import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="relative  text-white py-20 overflow-hidden">
      {/* Blob effects */}
   
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex flex-col items-center group transition duration-300"
              >
                <div className="bg-[#ededed] bg-opacity-10 p-3 rounded-full mb-2 group-hover:bg-gray-700 transition duration-300">
                  <link.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition duration-300" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Makiat Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}