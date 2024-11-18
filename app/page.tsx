'use client';

import { Plus, Send } from 'lucide-react';
import { Button } from '@/app/ui/button';
import { Divider } from '@/app/ui/divider';

export default function Home() {
  const handleCreateMailbox = () => {
    // 편지함 만들기 로직
  };

  const handleRequestMailbox = () => {
    // 친구에게 요청하기 로직
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          타임 캡슐 편지
        </h1>
        
        <p className="text-gray-600 mb-6">
          특별한 날, 특별한 메시지를 담아보세요
        </p>

        <div className="space-y-4">
          <Button 
            icon={Plus}
            onClick={handleCreateMailbox}
          >
            내 편지함 만들기
          </Button>

          <Divider />

          <Button 
            icon={Send}
            variant="pink"
            onClick={handleRequestMailbox}
          >
            친구에게 편지함 만들기 요청
          </Button>
        </div>
      </div>
    </div>
  );
}
