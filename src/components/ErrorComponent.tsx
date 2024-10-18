import React from 'react';
import Link from 'next/link';

interface ErrorComponentProps {
  error: Error;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">エラー：コンポーネントの読み込みに失敗しました</h1>
      <p className="mb-4">申し訳ありませんが、要求されたページを表示できません。</p>
      <p className="mb-4 text-red-500">{error.message}</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">ホームに戻る</a>
      </Link>
    </div>
  );
};

export default ErrorComponent;