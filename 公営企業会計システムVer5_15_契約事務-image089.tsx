import React from 'react';
import styled from '@emotion/styled';

type ContractType = {
  id: number;
  name: string;
};

type Props = {
  contracts: ContractType[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FlowChart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ContractBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContractName = styled.span`
  font-weight: bold;
`;

const ArrowBox = styled.div`
  width: 100px;
  height: 2px;
  background-color: #000;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: -5px;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 10px solid #000;
  }
`;

const ContractFlow: React.FC<Props> = ({ contracts }) => {
  // Check if contracts array is empty
  if (contracts.length === 0) {
    return <div>No contracts available.</div>;
  }

  return (
    <Container>
      <Title>契約事務</Title>
      <FlowChart>
        {contracts.map((contract, index) => (
          <React.Fragment key={contract.id}>
            <ContractBox>
              <ContractName>{contract.name}</ContractName>
            </ContractBox>
            {index < contracts.length - 1 && <ArrowBox />}
          </React.Fragment>
        ))}
      </FlowChart>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleContracts: ContractType[] = [
    { id: 1, name: 'CSV連携データ取得' },
    { id: 2, name: '業者情報' },
    { id: 3, name: 'CSV連携一時格納庫' },
    { id: 4, name: '業者情報取込' },
  ];

  return (
    <div>
      <ContractFlow contracts={sampleContracts} />
    </div>
  );
};

export default App;