import React from 'react';
import styled from 'styled-components';

// 納付分類マスタのプロパティ型
type NofuBunruiMasterProps = {
  data: {
    nendo: string;
    renban: string;
    nofuBunruiCode: string;
    nofuBunruiName: string;
    tokuchoKanji: string;
    tokuchoYomi: string;
    sanshoCode: string;
    sanshoName: string;
  }[];
};

// 納付分類マスタコンポーネント
const NofuBunruiMaster: React.FC<NofuBunruiMasterProps> = ({ data }) => {
  // 例外処理：データが空の場合
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Container>
      <Title>納付分類マスタ</Title>
      <Table>
        <thead>
          <tr>
            <Th>年度</Th>
            <Th>連番</Th>
            <Th>納付分類コード</Th>
            <Th>納付分類名</Th>
            <Th>特徴漢字</Th>
            <Th>特徴ヨミ</Th>
            <Th>参照コード</Th>
            <Th>参照名称</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>{item.nendo}</Td>
              <Td>{item.renban}</Td>
              <Td>{item.nofuBunruiCode}</Td>
              <Td>{item.nofuBunruiName}</Td>
              <Td>{item.tokuchoKanji}</Td>
              <Td>{item.tokuchoYomi}</Td>
              <Td>{item.sanshoCode}</Td>
              <Td>{item.sanshoName}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  border: 1px solid #ccc;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px;
  }
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px;
  }
`;

// 表示用のサンプルデータ
const sampleData = [
  {
    nendo: '2017',
    renban: '10',
    nofuBunruiCode: '加入者担当',
    nofuBunruiName: '電話加水補償金',
    tokuchoKanji: '加入者',
    tokuchoYomi: 'カニュウシャ',
    sanshoCode: '000005',
    sanshoName: '手数料/水道料金の未収補償',
  },
  {
    nendo: '2017',
    renban: '20',
    nofuBunruiCode: '臨時給水補償金',
    nofuBunruiName: '臨時給水補償金',
    tokuchoKanji: '3条予算',
    tokuchoYomi: '',
    sanshoCode: '000006',
    sanshoName: '手数料/料金諸の未収補償',
  },
];

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <NofuBunruiMaster data={sampleData} />
    </div>
  );
};

export default App;