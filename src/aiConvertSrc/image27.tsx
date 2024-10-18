import React from 'react';
import styled from '@emotion/styled';

interface VendorInputProps {
  date: string;
  department: string;
  orderCode: string;
  estimateNumber: string;
  subject: string;
  departureTime: string;
  arrivalTime: string;
  departure: string;
  destination: string;
  morningBillingRate: number;
  afternoonBillingRate: number;
  lodging: number;
  tax: number;
  mealAllowance: number;
  transportAllowance: number;
}

const VendorInput: React.FC<VendorInputProps> = ({
  date,
  department,
  orderCode,
  estimateNumber,
  subject,
  departureTime,
  arrivalTime, 
  departure,
  destination,
  morningBillingRate,
  afternoonBillingRate,
  lodging,
  tax,
  mealAllowance,
  transportAllowance,
}) => {
  // 必須項目のバリデーション
  const isValid = 
    date && 
    department && 
    orderCode && 
    subject && 
    departureTime && 
    arrivalTime &&
    departure &&
    destination;

  return (
    <Container>
      <h2>振替入力</h2>
      <DateInput type="text" value={date} />
      <DepartmentInput>
        <input type="radio" checked={department === '営繕'} /> 営繕 
        <input type="radio" checked={department === '訂正'} /> 訂正
        <input type="radio" checked={department === '削除'} /> 削除
      </DepartmentInput>
      <p>年度28年03月27日</p>
      <Row>
        <Label>依頼コード</Label>
        <Input type="text" value={orderCode} />
      </Row>
      <Row>
        <Label>伝票コード</Label>
        <Input type="text" value={estimateNumber} />
      </Row>
      <Row>
        <Label>摘要</Label>
        <Input type="text" value={subject} />
      </Row>
      
      <BillingRateSection>
        <ColLabel>借方細節・明細</ColLabel>
        <ColLabel>貸方細節・明細</ColLabel>
        <Input type="text" value={morningBillingRate} />  
        <Input type="text" value={afternoonBillingRate} />
        <Input type="text" value={lodging} />
        <Input type="text" value={tax} />
      </BillingRateSection>

      <Row>
        <Input type="text" value={mealAllowance} disabled />
        <Input type="text" value={transportAllowance} disabled />
      </Row>

      <Row>
        <Label>予算</Label>  
        <Label>本体仕訳</Label>
        <Label>消費税仕訳</Label>
      </Row>

      <Row>
        <Input type="text" value={departure} />
        <Input type="text" value={destination} />
      </Row>

      <TaxRateInput>
        <Label>消費税率</Label>
        <input type="text" value="8" /> %  
      </TaxRateInput>

      <Row>
        <Label>税込金額</Label>
        <Input type="text" value="80,000" />
      </Row>
      <Row>  
        <Label>税抜金額</Label>
        <Input type="text" value="8,000" />
      </Row>
      <Row>
        <Label>消費税額</Label>  
        <Input type="text" value="0" disabled />
      </Row>

      <CheckboxLabel>
        <input type="checkbox" /> 仕訳仕訳  
      </CheckboxLabel>

      <ButtonRow>
        <OkButton disabled={!isValid}>OK</OkButton>
        <ClearButton>クリア</ClearButton>
        <FinishButton>終了</FinishButton>
      </ButtonRow>
    </Container>
  );
};

// コンポーネントで使用するスタイル
const Container = styled.div`
  padding: 16px;

  h2 {
    font-size: 20px;
  }

  p {
    margin: 8px 0;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
  width: 100px;
`;

const Input = styled.input`
  padding: 4px;
  margin-right: 8px;
`;

const DateInput = styled(Input)`
  width: 120px;
`;

const DepartmentInput = styled.div`
  input {
    margin-right: 4px;
  }
`;

const BillingRateSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const ColLabel = styled.div`
  text-align: center;
  font-weight: bold;
`;

const TaxRateInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    width: 60px;
    margin-right: 4px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }  
`;

const ClearButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const FinishButton = styled(Button)`
  background-color: #28a745;
  color: #fff;  
`;

// サンプルデータを使用した表示用コンポーネント
const VendorInputExample: React.FC = () => {
  const sampleData: VendorInputProps = {
    date: '2023-03-27',
    department: '営繕',
    orderCode: 'OC-001',
    estimateNumber: 'EN-001',  
    subject: 'サンプル案件',
    departureTime: '09:00',
    arrivalTime: '18:00',
    departure: '東京',
    destination: '大阪', 
    morningBillingRate: 10000,
    afternoonBillingRate: 15000,
    lodging: 8000,
    tax: 1000,
    mealAllowance: 2000,
    transportAllowance: 5000,
  };

  return <VendorInput {...sampleData} />;  
};

export default VendorInputExample;