import Image from 'next/image';

interface LinkPreviewProps {
  loading: boolean;
  preview: {
    url: string;
    title?: string;
    description: string;
    image?: string;
  };
}

export default function LinkPreview({ loading, preview }: LinkPreviewProps) {
  if (loading) {
    return <div className="text-sm text-gray-600">미리보기를 불러오는 중...</div>;
  }

  if (!preview.url) {
    return <div className="text-sm text-gray-600">링크 설명이 이곳에 표시됩니다</div>;
  }

  return (
    <div className="flex gap-3">
      {preview.image && (
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={preview.image}
            alt={preview.title ?? ''}
            fill
            className="object-cover rounded"
            unoptimized
          />
        </div>
      )}
      <div className="flex-1 text-sm text-gray-600">
        {preview.title && <h4 className="font-medium">{preview.title}</h4>}
        <a 
          href={preview.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {preview.url}
        </a>
        <p className="mt-1">{preview.description}</p>
      </div>
    </div>
  );
} 