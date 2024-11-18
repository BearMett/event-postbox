interface MessageFormProps {
  readonly onLinkSubmit: (event: React.FormEvent) => void;
}

export default function MessageForm({ onLinkSubmit }: MessageFormProps) {
  return (
    <form onSubmit={onLinkSubmit} className="flex flex-col gap-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">제목</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="따뜻한 인사말을 입력하세요"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">내용</label>
        <textarea
          className="w-full p-2 border rounded-md h-32"
          placeholder="마음을 담아 메시지를 작성해보세요"
        />
      </div>

      <div className="flex gap-2 items-end">
        <div className="flex-1 space-y-2">
          <label className="block text-sm font-medium text-gray-700">링크</label>
          <input
            type="url"
            name="url"
            className="w-full p-2 border rounded-md"
            placeholder="공유하고 싶은 링크를 입력하세요"
          />
        </div>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          확인
        </button>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">링크 설명</label>
        <input
          type="text"
          name="description"
          className="w-full p-2 border rounded-md"
          placeholder="링크에 대한 설명을 입력하세요"
        />
      </div>
    </form>
  );
} 