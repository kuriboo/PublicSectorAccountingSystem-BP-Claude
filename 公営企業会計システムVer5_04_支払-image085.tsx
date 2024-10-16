import React from 'react';
import styled from '@emotion/styled';

interface ContractInputProps {
  fiscalYear: string;
  contractYear: string;
  contractMonth: string;
  contractStartDate: string;
  contractEndDate: string;
  paymentMethod: string;
  contractTerm: number;
  autoRenewalFlag: boolean;
  notes: string;
  contractorCode: string;
  contractorName: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;
  color: #555;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContractInput: React.FC<ContractInputProps> = ({
  fiscalYear,
  contractYear,
  contractMonth,
  contractStartDate,
  contractEndDate,
  paymentMethod,
  contractTerm,
  autoRenewalFlag,
  notes,
  contractorCode,
  contractorName,
}) => {
  return (
    <Container>
      <Title>契約報告入力(一般)</Title>
      <InputGroup>
        <Label>負担年度</Label>
        <Input type="text" value={fiscalYear} readOnly />
        <Label>年度</Label>
        <Input type="text" value={contractYear} />
      </InputGroup>
      <InputGroup>
        <Label>契約年号</Label>
        <Select>
          <option>年号選択</option>
          {/* options */}
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>契約年月日</Label>
        <Input type="text" value={contractYear} />
        <Label>年</Label>
        <Input type="text" value={contractMonth} />
        <Label>月</Label>
        <Input type="text" />
        <Label>日</Label>
      </InputGroup>
      <InputGroup>
        <Label>契約方法</Label>
        <Select value={paymentMethod}>
          <option>指名競争入札</option>
          {/* options */}
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>納期年月日</Label>
        <Input type="text" value={contractEndDate} />
      </InputGroup>
      <InputGroup>
        <Label>支払回数</Label>
        <Input type="number" value={contractTerm} />
      </InputGroup>
      <InputGroup>
        <Label>自由設定内容</Label>
        <TextArea />
      </InputGroup>
      <InputGroup>
        <Label>摘要</Label>
        <Input type="text" value={notes} />
      </InputGroup>
      <InputGroup>
        <Label>相手先</Label>
        <Input type="text" value={contractorName} />
      </InputGroup>
      <InputGroup>
        <Label>相手先略名</Label>
        <Input type="text" value={contractorCode} />
      </InputGroup>
      <Button>OK</Button>
      <Button>クリア</Button>
      <Button>終了</Button>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const contractData: ContractInputProps = {
    fiscalYear: '令和29年08月17日',
    contractYear: '29',
    contractMonth: '08',
    contractStartDate: '29',
    contractEndDate: '平成29年08月17日',
    paymentMethod: '指名競争入札',
    contractTerm: 5,
    autoRenewalFlag: false,
    notes: '備考欄備考',
    contractorCode: 'ぎょうせい',
    contractorName: 'ぎょうせいコンサル',
  };

  return (
    <div>
      <ContractInput {...contractData} />
    </div>
  );
};

export default App;