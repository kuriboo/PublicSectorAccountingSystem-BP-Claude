import React from 'react';
import styled from '@emotion/styled';

type Props = {
  sourceData: {
    date: string;
    site: string;
    section: string;
    detail: string;
  };
  destinationData: {
    date: string;
    site: string;
    section: string;
    detail: string;
  };
  consumptionTax: number;
  adjustmentAmount: number;
  specifiedCosts: number;
  transferFees: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const DataBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DataTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const DataLabel = styled.span`
  margin-right: 10px;
`;

const DataValue = styled.span`
  font-weight: bold;
`;

const CalculationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CalculationLabel = styled.div`
  margin-right: 10px;
`;

const CalculationValue = styled.div`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const TransferDataComponent: React.FC<Props> = ({
  sourceData,
  destinationData,
  consumptionTax,
  adjustmentAmount,
  specifiedCosts,
  transferFees,
}) => {
  // Format date string
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('/');
    return `${year}/${month}/${day}`;
  };

  return (
    <Container>
      <DataBox>
        <DataTitle>調定科目</DataTitle>
        <DataItem>
          <DataLabel>節</DataLabel>
          <DataValue>{sourceData.section || '---'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>細節</DataLabel>
          <DataValue>{sourceData.site || '---'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>明細</DataLabel>
          <DataValue>{sourceData.detail || '----SINM'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>科目検索</DataLabel>
        </DataItem>
      </DataBox>
      <DataBox>
        <DataTitle>節受科目</DataTitle>
        <DataItem>
          <DataLabel>節</DataLabel>
          <DataValue>{destinationData.section || '---'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>細節</DataLabel>
          <DataValue>{destinationData.site || '---'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>明細</DataLabel>
          <DataValue>{destinationData.detail || '----SINM'}</DataValue>
        </DataItem>
        <DataItem>
          <DataLabel>科目検索</DataLabel>
        </DataItem>
      </DataBox>
      <div>
        <CalculationItem>
          <CalculationLabel>消費税率</CalculationLabel>
          <CalculationValue>{consumptionTax || 0}%</CalculationValue>
        </CalculationItem>
        <CalculationItem>
          <CalculationLabel>調定金額</CalculationLabel>
          <CalculationValue>{adjustmentAmount || 0}</CalculationValue>
        </CalculationItem>
        <CalculationItem>
          <CalculationLabel>内消費税額</CalculationLabel>
          <CalculationValue>{specifiedCosts || 0}</CalculationValue>
        </CalculationItem>
        <CalculationItem>
          <CalculationLabel>特定収入</CalculationLabel>
          <CalculationValue>{transferFees || 0}</CalculationValue>
        </CalculationItem>
      </div>
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const data = {
    sourceData: {
      date: '00/01/08/08',
      site: '0002',
      section: '0008',
      detail: '0008 0005-SINM',
    },
    destinationData: {
      date: '0020/00/01',
      site: '0002',
      section: '0001',
      detail: '0001 0001-SINM',
    },
    consumptionTax: 0,
    adjustmentAmount: 18000,
    specifiedCosts: 0,
    transferFees: 0,
  };

  return (
    <div>
      <h1>Transfer Data Form</h1>
      <TransferDataComponent {...data} />
    </div>
  );
};

export default App;