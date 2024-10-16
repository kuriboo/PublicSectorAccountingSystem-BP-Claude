import React from 'react';
import styled from 'styled-components';

// 材料コードと名称の型定義
type MaterialData = {
  code: string;
  name: string;
};

// コンポーネントのプロパティ型定義
type MasterMaintenanceProps = {
  title: string;
  data: MaterialData[];
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  overflow-y: auto;
  max-height: 400px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #d0d0d0;
  padding: 5px;
  text-align: center;
  border: 1px solid #c0c0c0;
`;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #c0c0c0;
`;

/**
 * マスタメンテナンス画面のメインコンポーネント
 */
const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>材料コード</TableHeader>
              <TableHeader>名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.name}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: MaterialData[] = [
  { code: '001:01:03:0000:0000:0003', name: '検査手数料' },
  { code: '001:01:03:0000:0000:0003', name: '検査場使用料' },
  { code: '001:01:03:0000:0400:003', name: '給水装置修繕工事' },
  { code: '001:01:03:0000:0500:003', name: '給装修繕・不納税' },
  { code: '002:01:0437:0007:0001', name: '福利厚生費・課税' },
  { code: '002:01:0437:0009:0001', name: '福利厚生費・非課' },
  { code: '002:01:0437:0010:0001', name: '福利厚生費・不課' },
  { code: '002:01:0437:0088:0001', name: '流用／厚生費' },
  { code: '002:01:0437:0091:0001', name: 'その他厚生費・課' },
  { code: '002:01:0437:0092:0001', name: 'その他厚生費・非' },
  { code: '002:01:0437:0093:0001', name: 'その他厚生費・不' },
  { code: '002:01:0438:0001:0001', name: '回体保険料' },
  { code: '002:01:0438:0088:0001', name: '流用／団体保険料' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <MasterMaintenance title="重要契約一覧表出力用マスタ" data={sampleData} />
    </div>
  );
};

export default App;