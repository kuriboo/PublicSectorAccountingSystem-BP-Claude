import React from 'react';
import styled from 'styled-components';

// 型定義
type CompanyStopProps = {
  companyCode: string;
  companyName: string;
  suspensionCategory: string;
  suspensionPeriodFrom: string;
  suspensionPeriodTo: string;
  suspensionReason1: string;
  suspensionReason2: string;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyCodeInput = styled.input`
  width: 100px;
  margin-right: 10px;
`;

const CompanyNameInput = styled.input`
  width: 200px;
`;

const SuspensionInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SuspensionCategorySelect = styled.select`
  width: 150px;
  margin-right: 10px;
`;

const SuspensionPeriod = styled.div`
  margin-bottom: 10px;
`;

const SuspensionReasonInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
`;

// コンポーネント定義
const CompanyStop: React.FC<CompanyStopProps> = ({
  companyCode,
  companyName,
  suspensionCategory,
  suspensionPeriodFrom,
  suspensionPeriodTo,
  suspensionReason1,
  suspensionReason2,
}) => {
  return (
    <Container>
      <Title>指名停止処理</Title>
      <CompanyInfo>
        <CompanyCodeInput type="text" value={companyCode} readOnly />
        <CompanyNameInput type="text" value={companyName} readOnly />
      </CompanyInfo>
      <SuspensionInfo>
        <SuspensionCategorySelect value={suspensionCategory}>
          <option value="工事">工事</option>
          {/* その他選択肢 */}
        </SuspensionCategorySelect>
      </SuspensionInfo>
      <SuspensionPeriod>
        指名停止期間：
        <input type="text" value={suspensionPeriodFrom} readOnly />
        &nbsp;〜&nbsp;
        <input type="text" value={suspensionPeriodTo} readOnly />  
      </SuspensionPeriod>
      <SuspensionReasonInput
        type="text"
        value={suspensionReason1}
        placeholder="指名停止理由1"
        readOnly
      />
      <SuspensionReasonInput
        type="text"
        value={suspensionReason2}
        placeholder="指名停止理由2"
        readOnly
      />
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleCompanyStop: React.FC = () => {
  const sampleData: CompanyStopProps = {
    companyCode: '000000001',
    companyName: '大規模広域解体(小/架炉)・特定工事企業様',
    suspensionCategory: '工事',
    suspensionPeriodFrom: '平成29年09月04日',
    suspensionPeriodTo: '平成29年09月04日',
    suspensionReason1: '',
    suspensionReason2: '',
  };

  return <CompanyStop {...sampleData} />;
};

export default SampleCompanyStop;