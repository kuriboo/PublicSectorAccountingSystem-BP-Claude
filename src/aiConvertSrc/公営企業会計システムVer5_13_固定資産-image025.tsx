import React from 'react';
import styled from '@emotion/styled';

type ItemDetail = {
  管理名称: string;
  管理規格名称: string;
  規格数量: number;
  除却数量: number;
  単位: string;
  現在金額: number;
  除却金額: number;
};

type AssetTableProps = {
  資産番号: string;
  資産名称: string;
  ノイズカット調水塔知機: string;
  除却額: number;
  管理明細: ItemDetail[];
};

const AssetTable: React.FC<AssetTableProps> = ({
  資産番号,
  資産名称,
  ノイズカット調水塔知機,
  除却額,
  管理明細,
}) => {
  return (
    <Container>
      <Header>
        <Label>資産番号</Label>
        <Value>{資産番号}</Value>
        <Label>資産名称</Label>
        <Value>{資産名称}</Value>
        <Label>ノイズカット調水塔知機</Label>
        <Value>{ノイズカット調水塔知機}</Value>
        <Label>除却額</Label>
        <Value>{除却額.toLocaleString()}</Value>
      </Header>
      <Table>
        <TableHeader>
          <HeaderCell>管理名称</HeaderCell>
          <HeaderCell>管理規格名称</HeaderCell>
          <HeaderCell>規格数量</HeaderCell>
          <HeaderCell>除却数量</HeaderCell>
          <HeaderCell>単位</HeaderCell>
          <HeaderCell>現在金額</HeaderCell>
          <HeaderCell>除却金額</HeaderCell>
        </TableHeader>
        <TableBody>
          {管理明細.map((item, index) => (
            <TableRow key={index}>
              <Cell>{item.管理名称}</Cell>
              <Cell>{item.管理規格名称}</Cell>
              <Cell>{item.規格数量}</Cell>
              <Cell>{item.除却数量}</Cell>
              <Cell>{item.単位}</Cell>
              <Cell>{item.現在金額.toLocaleString()}</Cell>
              <Cell>{item.除却金額.toLocaleString()}</Cell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <FooterCell colSpan={5}>除却金額計</FooterCell>
          <FooterCell colSpan={2}>{除却額.toLocaleString()}</FooterCell>
        </TableFooter>
      </Table>
      <Footer>
        <Label>管理明細</Label>
        <FooterValue>
          <Label>管理名称コード</Label>
          <Value>001091</Value>
          <Value>ノイズカット調水塔知機</Value>
        </FooterValue>
        <FooterValue>
          <Label>管理規格コード</Label>
          <Value>889981</Value>
        </FooterValue>
        <FooterValue>
          <Label>規格数量</Label>
          <Value>1.00</Value>
          <Label>除却数量</Label>
          <Value>
            <input type="number" defaultValue={1} />
          </Value>
        </FooterValue>
        <FooterValue>
          <Label>単位</Label>
          <Value>台</Value>
        </FooterValue>
        <FooterValue>
          <Label>現在金額</Label>
          <Value>720,000</Value>
          <Label>除却金額</Label>
          <Value>20,000</Value>
        </FooterValue>
      </Footer>
    </Container>
  );
};

// Sample data for displaying the component
const sampleData: AssetTableProps = {
  資産番号: '7481200',
  資産名称: '資産名称',
  ノイズカット調水塔知機: 'ノイズカット調水塔知機',
  除却額: 20000,
  管理明細: [
    {
      管理名称: 'ノイズカット調水塔知機',
      管理規格名称: '',
      規格数量: 1.0,
      除却数量: 1.0,
      単位: '台',
      現在金額: 720000,
      除却金額: 20000,
    },
  ],
};

const SampleAssetTable: React.FC = () => {
  return <AssetTable {...sampleData} />;
};

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-right: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const FooterCell = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ccc;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterValue = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default AssetTable;