import React from 'react';
import styled from '@emotion/styled';

// 水道事業会計の設定値の型定義
type WaterworksAccountingSettings = {
  fiscalYear: number;
  budgetCode: string;
  accountTitle: string;
};

// 査定開始解除入力コンポーネントのプロパティ型定義
type AssessmentStartCancellationInputProps = {
  settings: WaterworksAccountingSettings[];
};

// 査定開始解除入力コンポーネント
const AssessmentStartCancellationInput: React.FC<AssessmentStartCancellationInputProps> = ({ settings }) => {
  // 予算コード欄の入力値
  const [budgetCodeInput, setBudgetCodeInput] = React.useState('');

  // 水道事業会計の設定値をフィルタリングする関数
  const filterSettings = (inputValue: string) => {
    return settings.filter(setting => 
      setting.budgetCode.includes(inputValue)
    );
  };

  return (
    <Container>
      <Title>査定開始解除入力</Title>
      <InputRow>
        <Label>予算コード欄：</Label>
        <Input
          type="text"
          value={budgetCodeInput}
          onChange={e => setBudgetCodeInput(e.target.value)}
        />
        <Button>検索照会</Button>
      </InputRow>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>予算コード</TableHeaderCell>
              <TableHeaderCell>当初予算(見積額)</TableHeaderCell>
              <TableHeaderCell>査定額</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterSettings(budgetCodeInput).map(setting => (
              <TableRow key={setting.budgetCode}>
                <TableCell>{setting.budgetCode}</TableCell>
                <TableCell>{setting.accountTitle}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonRow>
        <Button>ＯＫ</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータ
const sampleSettings: WaterworksAccountingSettings[] = [
  {
    fiscalYear: 2023,
    budgetCode: '0000001',
    accountTitle: '水道課',
  },
  {
    fiscalYear: 2023,
    budgetCode: '0000002',
    accountTitle: '総務課',
  },
  {
    fiscalYear: 2023, 
    budgetCode: '0000003',
    accountTitle: '出納室',
  },
  {
    fiscalYear: 2023,
    budgetCode: '9999999',
    accountTitle: '最新情報',
  },
];

// サンプル表示用コンポーネント 
const App: React.FC = () => {
  return (
    <AssessmentStartCancellationInput settings={sampleSettings} />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;  
  border: 1px solid #ccc;
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  text-align: right;

  button {
    margin-left: 8px;
  }  
`;

export default App;