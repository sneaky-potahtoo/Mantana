import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
  active,
  onClick,
}: {
  text: string;
  icon?: ReactElement;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full flex items-center gap-3 py-2.5 px-4 text-left rounded-xl transition-colors ${
        active
          ? "bg-[#f0efe9] text-gray-900"
          : "text-gray-500 hover:bg-[#f0efe9] hover:text-gray-900"
      }`}
    >
      <span className="w-5 flex items-center justify-center">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}
