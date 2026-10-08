import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-500 py-2.5 px-4 cursor-pointer hover:bg-[#f0efe9] hover:text-gray-900 rounded-xl transition-all duration-200 group">
      <span className="group-hover:scale-105 transition-transform duration-200">
        {icon}
      </span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
