import "../App.css";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refreshContent } = useContent();

  async function handleShareBrain() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/brain/share`,
      { share: true },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Brain URL copied to clipboard!");
  }

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      <Sidebar />

      <div className="ml-64 px-8 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              My Tapestry
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              {contents.length} item{contents.length !== 1 ? "s" : ""} saved
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setModalOpen(true)}
              startIcon={<PlusIcon size="lg" />}
              size="md"
              variant="secondary"
              text="Add Content"
            />
            <Button
              onClick={handleShareBrain}
              startIcon={<ShareIcon size="md" />}
              size="md"
              variant="primary"
              text="Share Mantana"
            />
          </div>
        </div>

        {/* Content grid */}
        {contents.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-32 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-4">
              <PlusIcon size="lg" />
            </div>
            <h3 className="text-base font-semibold text-gray-700">
              Nothing saved yet
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Click "Add Content" to save your first link.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-5">
            {contents.map(({ _id, type, link, title }) => (
              <Card key={_id} title={title} type={type} link={link} />
            ))}
          </div>
        )}
      </div>

      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onContentAdded={() => {
          setModalOpen(false);
          refreshContent();
        }}
      />
    </div>
  );
}

export default Dashboard;
