import React, { useState } from 'react';
import styled from 'styled-components';

// 単価名称データの型定義
type PriceNameData = {
  code: string;
  name: string;
  abbreviation: string;
};

// 単価名称マスタのプロパティ型定義
type PriceNameMasterProps = {
  data: PriceNameData[];
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem;
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none; 
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

/**
 * 単価名称マスタコンポーネント
 */
const PriceNameMaster: React.FC<PriceNameMasterProps> = ({ data }) => {
  const [priceNameCode, setPriceNameCode] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // 単価名称コードの入力変更時の処理
  const handlePriceNameCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceNameCode(e.target.value);
  };

  // 表示ボタンクリック時の処理
  const handleDisplayButtonClick = () => {
    // 単価名称コードでデータをフィルタリング
    const newFilteredData = data.filter(d => d.code.startsWith(priceNameCode));
    setFilteredData(newFilteredData);
  };

  return (
    <Container>
      <div>
        単価名称コード:
        <Input type="text" value={priceNameCode} onChange={handlePriceNameCodeChange} />
        <Button onClick={handleDisplayButtonClick}>表示</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>名称</TableHeader>
            <TableHeader>略称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(d => (
            <tr key={d.code}>
              <TableData>{d.name}</TableData>
              <TableData>{d.abbreviation}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを使用した使用例
const App: React.FC = () => {
  const sampleData: PriceNameData[] = [
    { code: '00001', name: 'DIP(A1)顆粒管', abbreviation: 'DIP(A1)' },
    { code: '00002', name: 'DIP(-S)顆粒管', abbreviation: 'DIP(-S)' },
    { code: '00003', name: '水道用黒鋼管', abbreviation: '水道用黒鋼管' },
    { code: '00004', name: 'DIP(A3E)顆粒管', abbreviation: 'DIP(A3E)' },
    { code: '00005', name: 'DAL-十字管', abbreviation: 'DAL-十字管' },
  ];

  return <PriceNameMaster data={sampleData} />;
};

export default App;