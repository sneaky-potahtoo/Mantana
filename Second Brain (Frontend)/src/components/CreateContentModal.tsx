import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Website = "website"
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

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })

    onContentAdded();
  }

  return (
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
                <Button text="Website" variant={type === ContentType.Website ? "primary" : "secondary"} onClick={() => {
                  setType(ContentType.Website)
                }} size="md"></Button>
              </div>
              <Button onClick={addContent} variant="primary" text="Submit" size="md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}