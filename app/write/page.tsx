"use client";
import { useState } from "react";
import MessageForm from "../ui/write/MessageForm";
import SnowAnimation from "../ui/write/SnowAnimation";
import LinkPreview from "../ui/write/LinkPreview";

interface LinkPreview {
  url: string;
  description: string;
  title?: string;
  image?: string;
}

export default function Page() {
  const [linkPreview, setLinkPreview] = useState<LinkPreview>({
    url: "",
    description: "",
    title: "",
    image: ""
  });
  const [loading, setLoading] = useState(false);

  const handleLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const url = formData.get("url") as string;
    
    if (!url) return;

    setLoading(true);
    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const preview = await response.json();
      
      setLinkPreview({
        ...preview,
        description: formData.get("description") as string,
      });
    } catch (error) {
      console.error('링크 미리보기 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-[1000px] h-[600px] bg-white rounded-xl shadow-2xl flex overflow-hidden">
        <section className="w-1/2 p-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">연말 인사 보내기 ✨</h1>
          <MessageForm onLinkSubmit={handleLinkSubmit} />
          <div className="mt-auto">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition-colors shadow-md">
              마음을 담아 보내기
            </button>
          </div>
        </section>

        <section className="w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col">
          <div className="h-[75%] bg-gradient-to-b from-blue-900 to-purple-900 rounded-lg shadow-md p-6 mb-4 relative overflow-hidden">
            <SnowAnimation />
          </div>

          <div className="h-[25%] bg-white rounded-lg shadow-md p-4">
            <LinkPreview loading={loading} preview={linkPreview} />
          </div>
        </section>
      </div>
    </div>
  );
}
