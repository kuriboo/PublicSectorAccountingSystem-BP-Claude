以下は、画像を元にしたNext.js + TypeScriptのコンポーネントのコード例です。

import React from 'react';
import styled from '@emotion/styled';

// 区分名称マスタのデータ型定義
interface MasterData {
  code: string;
  name: string;
}

// コンポーネントのプロパティ型定義
interface MasterMaintenanceProps {
  title: string;
  data: MasterData[];
}

// スタイルコンポーネント定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const RadioGroup = styled.div`
  margin-bottom: 16px;
`;

const CodeInput = styled.input`
  margin-bottom: 16px;
  padding: 4px;
`;

const NameInput = styled.input`
  margin-bottom: 16px;
  padding: 4px;
  width: 200px;
`;

const TableContainer = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RadioGroup>
        <label>
          <input type="radio" name="category" value="company" /> 保管場所マスタ
        </label>
        <label>
          <input type="radio" name="category" value="store" /> 貯蔵入力区分マスタ
        </label>
        <label>
          <input type="radio" name="category" value="model" /> 評価方法区分マスタ
        </label>
      </RadioGroup>
      <div>
        <label>
          コード
          <CodeInput type="text" />
        </label>
      </div>
      <div>
        <label>
          名称
          <NameInput type="text" />
        </label>
      </div>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>コード</TableHeader>
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
const sampleData: MasterData[] = [
  { code: '000001', name: '保管場所格納庫' },
  { code: '000002', name: '保管場所A' },
  { code: '000003', name: '保管場所B' },
  { code: '000004', name: '倉庫' },
];

// 使用例
const UsageExample: React.FC = () => {
  return <MasterMaintenance title="区分名称マスタ保守" data={sampleData} />;
};

export default MasterMaintenance;

このコンポーネントは、区分名称マスタの保守画面を表現しています。
タイトル、ラジオボタンでのカテゴリ選択、コードと名称の入力欄、マスタデータの一覧表示を含んでいます。
プロパティとして`title`と`data`を受け取り、それぞれタイトルとマスタデータを指定できます。
スタイリングにはCSS-in-JSライブラリの`@emotion/styled`を使用し、レスポンシブデザインを考慮しています。
`UsageExample`コンポーネントでは、サンプルデータを用いてコンポーネントの使用例を示しています。