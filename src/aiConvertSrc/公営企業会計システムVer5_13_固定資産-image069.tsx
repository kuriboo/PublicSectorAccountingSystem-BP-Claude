import React from 'react';
import styled from 'styled-components';

// 除却時仕訳情報の型定義
type DeductionInfo = {
  節: string;
  細節: string;
  明細: string;
  借方科目: string;
  貸方科目: string;
  金額: number;
};

// 除却時仕訳情報のプロパティの型定義
type DeductionInfoProps = {
  deductionInfo: DeductionInfo[];
};

// 自動仕訳作成処理の型定義
type AutoJournalEntryProps = {
  当期会計年度: string;
  除却年月日: string;
  資産名称: string;
  取得価額: number;
  除却時仕訳: DeductionInfoProps;
  除却時仕訳_固定資産除却費: DeductionInfoProps;
};

// スタイル定義
const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 4px;
  text-align: center;
  background-color: #f9f9f9;
`;

const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 4px;
`;

// 自動仕訳作成処理コンポーネント
const AutoJournalEntry: React.FC<AutoJournalEntryProps> = ({
  当期会計年度,
  除却年月日,
  資産名称,
  取得価額,
  除却時仕訳,
  除却時仕訳_固定資産除却費,
}) => {
  // 取得価額のフォーマット
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <Wrapper>
      <Title>自動仕訳作成処理(除却) 解除入力</Title>
      <p>
        当期会計年度: {当期会計年度} <br />
        除却年月日: {除却年月日}
      </p>
      <p>
        資産名称: {資産名称} <br />        
        取得価額: {formatPrice(取得価額)}
      </p>

      <Title>除却時仕訳(消価償却累計額)</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>借方科目</TableHeader>
            <TableHeader>貸方科目</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {除却時仕訳.deductionInfo.map((info, index) => (
            <tr key={index}>
              <TableData>
                {info.節} {info.細節} {info.明細} {info.借方科目}
              </TableData>
              <TableData>
                {info.節} {info.細節} {info.明細} {info.貸方科目}  
              </TableData>
              <TableData>{formatPrice(info.金額)}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>

      <Title>除却時仕訳(固定資産除却費)</Title>  
      <Table>
        <thead>
          <tr>
            <TableHeader>借方科目</TableHeader>
            <TableHeader>貸方科目</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {除却時仕訳_固定資産除却費.deductionInfo.map((info, index) => (
            <tr key={index}>
              <TableData>
                {info.節} {info.細節} {info.明細} {info.借方科目}
              </TableData>
              <TableData>
                {info.節} {info.細節} {info.明細} {info.貸方科目}
              </TableData>
              <TableData>{formatPrice(info.金額)}</TableData>
            </tr>
          ))}  
        </tbody>
      </Table>
    </Wrapper>
  );
};

// サンプルデータ
const sampleData: AutoJournalEntryProps = {
  当期会計年度: "2022年09月19日",
  除却年月日: "2022年06月30日", 
  資産名称: "建物ドンブ棟",
  取得価額: 3472000,
  除却時仕訳: {
    deductionInfo: [
      {
        節: "節",
        細節: "0001",
        明細: "S06",
        借方科目: "S06建物",
        貸方科目: "S06建物減価償却累計額",
        金額: 6047004,      
      },
    ],
  },
  除却時仕訳_固定資産除却費: {  
    deductionInfo: [
      {
        節: "節",
        細節: "0004",  
        明細: "S09",
        借方科目: "S09建物除却損",
        貸方科目: "S09建物除却損",
        金額: 427324,
      },
      {
        節: "節", 
        細節: "0001",
        明細: "S06",
        借方科目: "S06建物",
        貸方科目: "S06建物",
        金額: 427324,
      },
    ],
  },
};

// サンプルデータを使用してコンポーネントを表示
const App: React.FC = () => {
  return (
    <div>
      <AutoJournalEntry {...sampleData} />
    </div>
  );  
};

export default App;