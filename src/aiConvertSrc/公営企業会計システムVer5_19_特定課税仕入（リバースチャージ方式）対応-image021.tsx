以下は、TypeScriptとNext.jsを使用して、提供された画像からコンポーネントを生成したコードです。

```tsx
import React from 'react';
import styled from 'styled-components';

// テーブルのプロパティの型定義
interface TableProps {
  title: string;
  data: Array<{
    item: string;
    percentage: number;
  }>;
}

// テーブル1のコンポーネント
const Table1: React.FC<TableProps> = ({ title, data }) => {
  return (
    <Table1Wrapper>
      <Table1Title>{title}</Table1Title>
      <Table1Data>
        {data.map((row, index) => (
          <Table1Row key={index}>
            <Table1Item>{row.item}</Table1Item>
            <Table1Percentage>{row.percentage.toFixed(2)}％</Table1Percentage>
          </Table1Row>
        ))}
      </Table1Data>
    </Table1Wrapper>
  );
};

// テーブル2のプロパティの型定義
interface Table2Props {
  data: Array<{
    item: string;
    value1: string;
    value2: string;
  }>;
}

// テーブル2のコンポーネント
const Table2: React.FC<Table2Props> = ({ data }) => {
  return (
    <Table2Wrapper>
      <Table2Header>
        <Table2HeaderItem>項目</Table2HeaderItem>
        <Table2HeaderItem>R3当初</Table2HeaderItem>
        <Table2HeaderItem>R3補正後</Table2HeaderItem>
      </Table2Header>
      <Table2Data>
        {data.map((row, index) => (
          <Table2Row key={index}>
            <Table2Item>{row.item}</Table2Item>
            <Table2Value>{row.value1 || '-'}</Table2Value>
            <Table2Value>{row.value2 || '-'}</Table2Value>
          </Table2Row>
        ))}
      </Table2Data>
    </Table2Wrapper>
  );
};

// スタイリング
const Table1Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Table1Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Table1Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table1Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
`;

const Table1Item = styled.div`
  flex: 1;
`;

const Table1Percentage = styled.div`
  font-weight: bold;
`;

const Table2Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Table2Header = styled.div`
  display: flex;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 10px;
`;

const Table2HeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Table2Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table2Row = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Table2Item = styled.div`
  flex: 1;
`;

const Table2Value = styled.div`
  flex: 1;
  text-align: center;
`;

// サンプルデータ
const sampleData1 = [
  { item: '35歳未満', percentage: 13.21 },
  { item: '35歳以上40歳未満', percentage: 13.21 },
  { item: '40歳以上45歳未満', percentage: 16.98 },
  { item: '45歳以上50歳未満', percentage: 18.87 },
  { item: '50歳以上55歳未満', percentage: 22.64 },
  { item: '55歳以上', percentage: 15.09 },
];

const sampleData2 = [
  { item: '議会費', value1: '225,138', value2: '225,138' },
  { item: '総務費', value1: '6,538,319', value2: '6,791,407' },
  { item: '民生費（社会福祉費＋児童福祉費）', value1: '1,925,116', value2: '1,925,116' },
  { item: '衛生費（保健衛生費＋清掃費）', value1: '2,114,891', value2: '2,114,891' },
  { item: '労働費', value1: '-', value2: '-' },
  { item: '農林水産業費', value1: '1,064,209', value2: '1,064,209' },
  { item: '商工費', value1: '498,584', value2: '498,584' },
  { item: '土木費', value1: '1,540,038', value2: '2,164,750' },
  { item: '消防費', value1: '744,204', value2: '744,204' },
  { item: '教育費', value1: '2,380,987', value2: '2,751,814' },
  { item: '災害復旧費', value1: '-', value2: '-' },
  { item: '公債費', value1: '4,795,723', value2: '4,795,723' },
  { item: '諸支出金', value1: '322,616', value2: '322,616' },
  { item: '予備費', value1: '30,000', value2: '30,000' },
];

// 使用例
const SampleComponent: React.FC = () => {
  return (
    <div>
      <Table1 title="平成31年度　　旭川市職員の年齢構成" data={sampleData1} />
      <Table2 data={sampleData2} />
    </div>
  );
};

export default SampleComponent;
```

このコードでは、提供された画像の2つのテーブルに基づいて、再利用可能で独立したコンポーネントを作成しました。以下は主な特徴です：

1. `Table1`と`Table2`の2つのコンポーネントを定義し、それぞれのプロパティの型を`TableProps`と`Table2Props`として定義しました。

2. 各コンポーネントは、受け取ったデータを元にテーブルを動的にレンダリングします。データが存在しない場合は`-`を表示するようにしています。

3. styled-componentsを使用してCSS-in-JSによるスタイリングを行い、レスポンシブデザインを考慮しています。

4. コメントを追加して、コードの理解を助けるようにしました。

5. `sampleData1`と`sampleData2`を定義し、`SampleComponent`内で`Table1`と`Table2`を使用する例を示しました。

このコンポーネントを使用することで、同様の構造のテーブルを簡単に作成し、データを渡すだけで表示することができます。必要に応じてスタイルやレイアウトを調整することも可能です。