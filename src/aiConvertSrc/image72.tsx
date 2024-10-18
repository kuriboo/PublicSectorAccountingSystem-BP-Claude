import React from 'react';
import styled from 'styled-components';

type DistrictProps = {
  prefecture: string;
  receiptNumber: string;
  applicationDate: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const District: React.FC<DistrictProps> = ({
  prefecture = '東京都',
  receiptNumber = '00000000',
  applicationDate = '平成29年09月05日',
}) => {
  return (
    <Container>
      <Row>
        <Label>年度:</Label>
        <Select defaultValue="29">
          <option value="28">平成28</option>
          <option value="29">平成29</option>
        </Select>
        <Label>受付区分:</Label>
        <Select defaultValue="新規">
          <option value="新規">新規</option>
          <option value="変更">変更</option>
        </Select>
      </Row>
      <Row>
        <Label>落札者印字:</Label>
        <Input type="radio" name="printBidder" /> 有 <Input type="radio" name="printBidder" defaultChecked /> 無
      </Row>
      <Row>
        <Label>受付番号</Label>
        <Input type="text" defaultValue={receiptNumber} />
        <Label>～</Label>
        <Input type="text" defaultValue="99999999" />
      </Row>
      <Row>
        <Label>入札年月日</Label>
        <Input type="text" defaultValue={applicationDate} />
        <Label>～</Label>
        <Input type="text" defaultValue="平成29年09月06日" />
      </Row>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>入札結果一覧表</h1>
      <District />
    </div>
  );
};

export default App;