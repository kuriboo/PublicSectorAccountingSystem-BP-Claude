import React from 'react';
import styled from 'styled-components';

// 支出負担年度の型定義
type Nendo = 'H25' | 'H26' | 'H27' | 'H28' | 'H29' | 'H30' | 'R1' | 'R2' | 'R3' | 'R4';

// 負担番号の型定義
type BangoType = number;

// 明細番号の型定義
type MeisaiBangoType = number;

// 変更回数の型定義
type KaisuType = number;

// 摘要の型定義
type TekiyoType = string;

// 税抜金額の型定義
type ZeinukiType = number;

// 支出負担年度テーブルの型定義
interface ShuishutsuFutanNendoTableProps {
  nendo: Nendo;
  data: {
    bango: BangoType;
    meisaiBango: MeisaiBangoType;
    kaisu: KaisuType;
    tekiyo: TekiyoType;
    zeinuki: ZeinukiType;
  }[];
}

// 支出負担年度テーブルコンポーネント
const ShuishutsuFutanNendoTable: React.FC<ShuishutsuFutanNendoTableProps> = ({ nendo, data }) => {
  return (
    <Container>
      <Title>支出負担年度 {nendo}年度</Title>
      <TableHeader>
        <Row>
          <Cell>負担番号</Cell>
          <Cell>明細番号</Cell>
          <Cell>変更回数</Cell>
          <Cell>摘要</Cell>
          <Cell>税抜金額</Cell>
        </Row>
      </TableHeader>
      <TableBody>
        {data.map(({ bango, meisaiBango, kaisu, tekiyo, zeinuki }, index) => (
          <Row key={index}>
            <Cell>{bango}</Cell>
            <Cell>{meisaiBango}</Cell>
            <Cell>{kaisu}</Cell>
            <Cell>{tekiyo}</Cell>
            <Cell>{zeinuki.toLocaleString()}</Cell>
          </Row>
        ))}
      </TableBody>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const TableHeader = styled.div`
  background-color: #f2f2f2;
  font-weight: bold;
`;

const TableBody = styled.div``;

const Row = styled.div`
  display: flex;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.div`
  padding: 8px;
  flex: 1;
  text-align: center;
  &:last-child {
    text-align: right;
  }

  @media (max-width: 600px) {
    padding: 4px;
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleData = [
  {
    bango: 144,
    meisaiBango: 0,
    kaisu: 0,
    tekiyo: '図書費',
    zeinuki: 15550,
  },
  {
    bango: 145,
    meisaiBango: 0,
    kaisu: 0,
    tekiyo: 'IT機器購入',
    zeinuki: 46297,
  },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <ShuishutsuFutanNendoTable nendo="R4" data={sampleData} />
    </div>
  );
};

export default App;