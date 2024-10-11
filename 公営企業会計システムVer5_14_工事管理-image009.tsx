import React from 'react';
import styled from 'styled-components';

// 年次更新コンポーネントの型定義
interface AnnualUpdateProps {
  fiscalYear: string; // 会計年度
  updateDate: string; // 更新日付
}

// 年次更新コンポーネント
const AnnualUpdate: React.FC<AnnualUpdateProps> = ({ fiscalYear, updateDate }) => {
  return (
    <Container>
      <Title>年次更新</Title>
      <DateInfo>
        {fiscalYear ? `行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎` : ''}
        <br />
        {updateDate ? `平成29年09月15日` : ''}
      </DateInfo>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const DateInfo = styled.p`
  font-size: 16px;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <AnnualUpdate
      fiscalYear="行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎"
      updateDate="平成29年09月15日"
    />
  );
};

export default AnnualUpdate;