import { OpenIcon } from "../icons/OpenIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
  title: string;
  type: "github" | "youtube";
  link: string;
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

<<<<<<< Updated upstream
=======
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
      <div className="w-full h-36 rounded-xl bg-[#f5f4f0] animate-pulse flex items-center justify-center">
        <span className="text-xs text-gray-400">Loading preview…</span>
      </div>
    );
  }

  if (!preview?.image) {
    return (
      <div className="w-full h-20 rounded-xl bg-[#f5f4f0] flex items-center justify-center">
        <span className="text-xs text-gray-400">No preview available</span>
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block group">
      <div className="rounded-xl overflow-hidden border border-gray-100 group-hover:shadow-md transition-shadow duration-200">
        <img
          src={preview.image}
          alt={preview.description ?? "Website preview"}
          className="w-full object-cover"
          style={{ height: "152px" }}
        />
        {(preview.publisher || preview.description) && (
          <div className="px-3 py-2 bg-[#f9f8f5]">
            {preview.publisher && (
              <p className="text-xs font-semibold text-gray-600 truncate">
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

>>>>>>> Stashed changes
export function Card({ title, type, link }: CardProps) {
  const embedLink = type === "youtube" ? getYouTubeEmbedUrl(link) : link;

  return (
<<<<<<< Updated upstream
    <div>
      <div className="p-4 bg-white rounded-md border border-gray-200 max-w-96">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <YoutubeIcon />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <OpenIcon size="md" />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
=======
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 w-80 overflow-hidden">
      {/* Card header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="shrink-0 text-gray-400">
            {type === "youtube" && <YoutubeIcon />}
            {type === "website" && <WebsiteIcon />}
          </div>
          <span className="text-sm font-semibold text-gray-800 truncate">
            {title}
          </span>
>>>>>>> Stashed changes
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <OpenIcon size="md" />
          </a>
          <span className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
            <ShareIcon size="md" />
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-50 mx-4" />

      {/* Preview area */}
      <div className="p-4">
        {type === "youtube" && (
          <div className="rounded-xl overflow-hidden">
            <iframe
              className="w-full"
              style={{ height: "180px" }}
              src={embedLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
<<<<<<< Updated upstream
          )}
        </div>
=======
          </div>
        )}
        {type === "website" && <WebsitePreview link={link} />}
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
