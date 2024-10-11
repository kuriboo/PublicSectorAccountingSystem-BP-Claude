import React from 'react';
import styled from 'styled-components';

// 資産明細データの型定義
type AssetBreakdownItem = {
  name: string;
  amount: number;
  unit: string;
  subtotal: number;
};

type AssetBreakdownProps = {
  items: AssetBreakdownItem[];
  date: string;
  totalAmount: number;
  onCancel: () => void;
  onSubmit: () => void;
};

const AssetBreakdown: React.FC<AssetBreakdownProps> = ({ 
  items,
  date,
  totalAmount,
  onCancel,
  onSubmit
}) => {
  return (
    <Container>
      <Header>
        <Label>資産番号</Label>
        <Value>{items[0]?.subtotal || 0}</Value>
        <Label>資産名称</Label>
        <Value>{items[0]?.name || '---'}</Value>
        <Label>更正後総額</Label>
        <Value>{totalAmount.toLocaleString()}</Value>
      </Header>
      
      <Table>
        <thead>
          <tr>
            <Th>行番号</Th>
            <Th>構造内容</Th>
            <Th>現在数量</Th>
            <Th>単位</Th>
            <Th>現在金額</Th>
            <Th>更正後数量</Th>
            <Th>更正後金額</Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{item.amount.toLocaleString()}</Td>
              <Td>{item.unit}</Td>
              <Td>{item.subtotal.toLocaleString()}</Td>
              <Td>
                <Input type="number" defaultValue={item.amount} />
              </Td>
              <Td>
                <Input type="number" defaultValue={item.subtotal} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button primary onClick={onSubmit}>OK</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
`;

const Td = styled.td``;

const Input = styled.input`
  width: 100px;
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${props => props.primary ? '#007bff' : '#f0f0f0'}; 
  color: ${props => props.primary ? '#fff' : '#333'};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData: AssetBreakdownItem[] = [
  { name: '構造内容1', amount: 1.001, unit: '1', subtotal: 15000000 },
];

// 表示用コンポーネント
const AssetBreakdownExample: React.FC = () => {
  const handleCancel = () => {
    console.log('キャンセルがクリックされました');
  };

  const handleSubmit = () => {
    console.log('OKがクリックされました');
  };

  return (
    <AssetBreakdown
      items={sampleData}
      date="4161.2800"
      totalAmount={15000000}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};

export default AssetBreakdownExample;