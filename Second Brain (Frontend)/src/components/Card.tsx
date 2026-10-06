import { useEffect, useState } from "react";
import { OpenIcon } from "../icons/OpenIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { WebsiteIcon } from "../icons/WebsiteIcon";

interface CardProps {
  title: string;
  type: "github" | "youtube" | "website";
  link: string;
}

interface LinkPreview {
  image?: string;
  description?: string;
  publisher?: string;
}

function getYouTubeEmbedUrl(rawLink: string) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/shorts\/)([^#&?]*).*/;
  const match = rawLink.match(regExp);

  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }

  return rawLink;
}

function WebsitePreview({ link }: { link: string }) {
  const [preview, setPreview] = useState<LinkPreview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.microlink.io?url=${encodeURIComponent(link)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setPreview({
            image: data.data.image?.url ?? data.data.screenshot?.url,
            description: data.data.description,
            publisher: data.data.publisher,
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [link]);

  if (loading) {
    return (
      <div className="w-full h-36 rounded-lg bg-gray-100 animate-pulse flex items-center justify-center text-gray-400 text-sm">
        Loading preview...
      </div>
    );
  }

  if (!preview?.image) {
    return (
      <div className="w-full h-20 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
        No preview available
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block">
      <div className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
        <img
          src={preview.image}
          alt={preview.description ?? "Website preview"}
          className="w-full object-cover"
          style={{ height: "160px" }}
        />
        {(preview.publisher || preview.description) && (
          <div className="p-2 bg-gray-50">
            {preview.publisher && (
              <p className="text-xs font-medium text-gray-600 truncate">
                {preview.publisher}
              </p>
            )}
            {preview.description && (
              <p className="text-xs text-gray-400 truncate mt-0.5">
                {preview.description}
              </p>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

export function Card({ title, type, link }: CardProps) {
  const embedLink = type === "youtube" ? getYouTubeEmbedUrl(link) : link;

  return (
    <div>
      <div className="p-4 bg-white rounded-md border border-gray-200 max-w-96">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              {type === "youtube" && <YoutubeIcon />}
              {type === "website" && <WebsiteIcon />}
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noreferrer">
                <OpenIcon size="md" />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full rounded-lg"
              src={embedLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          {type === "website" && <WebsitePreview link={link} />}
        </div>
      </div>
    </div>
  );
}
