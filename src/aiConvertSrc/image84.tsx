import React, { useState } from 'react';
import styled from '@emotion/styled';

type CSVConversionProps = {
  selectedEncoding?: 'auto' | 'sjis' | 'eucjp' | 'utf8';
  onConvert: (csvData: string, systemData: string, reservedArea: string) => void;
};

const CSVConversion: React.FC<CSVConversionProps> = ({ selectedEncoding = 'auto', onConvert }) => {
  const [csvData, setCsvData] = useState('');
  const [systemData, setSystemData] = useState('');
  const [reservedArea, setReservedArea] = useState('');

  const handleConvert = () => {
    onConvert(csvData, systemData, reservedArea);
  };

  return (
    <Container>
      <Title>CSV連携データ変換マスタ保守</Title>
      <DataArea>
        <Label>列番号</Label>
        <DataInput value={csvData} onChange={(e) => setCsvData(e.target.value)} />
        <Label>CSVデータ</Label>
        <DataInput value={systemData} onChange={(e) => setSystemData(e.target.value)} />
        <Label>システムデータ</Label>
        <DataInput value={reservedArea} onChange={(e) => setReservedArea(e.target.value)} />
        <ButtonArea>
          <Button onClick={handleConvert}>OK</Button>
          <Button>クリア</Button>
          <Button>終了</Button>
        </ButtonArea>
      </DataArea>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DataArea = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const DataInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonArea = styled.div`
  grid-column: 1 / 3;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleConvert = (csvData: string, systemData: string, reservedArea: string) => {
    console.log('CSVデータ:', csvData);
    console.log('システムデータ:', systemData);
    console.log('予備:', reservedArea);
    // Perform conversion logic here
  };

  return (
    <div>
      <CSVConversion onConvert={handleConvert} />
    </div>
  );
};

export default App;