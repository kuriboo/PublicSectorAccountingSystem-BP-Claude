以下は、Next.js + TypeScriptを使用して、画像の伝票照会システムのコンポーネントを実装した例です。

```tsx
import React from 'react';
import styled from 'styled-components';

// 伝票照会のプロパティ型定義
interface InquiryProps {
  slipNo: string; // 伝票番号
  slipStatus: '個別調定' | '一括調定'; // 伝票種別
  startDate: string; // 検索条件の開始日付
  endDate: string; // 検索条件の終了日付
  personName: string; // 検索条件の個人名
  taxExempt: boolean; // 非課税フラグ
  data: {
    recordDate: string; // 記録日
    slipType: string; // 伝票区分
    lineNo: number; // 行番号
    amount: number; // 金額
    summary: string; // 摘要
    remark: string; // 備考
    taxCalc: '課税対象' | '非課税'; // 課税計算
  }[]; // 明細データ
}

// 伝票照会コンポーネント
const SlipInquiry: React.FC<InquiryProps> = ({
  slipNo,
  slipStatus,
  startDate,
  endDate,
  personName,
  taxExempt,
  data,
}) => {
  return (
    <Container>
      <h2>伝票照会</h2>
      <SearchCondition>
        <div>
          <label>伝票区分:</label>
          <span>{slipStatus}</span>
        </div>
        <div>
          <label>伝票番号:</label>
          <span>{slipNo}</span>
        </div>
        <div>
          <label>起案日:</label>
          <span>{startDate} 〜 {endDate}</span>
        </div>
        <div>
          <label>収入確定日:</label>
          <span>{startDate} 〜 {endDate}</span>
        </div>
        <div>
          <label>税込金額:</label>
          <input type="text" />
          <span>〜</span>
          <input type="text" />
        </div>
        <div>
          <label>相手先:</label>
          <input type="text" defaultValue={personName} />
        </div>
        <div>
          <label>節:</label>
          <input type="text" />
        </div>
        <div>
          <label>細節:</label>
          <input type="text" />
        </div>
        <div>
          <label>明細:</label>
          <input type="text" />
        </div>
        <CheckboxLabel>
          <input type="checkbox" checked={taxExempt} readOnly />
          <span>非課税</span>
        </CheckboxLabel>
      </SearchCondition>

      <Button>検索</Button>

      <Table>
        <thead>
          <tr>
            <th>記録日</th>
            <th>伝票区分</th>
            <th>行番号</th>
            <th>金額</th>
            <th>摘要</th>
            <th>備考</th>
            <th>課税計算(仕訳)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.recordDate}</td>
              <td>{row.slipType}</td>
              <td>{row.lineNo}</td>
              <td>{row.amount.toLocaleString()}円</td>
              <td>{row.summary}</td>
              <td>{row.remark}</td>
              <td>{row.taxCalc}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <span>件数</span>
        <span>{data.length}件</span>
      </div>
      <div>
        <span>合計金額</span>
        <span>{data.reduce((sum, row) => sum + row.amount, 0).toLocaleString()}円</span>
      </div>

      <div>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </div>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleSlipInquiry: React.FC = () => {
  const sampleData: InquiryProps = {
    slipNo: '0000000',
    slipStatus: '個別調定',
    startDate: '令和06年04月01日',
    endDate: '令和06年06月31日',
    personName: '山田太郎',
    taxExempt: false,
    data: [
      {
        recordDate: '05/04/06',
        slipType: '個別調定',
        lineNo: 1,
        amount: 129700,
        summary: '土地賃貸料',
        remark: '南北建設株式会社',
        taxCalc: '課税対象',
      },
      // ... サンプルデータの他の行
    ],
  };

  return <SlipInquiry {...sampleData} />;
};

export default SampleSlipInquiry;

// スタイルコンポーネント
const Container = styled.div`
  padding: 20px;
`;

const SearchCondition = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  label {
    font-weight: bold;
  }

  input[type='text'] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-right: 5px;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  cursor: pointer;
  margin-right: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;
```

このコンポーネントは、伝票照会システムの主要な部分を実装しています。検索条件の入力フィールドや検索ボタン、結果の表示テーブルなどが含まれています。

コンポーネントはTypeScriptの型定義を使用し、プロパティ経由でデータを受け取ることができます。また、styled-componentsを使用してCSS-in-JSでスタイリングを行っています。

サンプルデータを使用して、コンポーネントの使用例を示す`SampleSlipInquiry`コンポーネントも同じファイル内に実装されています。

コンポーネントには、値が入力されていない場合の処理などの例外処理は含まれていませんが、必要に応じて追加することができます。

また、レスポンシブデザインについては、グリッドレイアウトを使用して検索条件のレイアウトを調整するなどの工夫を行っています。

コメントを適宜追加し、コードの可読性を高めています。