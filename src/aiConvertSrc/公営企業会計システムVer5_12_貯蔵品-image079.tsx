import React from 'react';
import styled from 'styled-components';

// 棚卸入出庫伝票作成コンポーネントのプロパティ型定義
type InventoryTransferProps = {
  date: string;
  transferOutLocation?: string;
  transferOutCode?: string;
  transferInLocation?: string;
  transferInCode?: string;
  onCancel?: () => void;
  onClear?: () => void;
  onSubmit?: () => void;
};

// 棚卸入出庫伝票作成コンポーネント
const InventoryTransfer: React.FC<InventoryTransferProps> = ({
  date,
  transferOutLocation = '',
  transferOutCode = '',
  transferInLocation = '',
  transferInCode = '',
  onCancel,
  onClear,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>棚卸入出庫伝票作成</Title>
      <DateRow>
        <Label>棚卸年月日</Label>
        <span>{date}</span>
      </DateRow>
      <Table>
        <TableHeader>
          <Row>
            <HeaderCell />
            <HeaderCell>管理者</HeaderCell>
            <HeaderCell>倉庫コード</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          <Row>
            <RowHeader>入庫決裁</RowHeader>
            <Cell>{transferOutLocation}</Cell>
            <Cell>
              <Input value={transferOutCode} readOnly />
            </Cell>
          </Row>
          <Row>
            <RowHeader>出庫決裁</RowHeader>
            <Cell>{transferInLocation}</Cell>
            <Cell>
              <Input value={transferInCode} readOnly />
            </Cell>
          </Row>
        </TableBody>
      </Table>
      <ButtonRow>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button primary onClick={onSubmit}>
          終了
        </Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <InventoryTransfer
      date="平成29年09月14日"
      transferOutLocation="管理者 予物"
      transferOutCode="00001"
      transferInLocation="管理者 予物"
      transferInCode="999999"
      onCancel={() => console.log('キャンセルがクリックされました')}
      onClear={() => console.log('クリアがクリックされました')}
      onSubmit={() => console.log('終了がクリックされました')}
    />
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const DateRow = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.span`
  margin-right: 8px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #e0e0e0;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const RowHeader = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
  background-color: #e0e0e0;
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonRow = styled.div`
  text-align: right;
`;

const Button = styled.button<{ primary?: boolean }>`
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#e0e0e0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default InventoryTransfer;