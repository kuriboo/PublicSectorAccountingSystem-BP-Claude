import React from 'react';
import styled from '@emotion/styled';

type OutgoingInvoiceSearchProps = {
  onSearch: () => void;
  onClear: () => void;
  onClose: () => void;
};

const OutgoingInvoiceSearch: React.FC<OutgoingInvoiceSearchProps> = ({
  onSearch,
  onClear,
  onClose,
}) => {
  return (
    <Container>
      <Title>出納受渡解除入力</Title>
      <Form>
        <Row>
          <Label>支払予定日</Label>
          <Input type="text" placeholder="平成29年09月06日" />
          <span>~</span>
          <Input type="text" placeholder="平成29年09月06日" />
        </Row>
        <Row>
          <Label>起票所属</Label>
          <Input type="text" placeholder="所属" />
        </Row>
        <Row>
          <Label>支払方法</Label>
          <Input type="checkbox" id="bank" />
          <label htmlFor="bank">口座振込</label>
          <Input type="checkbox" id="cash" defaultChecked />
          <label htmlFor="cash">窓口払い</label>
          <span>まで</span>
        </Row>
        <Row>
          <span>明細照会</span>
          <Button type="button">解除</Button>
          <Input type="checkbox" id="partial" />
          <label htmlFor="partial">全選択</label>
        </Row>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>決定番号/所</th>
            <th>支払先</th>
            <th>摘要</th>
            <th>決定額</th>
            <th>支払日</th>
            <th>処理年月日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>114/所 ぎょうせい口</td>
            <td>連絡の購入</td>
            <td>連絡の購入</td>
            <td>1,080</td>
            <td>29/09/06</td>
            <td>29/09/06</td>
          </tr>
          <tr>
            <td>115/所 ぎょうせい口</td>
            <td>書籍の購入</td>
            <td>書籍の購入</td>
            <td>1,080</td>
            <td>29/09/06</td>
            <td>29/09/06</td>
          </tr>
          <tr>
            <td>116/所 ぎょうせい口</td>
            <td>書籍の購入</td>
            <td>書籍の購入</td>
            <td>12,340</td>
            <td>29/09/06</td>
            <td>29/09/06</td>
          </tr>
          <tr>
            <td>117/所 ぎょうせい事</td>
            <td>事務用消耗品</td>
            <td></td>
            <td>5,980</td>
            <td>29/09/06</td>
            <td>29/09/06</td>
          </tr>
        </tbody>
      </Table>
      <ButtonGroup>
        <Button type="button" onClick={onSearch}>表示</Button>
        <Button type="button" onClick={onClear}>クリア</Button>
        <Button type="button" onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: 'Meiryo UI', 'MS UI Gothic', 'MS PGothic', sans-serif;
  font-size: 11px;
  background-color: #f0f0f0;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 13px;
  color: white;
  background-color: #1e2e84; 
  margin: 0;
  padding: 5px 10px;
`;

const Form = styled.form`
  margin: 10px 0;
`;

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  span {
    margin: 0 5px;
  }
`;

const Label = styled.label`
  width: 120px;
`;

const Input = styled.input`
  padding: 2px;
`;

const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  padding: 1px 10px;
  margin-right: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }
  
  th {
    background-color: #ddd;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 10px;
  text-align: center;
`;

// Sample usage
const App: React.FC = () => {
  const handleSearch = () => {
    // Handle search
  };

  const handleClear = () => {
    // Handle clear  
  };
  
  const handleClose = () => {
    // Handle close
  };

  return (
    <OutgoingInvoiceSearch 
      onSearch={handleSearch}
      onClear={handleClear}  
      onClose={handleClose}
    />
  );
}

export default App;