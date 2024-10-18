import React from 'react';
import styled from '@emotion/styled';

type CompanyProps = {
  companyCode: string;
  companyName: string;
  taxPeriodStart: string;
  taxPeriodEnd: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Company: React.FC<CompanyProps> = ({
  companyCode,
  companyName,
  taxPeriodStart,
  taxPeriodEnd,
}) => {
  return (
    <Container>
      <Title>調整前課税仕入等税額算出表</Title>
      <InputGroup>
        <Label>会計年度</Label>
        <Select defaultValue={companyCode}>
          <option value="平成31">平成31</option>
          <option value="令和2">令和2</option>
          {/* Add more options as needed */}
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>課税期間</Label>
        <Input type="text" defaultValue={`${taxPeriodStart} 〜 ${taxPeriodEnd}`} readOnly />
      </InputGroup>
      <ButtonGroup>
        <Button>終了</Button>
        <Button>クリア</Button>
        <Button>OK</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample usage
const SampleCompany: React.FC = () => {
  return (
    <Company
      companyCode="平成31"
      companyName="ABC株式会社"
      taxPeriodStart="平成31年04月01日"
      taxPeriodEnd="令和02年03月31日"
    />
  );
};

export default SampleCompany;