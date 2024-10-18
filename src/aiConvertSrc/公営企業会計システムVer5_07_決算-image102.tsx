import React from 'react';
import styled from '@emotion/styled';

interface AdjustmentPeriodProps {
  startDate: string;
  endDate: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

const DateLabel = styled.span`
  font-weight: bold;
`;

const DateValue = styled.span`
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AdjustmentPeriod: React.FC<AdjustmentPeriodProps> = ({ startDate, endDate }) => {
  // フォーマットされた日付を取得する関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  return (
    <Container>
      <Title>範囲指定</Title>
      <DateRange>
        <div>
          <DateLabel>課税期間</DateLabel>
          <DateValue>{startDate ? formatDate(startDate) : '----年--月--日'}</DateValue>
          <DateLabel>～</DateLabel>
          <DateValue>{endDate ? formatDate(endDate) : '----年--月--日'}</DateValue>
        </div>
      </DateRange>
      <ButtonContainer>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: AdjustmentPeriodProps = {
    startDate: '2022-01-01',
    endDate: '2022-12-31',
  };

  return <AdjustmentPeriod {...sampleData} />;
};

export default AdjustmentPeriod;