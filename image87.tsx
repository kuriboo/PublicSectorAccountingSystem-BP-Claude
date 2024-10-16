import React from 'react';
import styled from 'styled-components';

type SelectionMode = '業者情報取り込み' | '入札結果取り込み';

interface CSVImporterProps {
  onImport: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  onReturn: () => void;
}

const CSVImporter: React.FC<CSVImporterProps> = ({
  onImport,
  onCancel,
  onSubmit,
  onReturn,
}) => {
  const [selectionMode, setSelectionMode] = React.useState<SelectionMode>('入札結果テーブル');

  return (
    <Container>
      <Header>
        <Title>CSV連携 - 時格納保守</Title>
        <Info>行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎 平成29年09月05日</Info>
      </Header>
      <Content>
        <RadioGroup>
          <Label>
            <Radio
              type="radio"
              checked={selectionMode === '業者情報取り込み'}
              onChange={() => setSelectionMode('業者情報取り込み')}
            />
            業者情報取り込み
          </Label>
          <Label>
            <Radio
              type="radio"
              checked={selectionMode === '入札結果取り込み'}
              onChange={() => setSelectionMode('入札結果取り込み')}
            />
            入札結果取り込み
          </Label>
        </RadioGroup>
        <RadioInfo>一時格納テーブル: {selectionMode}</RadioInfo>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>行番号</th>
              <th>行内容</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Info>※一覧に直接書き込んで下さい。</Info>
      </Content>
      <Footer>
        <Button onClick={onImport}>CSV出力</Button>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onReturn}>終了</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 8px;
`;

const Info = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RadioGroup = styled.div`
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 16px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const RadioInfo = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 8px;
  border-collapse: collapse;

  th, td {
    padding: 4px;
    border: 1px solid #ccc;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// Usage example
const SampleData: CSVImporterProps = {
  onImport: () => console.log('CSV exported'),
  onCancel: () => console.log('Cleared'), 
  onSubmit: () => console.log('Submitted'),
  onReturn: () => console.log('Returned'),
};

const App: React.FC = () => {
  return (
    <div>
      <h1>CSV Importer Sample</h1>
      <CSVImporter {...SampleData} />
    </div>
  );  
};

export default App;