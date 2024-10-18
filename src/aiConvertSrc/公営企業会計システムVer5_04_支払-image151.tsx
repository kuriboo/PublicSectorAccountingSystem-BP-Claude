import React from 'react';
import styled from 'styled-components';

// 振込日コンポーネントの型定義
type FurikomibiProps = {
  date: string;
};

// 振込日コンポーネント
const Furikomibi: React.FC<FurikomibiProps> = ({ date }) => {
  return (
    <FurikomibiWrapper>
      <FurikomibiLabel>振込日</FurikomibiLabel>
      <FurikomibiValue>{date}</FurikomibiValue>
    </FurikomibiWrapper>
  );
};

// 振込日のラッパーコンポーネント
const FurikomibiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// 振込日のラベル
const FurikomibiLabel = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`;

// 振込日の値
const FurikomibiValue = styled.div`
  font-size: 18px;
  color: #333;
`;

// サンプルデータを使用した振込日コンポーネントの表示例
const SampleFurikomibi: React.FC = () => {
  const sampleDate = '平成29年08月17日';

  return (
    <div>
      <h3>振込日コンポーネントの使用例</h3>
      <Furikomibi date={sampleDate} />
    </div>
  );
};

export default SampleFurikomibi;