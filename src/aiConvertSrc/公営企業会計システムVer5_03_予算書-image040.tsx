import React from 'react';
import styled from '@emotion/styled';

interface LoanCalculatorProps {
  companyType?: '損益計算書' | '貸借対照表';
  jobType?: string;
  yearsOfService?: number;
  region?: number;
  initialDate?: string;
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin: 0 10px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  companyType = '損益計算書',
  jobType = '',
  yearsOfService = 1,
  region = 1,
  initialDate = '',
}) => {
  return (
    <Container>
      <Title>損益計算書/貸借対照表</Title>
      <FormGroup>
        <Label>帳票種別</Label>
        <Select defaultValue={companyType}>
          <option value="損益計算書">損益計算書</option>
          <option value="貸借対照表">貸借対照表</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>作表条件</Label>
        <Select defaultValue={String(yearsOfService)}>
          <option value="1">年度</option>
        </Select>
        <Select defaultValue={String(region)}>
          <option value="1">当初予算</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>処理履歴</Label>
        <Input type="text" readOnly value="損益計算書・貸借対照表を作成します。" />
      </FormGroup>
      <FormGroup>
        <Label>集計日時</Label>
        <Input type="text" readOnly value={initialDate || '令和5年07月24日 15時36分'} />
      </FormGroup>
      <ButtonGroup>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <LoanCalculator
        companyType="損益計算書"
        jobType="年度"
        yearsOfService={1}
        region={1}
        initialDate="令和5年07月24日 15時36分"
      />
    </div>
  );
};

export default App;