import React from 'react';
import styled from 'styled-components';

// 給与支払確定解除入力画面のプロパティ型定義
type PayrollConfirmCancelInputProps = {
  payrollDate: string;
  onPayrollDateChange: (date: string) => void;
  onSearch: () => void;
  dataSource: Array<{
    id: number;
    department: string;
    payrollAmount: number;
    payrollItemCount: number;
    payrollPeople: number;
    expectedPaymentDate: string;
    note: string;
  }>;
};

// 給与支払確定解除入力画面のコンポーネント
const PayrollConfirmCancelInput: React.FC<PayrollConfirmCancelInputProps> = ({
  payrollDate,
  onPayrollDateChange,
  onSearch,
  dataSource,
}) => {
  return (
    <Container>
      <Header>
        <Title>給与支払確定解除入力</Title>
        <Annotation>※支払済(押し金)支払データから必ず解除してください。</Annotation>
      </Header>
      <InputArea>
        <RadioGroup>
          <Radio type="radio" id="paid" name="payrollType" value="paid" defaultChecked />
          <label htmlFor="paid">給与支払データ</label>
          <Radio type="radio" id="deposit" name="payrollType" value="deposit" />
          <label htmlFor="deposit">押済分(押し金)支払データ</label>  
        </RadioGroup>
        <PayrollDateInput
          type="date"
          value={payrollDate}
          onChange={(e) => onPayrollDateChange(e.target.value)}  
        />
        <SearchButton onClick={onSearch}>表示</SearchButton>
      </InputArea>
      <TableContainer>
        <TableHeader>
          <Row>
            <HeaderCell>決定番号</HeaderCell>
            <HeaderCell>支払先</HeaderCell>  
            <HeaderCell>摘要</HeaderCell>
            <HeaderCell>決定額</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {dataSource.map((data) => (
            <Row key={data.id}>
              <Cell>{data.id}</Cell>
              <Cell>{data.department}</Cell>
              <Cell>{data.note}</Cell>  
              <Cell>{data.payrollAmount.toLocaleString()}</Cell>
            </Row>
          ))}
        </TableBody>
      </TableContainer>
      <ExplanationArea>
        <Row>
          <Cell>集合収納番号</Cell>  
          <Cell>摘要</Cell>
          <Cell>収納金額</Cell>
          <Cell>内消費税額</Cell>  
          <Cell>領収払人</Cell>
          <Cell />
        </Row>  
      </ExplanationArea>
      <ButtonGroup>
        <Button>OK</Button>  
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 表示用のサンプルデータ
const sampleData = [
  {
    id: 1,
    department: '総務部',
    payrollAmount: 1000000,
    payrollItemCount: 20,
    payrollPeople: 10,
    expectedPaymentDate: '2023-06-30',
    note: '6月分給与',
  },
  {
    id: 2,  
    department: '営業部',
    payrollAmount: 2000000,
    payrollItemCount: 30,
    payrollPeople: 15,
    expectedPaymentDate: '2023-06-30',
    note: '6月分給与',
  },
];

// 表示用のコンポーネント
const App: React.FC = () => {
  const [payrollDate, setPayrollDate] = React.useState('2023-06-01');
  const [dataSource, setDataSource] = React.useState(sampleData);

  const handlePayrollDateChange = (date: string) => {
    setPayrollDate(date);
  };

  const handleSearch = () => {
    // 実際は検索ロジックを実装
    console.log('検索');
  };

  return (
    <PayrollConfirmCancelInput
      payrollDate={payrollDate}
      onPayrollDateChange={handlePayrollDateChange}
      onSearch={handleSearch}
      dataSource={dataSource}
    />
  );  
};

// スタイルコンポーネント
const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 16px;  
`;

const Annotation = styled.p`
  margin: 0;
  font-size: 12px;
  color: #f00;
`;

const InputArea = styled.div`
  display: flex; 
  align-items: center;
  margin-top: 16px;
`;

const RadioGroup = styled.div`
  margin-right: 16px;  
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const PayrollDateInput = styled.input`
  margin-right: 16px;  
`;

const SearchButton = styled.button``;

const TableContainer = styled.table`
  margin-top: 16px;   
  width: 100%;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const HeaderCell = styled.th`
  padding: 4px;
`;

const Cell = styled.td`
  padding: 4px;  
`;

const ExplanationArea = styled.div`
  margin-top: 16px;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;  
  text-align: center;
`;

const Button = styled.button`
  margin-right: 8px;
`;

export default App;