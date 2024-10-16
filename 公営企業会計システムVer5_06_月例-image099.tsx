// キャッシュフロー月次予定額入力コンポーネント
import React from 'react';
import styled from 'styled-components';

type Item = {
  id: number;
  name: string;
  currentMonthBudget: number;
  nextMonthBudget: number;
};

type Props = {
  items: Item[];
  onCurrentMonthBudgetChange: (id: number, value: number) => void;
  onNextMonthBudgetChange: (id: number, value: number) => void;
  onSave: () => void;
  onCancel: () => void;
};

const CashFlowMonthlyBudgetInput: React.FC<Props> = ({
  items,
  onCurrentMonthBudgetChange,
  onNextMonthBudgetChange,
  onSave,
  onCancel,
}) => {
  return (
    <Wrapper>
      <Heading>キャッシュ・フロー月次予定額入力</Heading>
      <Table>
        <thead>
          <tr>
            <TableHeader>集計番号</TableHeader>
            <TableHeader>項目名称</TableHeader>
            <TableHeader>当月金額</TableHeader>
            <TableHeader>翌々月金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.currentMonthBudget}
                  onChange={(e) =>
                    onCurrentMonthBudgetChange(item.id, Number(e.target.value))
                  }
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.nextMonthBudget}
                  onChange={(e) =>
                    onNextMonthBudgetChange(item.id, Number(e.target.value))
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Footer>
        <Button onClick={onSave}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>終了</Button>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
`;

const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: right;
`;

const TableRow = styled.tr``;

const Input = styled.input`
  width: 100px;
  padding: 4px;
`;

const Footer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  font-size: 14px;
`;

// サンプルデータと使用例
const sampleData: Item[] = [
  { id: 5, name: '業務活動による\nキャッシュ・フロー', currentMonthBudget: 0, nextMonthBudget: 0 },
  { id: 10, name: '当年度純利益', currentMonthBudget: 0, nextMonthBudget: 0 },
  // ... 他のデータ
];

const SampleUsage: React.FC = () => {
  const handleSave = () => {
    console.log('Saved');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  const handleCurrentMonthBudgetChange = (id: number, value: number) => {
    console.log(`Current month budget changed for item ${id}: ${value}`);
  };

  const handleNextMonthBudgetChange = (id: number, value: number) => {
    console.log(`Next month budget changed for item ${id}: ${value}`);
  };

  return (
    <CashFlowMonthlyBudgetInput
      items={sampleData}
      onSave={handleSave}
      onCancel={handleCancel}
      onCurrentMonthBudgetChange={handleCurrentMonthBudgetChange}
      onNextMonthBudgetChange={handleNextMonthBudgetChange}
    />
  );
};

export default CashFlowMonthlyBudgetInput;