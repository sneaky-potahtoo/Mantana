import { YoutubeIcon } from "../icons/YoutubeIcon";
import { WebsiteIcon } from "../icons/WebsiteIcon";
import { SidebarItem } from "./SidebarItem";
import mantanaLogo from "../assets/mantana.svg";

export type ContentFilter = "all" | "youtube" | "website";

interface SidebarProps {
  selected: ContentFilter;
  onSelect: (filter: ContentFilter) => void;
}

export function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <div className="h-screen bg-white border-r border-gray-100 w-64 fixed left-0 top-0 flex flex-col px-4 py-6">
      <div className="flex items-center gap-2.5 px-2 mb-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={mantanaLogo} alt="Mantana" className="w-full h-full" />
        </div>
        <span className="text-2xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500 tracking-tight">
          Mantana
        </span>
      </div>

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 mb-2">
        Content
      </p>

      <nav className="flex flex-col gap-1" aria-label="Content filters">
        <SidebarItem text="All" active={selected === "all"} onClick={() => onSelect("all")} />
        <SidebarItem text="YouTube" icon={<YoutubeIcon />} active={selected === "youtube"} onClick={() => onSelect("youtube")} />
        <SidebarItem text="Websites" icon={<WebsiteIcon />} active={selected === "website"} onClick={() => onSelect("website")} />
      </nav>
    </div>
  );
}
