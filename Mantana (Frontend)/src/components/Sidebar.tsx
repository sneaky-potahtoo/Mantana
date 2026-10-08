import { YoutubeIcon } from "../icons/YoutubeIcon";
import { WebsiteIcon } from "../icons/WebsiteIcon";
import { SidebarItem } from "./SidebarItem";
import mantanaLogo from "../assets/mantana.svg";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-gray-100 w-64 fixed left-0 top-0 flex flex-col px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-2 mb-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={mantanaLogo} alt="Mantana" className="w-full h-full" />
        </div>
        <span className="text-2xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500 tracking-tight">
          Mantana
        </span>
      </div>

      {/* Nav label */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 mb-2">
        Content
      </p>

      {/* Nav items */}
      <nav className="flex flex-col gap-1">
        <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
        <SidebarItem text="Websites" icon={<WebsiteIcon />} />
      </nav>
    </div>
  );
}
