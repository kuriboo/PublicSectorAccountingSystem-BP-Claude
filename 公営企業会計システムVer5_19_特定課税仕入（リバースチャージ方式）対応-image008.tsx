// UserRegistrationForm.tsx

import React, { useState } from 'react';

interface UserRegistrationFormProps {
  onSubmit: (username: string, email: string) => void;
}

const UserRegistrationForm: React.FC<UserRegistrationFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">ユーザー登録</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-bold">
              ユーザー名
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleRegistration = (username: string, email: string) => {
    console.log('Registered:', username, email);
    // ここで登録処理を行う
    alert('正常に処理されました。');
  };

  return (
    <div>
      <h1>User Registration Example</h1>
      <UserRegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default SampleUsage;