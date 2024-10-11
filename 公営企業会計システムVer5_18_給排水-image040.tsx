import React from 'react';
import styled from 'styled-components';

interface TaxSummaryProps {
  taxIncome: number;
  taxExemption: number;
  taxableIncome: number;
}

interface TaxDetailProps {
  label: string;
  value: number;
}

const TaxSummaryContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TaxSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TaxSummaryLabel = styled.span`
  font-weight: bold;
`;

const TaxSummaryValue = styled.span`
  font-weight: bold;
`;

const TaxDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const TaxDetailItem = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const TaxDetailLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TaxDetailValue = styled.div`
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const TaxSummary: React.FC<TaxSummaryProps> = ({ taxIncome, taxExemption, taxableIncome }) => {
  return (
    <TaxSummaryContainer>
      <TaxSummaryItem>
        <TaxSummaryLabel>税込額</TaxSummaryLabel>
        <TaxSummaryValue>{taxIncome.toLocaleString()}</TaxSummaryValue>
      </TaxSummaryItem>
      <TaxSummaryItem>
        <TaxSummaryLabel>税抜額</TaxSummaryLabel>
        <TaxSummaryValue>{taxExemption.toLocaleString()}</TaxSummaryValue>
      </TaxSummaryItem>
      <TaxSummaryItem>
        <TaxSummaryLabel>消費税額</TaxSummaryLabel>
        <TaxSummaryValue>{taxableIncome.toLocaleString()}</TaxSummaryValue>
      </TaxSummaryItem>
    </TaxSummaryContainer>
  );
};

const TaxDetail: React.FC<TaxDetailProps> = ({ label, value }) => {
  return (
    <TaxDetailItem>
      <TaxDetailLabel>{label}</TaxDetailLabel>
      <TaxDetailValue>{value.toLocaleString()}</TaxDetailValue>
    </TaxDetailItem>
  );
};

const TaxCalculator: React.FC = () => {
  const taxIncome = 173251;
  const taxExemption = 157500;
  const taxableIncome = 15751;

  const taxDetails = [
    { label: '税区分', value: 10.00 },
    { label: '消費税率', value: 173251 },
    { label: '税込額', value: 157500 },
    { label: '税抜額', value: 15751 },
  ];

  return (
    <div>
      <TaxSummary
        taxIncome={taxIncome}
        taxExemption={taxExemption}
        taxableIncome={taxableIncome}
      />
      <TaxDetailContainer>
        {taxDetails.map((detail, index) => (
          <TaxDetail key={index} label={detail.label} value={detail.value} />
        ))}
      </TaxDetailContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </div>
  );
};

export default TaxCalculator;