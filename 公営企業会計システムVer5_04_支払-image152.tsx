import React from 'react';
import styled from '@emotion/styled';

interface SupportPeriodProps {
  startDate: string;
  endDate: string;
}

const SupportPeriodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Period = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SupportPeriod: React.FC<SupportPeriodProps> = ({ startDate, endDate }) => {
  // 開始日と終了日が指定されていない場合は「未指定」と表示
  const formattedStartDate = startDate || '未指定';
  const formattedEndDate = endDate || '未指定';

  return (
    <SupportPeriodWrapper>
      <Label>範囲指定</Label>
      <Period>
        {formattedStartDate} ～ {formattedEndDate}
      </Period>
    </SupportPeriodWrapper>
  );
};

// サンプルデータを使用した使用例
const SupportPeriodExample: React.FC = () => {
  const sampleData = {
    startDate: '平成29年06月17日',
    endDate: '平成29年06月17日',
  };

  return <SupportPeriod {...sampleData} />;
};

export default SupportPeriod;