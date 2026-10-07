import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
<<<<<<< Updated upstream
  Youtube = "youtube"
=======
  Youtube = "youtube",
  Website = "website",
>>>>>>> Stashed changes
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
  onContentAdded: () => void;
}

export function CreateContentModal({
  open,
  onClose,
  onContentAdded,
}: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      { link, title, type },
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    onContentAdded();
  }

  if (!open) return null;

  return (
<<<<<<< Updated upstream
    <div>
      {open && (
        <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-500/60">
          <div className="rounded-lg bg-white p-4 align">
            <div className="flex justify-end">
              <span className="cursor-pointer" onClick={onClose}>
                <CrossIcon />
              </span>
            </div> 
            <div className="flex flex-col items-center">
              <div>
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Link" />
              </div>
              <div className="flex gap-1 p-4">
                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                  setType(ContentType.Youtube)
                }} size="md"></Button>
              </div>
              <Button onClick={addContent} variant="primary" text="Submit" size="md" />
            </div>
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 overflow-hidden">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Add Content
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Save a link to your Mantana
            </p>
>>>>>>> Stashed changes
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <CrossIcon />
          </button>
        </div>

        {/* Modal body */}
        <div className="px-6 py-5 flex flex-col gap-4">
          {/* Type selector — pill toggle */}
          <div className="flex bg-[#f0efe9] rounded-xl p-1 gap-1">
            <button
              onClick={() => setType(ContentType.Youtube)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                type === ContentType.Youtube
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              YouTube
            </button>
            <button
              onClick={() => setType(ContentType.Website)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                type === ContentType.Website
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Website
            </button>
          </div>

          {/* Inputs */}
          <Input reference={titleRef} placeholder="Title" />
          <Input reference={linkRef} placeholder="Paste link here…" />
        </div>

        {/* Modal footer */}
        <div className="px-6 pb-5 flex justify-end gap-2">
          <Button onClick={onClose} variant="secondary" text="Cancel" size="md" />
          <Button onClick={addContent} variant="primary" text="Save" size="md" />
        </div>
      </div>
    </div>
  );
}