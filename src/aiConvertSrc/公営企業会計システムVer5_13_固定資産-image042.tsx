import React from 'react';
import styled from '@emotion/styled';

type CompanyProps = {
  companyDivision: string;
  setCompanyDivision: (value: string) => void;
  estimateNumber: string;
  setEstimateNumberFrom: (value: string) => void;
  setEstimateNumberTo: (value: string) => void;
  dueDateFrom: Date;
  setDueDateFrom: (value: Date) => void;
  dueDateTo: Date;
  setDueDateTo: (value: Date) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ProductListComponent: React.FC<CompanyProps> = ({
  companyDivision,
  setCompanyDivision,
  estimateNumber,
  setEstimateNumberFrom,
  setEstimateNumberTo,
  dueDateFrom,
  setDueDateFrom,
  dueDateTo,
  setDueDateTo,
}) => {
  return (
    <Container>
      <Row>
        <Label>会計区分</Label>
        <Select
          value={companyDivision}
          onChange={(e) => setCompanyDivision(e.target.value)}
        >
          <option value="指定しない">指定しない</option>
          <option value="会計区分別">会計区分別</option>
        </Select>
      </Row>
      <Row>
        <Label>見積番号</Label>
        <Input
          type="text"
          value={estimateNumber?.split('~')[0] || ''}
          onChange={(e) => setEstimateNumberFrom(e.target.value)}
        />
        <span>～</span>
        <Input
          type="text"
          value={estimateNumber?.split('~')[1] || ''}
          onChange={(e) => setEstimateNumberTo(e.target.value)}
        />
      </Row>
      <Row>
        <Label>更正年月日</Label>
        <Input
          type="date"
          value={dueDateFrom.toISOString().split('T')[0]}
          onChange={(e) => setDueDateFrom(new Date(e.target.value))}
        />
        <span>～</span>
        <Input
          type="date"
          value={dueDateTo.toISOString().split('T')[0]}
          onChange={(e) => setDueDateTo(new Date(e.target.value))}
        />
      </Row>
      <Row>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [companyDivision, setCompanyDivision] = React.useState('指定しない');
  const [estimateNumber, setEstimateNumber] = React.useState('');
  const [dueDateFrom, setDueDateFrom] = React.useState(new Date());
  const [dueDateTo, setDueDateTo] = React.useState(new Date());

  const setEstimateNumberFrom = (value: string) => {
    const [, to] = estimateNumber.split('~');
    setEstimateNumber(`${value}~${to || ''}`);
  };

  const setEstimateNumberTo = (value: string) => {
    const [from] = estimateNumber.split('~');
    setEstimateNumber(`${from || ''}~${value}`);
  };

  return (
    <ProductListComponent
      companyDivision={companyDivision}
      setCompanyDivision={setCompanyDivision}
      estimateNumber={estimateNumber}
      setEstimateNumberFrom={setEstimateNumberFrom}
      setEstimateNumberTo={setEstimateNumberTo}
      dueDateFrom={dueDateFrom}
      setDueDateFrom={setDueDateFrom}
      dueDateTo={dueDateTo}
      setDueDateTo={setDueDateTo}
    />
  );
};

export default App;