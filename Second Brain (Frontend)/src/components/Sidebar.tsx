import { Logo } from "../icons/Logo";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { WebsiteIcon } from "../icons/WebsiteIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-4 items-center">
        <div className="pr-2 text-purple-600">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-4">
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        <SidebarItem text="Website" icon={<WebsiteIcon />} />
      </div>
    </div>
  );
}
