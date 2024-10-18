import React from 'react';
import styled from '@emotion/styled';

// 貸借対照表ファイルコピーコンポーネントのプロパティ型定義
type LoanBalanceFileProps = {
  currentFiscalYear: number; // 今年度
  previousFiscalYear: number; // 前年度
  onSubmit: (selectedYear: number) => void; // 送信ボタンクリック時のイベントハンドラ
};

// 貸借対照表ファイルコピーコンポーネント
const LoanBalanceFileCopy: React.FC<LoanBalanceFileProps> = ({
  currentFiscalYear,
  previousFiscalYear,
  onSubmit,
}) => {
  const [selectedYear, setSelectedYear] = React.useState(currentFiscalYear);

  // 送信ボタンクリック時の処理
  const handleSubmit = () => {
    onSubmit(selectedYear);
  };

  return (
    <Container>
      <Title>貸借対照表貸借対照表ファイルコピー</Title>
      <Field>
        <Label>会計年度</Label>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
          <option value={currentFiscalYear}>{currentFiscalYear}年度</option>
          <option value={previousFiscalYear}>{previousFiscalYear}年度</option>
        </Select>
      </Field>
      <CopyField>
        <Label>集計表区分コード（コピー元）</Label>
        <Input />
      </CopyField>
      <CopyField>
        <Label>集計表区分コード（コピー先）</Label>
        <Input />
      </CopyField>
      <Note>
        両面指定された「集計表区分コード（コピー元）」から、
        「集計表区分コード（コピー先）」のデータを作成します。
        集計表区分コードは「A0-Z9」の範囲で指定してください。
        ご利用下さい。
        <br />
        注意）両面指定された「集計表区分コード（コピー先）」が
        既にマスタに存在する場合、メッセージを表示します。
        既に存在するデータに上書きをしても良い場合は、
「はい」を選択してください。
      </Note>
      <ButtonGroup>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (selectedYear: number) => {
    console.log(`Submit: ${selectedYear}`);
  };

  return (
    <LoanBalanceFileCopy
      currentFiscalYear={2023}
      previousFiscalYear={2022}
      onSubmit={handleSubmit}
    />
  );
};

// styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CopyField = styled(Field)`
  margin-bottom: 5px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100px;
`;

const Note = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  min-width: 100px;
`;

export default LoanBalanceFileCopy;