import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const EntryScreen: React.FC = () => {
  const [tsxFiles, setTsxFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTsxFiles = async () => {
      try {
        const response = await fetch('/api/tsx-files');
        if (!response.ok) {
          throw new Error('Failed to fetch tsx files');
        }
        const files = await response.json();
        setTsxFiles(files);
      } catch (error) {
        console.error('Error fetching tsx files:', error);
        setError('Failed to load file list. Please try again later.');
      }
    };

    fetchTsxFiles();
  }, []);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFile(event.target.value);
  }, []);

  const handleNavigate = useCallback(() => {
    if (selectedFile) {
      const routePath = '/' + selectedFile
        .replace(/\\/g, '/') // バックスラッシュをフォワードスラッシュに置換
        .replace(/^src\/aiConvertSrc\//, '') // 先頭の 'src/' を除去
        .replace(/\.tsx$/, '') // 末尾の '.tsx' を除去
        .replace(/\/+/g, '/'); // 重複したスラッシュを単一のスラッシュに置換

      router.push(routePath);
    }
  }, [selectedFile, router]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Public Sector Accounting System - Entry Screen</h1>
      <div className="mb-4">
        <select 
          className="w-full p-2 border rounded text-lg h-40"
          value={selectedFile}
          onChange={handleFileSelect}
          size={10} // リストボックスの表示行数
        >
          <option value="">Select a file</option>
          {tsxFiles.map((file, index) => (
            <option key={index} value={file}>
              {file}
            </option>
          ))}
        </select>
      </div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNavigate}
        disabled={!selectedFile}
      >
        Navigate to Selected Screen
      </button>
    </div>
  );
};

export default EntryScreen;