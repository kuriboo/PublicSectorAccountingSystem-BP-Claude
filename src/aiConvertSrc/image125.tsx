import React from 'react';
import styled from '@emotion/styled';

type Unit = '000' | '単価';

interface RowData {
  code: string;
  name: string;
}

interface MasterMaintenanceProps {
  title: string;
  data: RowData[];
  addRowText?: string;
  deleteRowText?: string;
  prevButtonText?: string;
  nextButtonText?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  closeButtonText?: string;
}

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({
  title,
  data,
  addRowText = '行追加',
  deleteRowText = '削除',
  prevButtonText = '前データ',
  nextButtonText = '次データ',
  okButtonText = 'OK',
  cancelButtonText = 'クリア',
  closeButtonText = '終了',
}) => {
  // State to manage the selected unit
  const [unit, setUnit] = React.useState<Unit>('000');

  return (
    <Container>
      <Title>{title}</Title>
      <RadioGroup>
        <RadioButton
          type="radio"
          checked={unit === '000'}
          onChange={() => setUnit('000')}
        />
        <RadioLabel>000</RadioLabel>
        <RadioButton
          type="radio"
          checked={unit === '単価'}
          onChange={() => setUnit('単価')}
        />
        <RadioLabel>単価</RadioLabel>
      </RadioGroup>
      <Table>
        <thead>
          <Row>
            <HeaderCell>コード</HeaderCell>
            <HeaderCell>名称</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <Row key={index}>
              <Cell>{row.code}</Cell>
              <Cell>{row.name}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button>{addRowText}</Button>
        <Button>{deleteRowText}</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>{prevButtonText}</Button>
        <Button>{nextButtonText}</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button primary>{okButtonText}</Button>
        <Button>{cancelButtonText}</Button>
      </ButtonGroup>
      <CloseButton>{closeButtonText}</CloseButton>
    </Container>
  );
};

// Sample data for demonstration
const sampleData: RowData[] = [
  { code: '001', name: '単価設置大分類' },
];

// Usage example
const App: React.FC = () => {
  return (
    <MasterMaintenance
      title="単価性質マスタ"
      data={sampleData}
    />
  );
};

export default App;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const HeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Cell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  border-color: #dc3545;
  color: #fff;
`;