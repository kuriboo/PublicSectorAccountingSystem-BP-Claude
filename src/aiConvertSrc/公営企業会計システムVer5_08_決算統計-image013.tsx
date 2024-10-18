import React from 'react';
import styled from '@emotion/styled';

type WaterBillInputFormProps = {
  onCalculate: (totalAmount: number) => void;
};

const WaterBillInputForm: React.FC<WaterBillInputFormProps> = ({ onCalculate }) => {
  // State for form inputs
  const [usage, setUsage] = React.useState('');
  const [daysInMonth, setDaysInMonth] = React.useState(0);
  const [meterType, setMeterType] = React.useState('02');

  // Calculate button handler
  const handleCalculate = () => {
    // Validate inputs
    if (!usage || daysInMonth <= 0) {
      alert('Please enter valid usage and days in month');
      return;
    }

    // Parse usage as number
    const usageNumber = parseFloat(usage);

    // Calculate total amount based on meter type
    let totalAmount = 0;
    if (meterType === '02') {
      totalAmount = 2894643.000;
    } else {
      totalAmount = 2894649.464;
    }

    // Add tax amount
    const taxAmount = 121186.645;
    totalAmount += taxAmount;

    // Invoke callback with total amount
    onCalculate(totalAmount);
  };

  return (
    <FormContainer>
      <Title>1000円丸め調整入力(予算科目)</Title>
      <TableRow>
        <TableHeader>予算執行年度</TableHeader>
        <TableHeader>予算科目</TableHeader>
        <TableHeader>予算節</TableHeader>
        <TableHeader>予算細節</TableHeader>
        <TableHeader>予算明細節</TableHeader>
        <TableHeader>予算明細細節</TableHeader>
        <TableHeader>変更執行予定金額</TableHeader>
        <TableHeader>変更消費税額</TableHeader>
      </TableRow>
      <TableRow>
        <TableData>水道事業事業費</TableData>
        <TableData colSpan={5}></TableData>
        <TableData>2,894,649,000</TableData>
        <TableData>121,186,000</TableData>
      </TableRow>
      <SectionTitle>明細情報</SectionTitle>
      <div>
        <label>
          <input type="radio" checked={meterType === '02'} onChange={() => setMeterType('02')} />
          款
        </label>
        <label>
          <input type="radio" checked={meterType === '項'} onChange={() => setMeterType('項')} />
          項 
        </label>
        {/* Other radio options */}
      </div>
      <InputRow>
        <InputLabel>予算款</InputLabel>
        <InputValue>02 水道事業費用</InputValue>
      </InputRow>
      <InputRow>
        <InputLabel>予算項</InputLabel>
        <InputValue></InputValue>
      </InputRow>
      {/* Other input rows */}
      <InputRow>
        <InputLabel>予算明細</InputLabel>
        <InputValue>
          変更執行税込金額
          <TaxIncludedAmount>121,167,645</TaxIncludedAmount>
          執行消費税額
          <TaxAmount>121,167,645</TaxAmount>
          (入力は千円単位)
        </InputValue>
      </InputRow>

      <ButtonContainer>
        <Button onClick={handleCalculate}>確定</Button>
        <CancelButton>キャンセル</CancelButton>  
      </ButtonContainer>
    </FormContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleCalculate = (totalAmount: number) => {
    console.log(`Total amount: ${totalAmount}`);
  };

  return (
    <div>
      <WaterBillInputForm onCalculate={handleCalculate} />
    </div>
  );
};

// Styled components
const FormContainer = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const TableRow = styled.div`
  display: flex;
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.div`
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ccc;
  flex: 1;
`;

const TableData = styled.div`
  padding: 0.5rem;
  text-align: right;  
  border: 1px solid #ccc;
  flex: 1;
`;

const SectionTitle = styled.h3`
  margin-top: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const InputLabel = styled.div`
  width: 200px;
`;

const InputValue = styled.div`
  flex: 1;
`;

const TaxIncludedAmount = styled.span`
  margin-left: 1rem;
  color: blue;
`;

const TaxAmount = styled.span`
  margin-left: 1rem;
  color: blue;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const CancelButton = styled(Button)`
  margin-left: 1rem;
`;

export default WaterBillInputForm;