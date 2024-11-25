import { Button } from "@/components/ui/button"
import { Share, Link } from "lucide-react"

export default function InboxPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* 헤더 섹션 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200">
            {/* 프로필 이미지 */}
          </div>
          <h1 className="text-2xl font-bold">홍길동님의 편지함</h1>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            공유하기
          </Button>
          <Button variant="outline" size="sm">
            <Link className="w-4 h-4 mr-2" />
            링크 복사
          </Button>
        </div>
      </div>

      {/* 메시지 그리드 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 메시지 카드 예시 */}
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">12월 1일, 2023</span>
            <span className="font-medium">4 메시지</span>
          </div>
          <div className="flex -space-x-2">
            {/* 프로필 이미지들을 중첩해서 표시 */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
