import React from 'react';
import styled from 'styled-components';

// 資産情報の型定義
type AssetInfo = {
  assetName: string; // 資産名
  amount: number; // 金額
  shisan: number; // 資産部号
  kijun: string; // 基準
  kaiteimae: number; // 管理番号
  kaiteiato: number; // 管理後番号
  soshiki: string; // 所属
  place: string; // 場所
  date: string; // 取得年月日
  name: string; // 名称
  use: string; // 所在地
};

// スタイリング用のコンポーネント
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #d0d0d0;
  border: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 資産情報コンポーネント
const AssetInfoComponent: React.FC<AssetInfo> = ({
  assetName,
  amount,
  shisan,
  kijun,
  kaiteimae,
  kaiteiato,
  soshiki,
  place,
  date,
  name,
  use,
}) => {
  return (
    <Container>
      <Title>アセットマネジメント様式一括変換</Title>
      <Table>
        <tbody>
          <tr>
            <TableHeader>範囲指定</TableHeader>
            <TableData>
              {assetName ? assetName : '---'} ～ {assetName ? assetName : '---'}
            </TableData>
          </tr>
          <tr>
            <TableHeader>固定資産科目</TableHeader>
            <TableData>{amount ? amount.toLocaleString() : 0}</TableData>
            <TableHeader>固定資産科目</TableHeader>
            <TableData>{shisan ? shisan.toLocaleString() : 0}</TableData>
            <TableHeader>部門</TableHeader>
            <TableData>{soshiki}</TableData>
          </tr>
          <tr>
            <TableHeader>管理番号</TableHeader>
            <TableData>{kaiteimae ? kaiteimae.toLocaleString() : 0}</TableData>
            <TableHeader>管理番号</TableHeader>
            <TableData>{kaiteiato ? kaiteiato.toLocaleString() : 0}</TableData>
            <TableHeader>施設</TableHeader>
            <TableData>{place}</TableData>
          </tr>
          <tr>
            <TableHeader>取得年月日</TableHeader>
            <TableData>{date}</TableData>
          </tr>
          <tr>
            <TableHeader>名称</TableHeader>
            <TableData>{name}</TableData>
          </tr>
          <tr>
            <TableHeader>所在地</TableHeader>
            <TableData>{use}</TableData>
          </tr>
        </tbody>
      </Table>
      <Button>対象外</Button>
      <Button>表示</Button>
    </Container>
  );
};

// サンプルデータを用いて使用例を表示
const SampleAssetInfo: AssetInfo = {
  assetName: '構造',
  amount: 500000000,
  shisan: 9999999999,
  kijun: '～',
  kaiteimae: 100001,
  kaiteiato: 999999,
  soshiki: '資産',
  place: '地区',
  date: '平成29年09月30日',
  name: '資産',
  use: '東京都',
};

const App: React.FC = () => {
  return (
    <div>
      <AssetInfoComponent {...SampleAssetInfo} />
    </div>
  );
};

export default App;