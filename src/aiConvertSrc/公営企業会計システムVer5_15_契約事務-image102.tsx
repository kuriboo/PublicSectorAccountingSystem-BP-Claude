import React from 'react';
import styled from 'styled-components';

// 型定義
type CompanyData = {
  code: string;
  name: string;
  division: string;
  startDate: string;
  endDate: string;
  dayCount: number;
  price: number;
};

type Props = {
  companyData: CompanyData;
  onSubmit: (companyData: CompanyData) => void;
  onCancel: () => void;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const CompanyForm: React.FC<Props> = ({ companyData, onSubmit, onCancel }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(companyData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>会社:</Label>
          <Input type="text" value={companyData.code} readOnly />
        </Row>
        <Row>
          <Label>名前:</Label>
          <Input type="text" value={companyData.name} readOnly />
        </Row>
        <Row>
          <Label>発注部門:</Label>
          <Input type="text" value={companyData.division} readOnly />
        </Row>
        <Row>
          <Label>期間:</Label>
          <Input type="text" value={`${companyData.startDate} 〜 ${companyData.endDate}`} readOnly />
        </Row>
        <Row>
          <Label>完成高:</Label>
          <Input type="text" value={companyData.price.toLocaleString()} readOnly />
        </Row>
        <ButtonGroup>
          <Button type="submit">OK</Button>
          <Button type="button" onClick={onCancel}>キャンセル</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleData: CompanyData = {
    code: '0000000001',
    name: '大規模広域特殊（火薬作）特定工事企業体',
    division: '道路公庁',
    startDate: '平成29年09月05日',
    endDate: '平成29年09月28日',
    dayCount: 70,
    price: 1234000,
  };

  const handleSubmit = (data: CompanyData) => {
    console.log('Submitted:', data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>Company Form</h1>
      <CompanyForm companyData={sampleData} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;