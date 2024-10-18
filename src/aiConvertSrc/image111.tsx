import React from 'react';
import styled from '@emotion/styled';

// 型定義
type AssetManagementSystemProps = {
  data: {
    code: string;
    name: string;
    details: string;
    headers: string[];
    rows: string[][];
  };
};

// スタイル定義
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DataHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DataLabel = styled.div`
  width: 80px;
  font-weight: bold;
`;

const DataValue = styled.div`
  flex: 1;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// メインコンポーネント
const AssetManagementSystem: React.FC<AssetManagementSystemProps> = ({ data }) => {
  const { code, name, details, headers, rows } = data;

  return (
    <Container>
      <Title>アセットマネジメント用語マスタ</Title>
      <DataHeader>
        <DataLabel>項目番号</DataLabel>
        <DataValue>{code}</DataValue>
      </DataHeader>
      <DataHeader>
        <DataLabel>明細番号</DataLabel>
        <DataValue>{name}</DataValue>
      </DataHeader>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <div>
        <DataLabel>明細編集</DataLabel>
        {/* 入力フィールドを生成 */}
        {headers.slice(1).map((header, index) => (
          <div key={index}>
            <DataLabel>{header}</DataLabel>
            <input type="text" />
          </div>
        ))}
      </div>
      <ButtonContainer>
        <Button>行確定</Button>
        <Button>行キャンセル</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  code: '000007',
  name: '詳細区分1コード',
  details: '行削除',
  headers: ['用語番号', '名称1', '内容1', '内容2', '内容3', '内容4', '内容5'],
  rows: [
    ['1', 'I 運地盤', '', '', '', '', ''],
    ['2', 'II 運地盤', '', '', '', '', ''],
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>アセットマネジメントシステム</h1>
      <AssetManagementSystem data={sampleData} />
    </div>
  );
};

export default App;