以下は、指定された条件に基づいて生成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface ShinjinProps {
  name: string;
  role: string;
  image: string;
}

// スタイル定義
const ShinjinWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ShinjinImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const ShinjinInfo = styled.div`
  flex: 1;
`;

const ShinjinName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ShinjinRole = styled.p`
  margin: 0;
  color: #666;
`;

// 新人紹介コンポーネント
const Shinjin: React.FC<ShinjinProps> = ({ name, role, image }) => {
  // 必須プロパティのチェック
  if (!name || !role || !image) {
    console.warn('Shinjin component is missing required props');
    return null;
  }

  return (
    <ShinjinWrapper>
      <ShinjinImage src={image} alt={name} />
      <ShinjinInfo>
        <ShinjinName>{name}</ShinjinName>
        <ShinjinRole>{role}</ShinjinRole>
      </ShinjinInfo>
    </ShinjinWrapper>
  );
};

// 使用例
const ShinjinList: React.FC = () => {
  const shinjinData = [
    { name: '山田太郎', role: 'エンジニア', image: '/images/yamada.jpg' },
    { name: '鈴木花子', role: 'デザイナー', image: '/images/suzuki.jpg' },
  ];

  return (
    <div>
      <h2>新人紹介</h2>
      {shinjinData.map((shinjin, index) => (
        <Shinjin key={index} {...shinjin} />
      ))}
    </div>
  );
};

export default ShinjinList;