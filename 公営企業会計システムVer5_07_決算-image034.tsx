import React from 'react';
import styled from 'styled-components';

// 型定義
type MasterDataProps = {
  year: number;
  month: number;
  date: string;
  newYear: string;
  maxUpdateDate: string;
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  font-size: 14px;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
`;

const Note = styled.p`
  font-size: 12px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

// コンポーネント
const MasterData: React.FC<MasterDataProps> = ({
  year,
  month,
  date,
  newYear,
  maxUpdateDate,
}) => {
  // 例外処理
  if (!year || !month || !date || !newYear || !maxUpdateDate) {
    return <div>マスタ作成情報が不足しています。</div>;
  }

  return (
    <Container>
      <Title>次年度マスタ作成</Title>
      <Text>
        本年度のマスタ内容を新年度に複写します。本年度を指定して下さい。
        (注1)新年度のマスタが設定されている場合は、新年度のマスタを削除して、本年度のマスタ内容を
        新年度に複写します。対象となるマスタは以下の通りです。
      </Text>
      <List>
        <ListItem>月次合計残高試算表</ListItem>
        <ListItem>資金予算表</ListItem>
        <ListItem>会計日計表</ListItem>
        <ListItem>決算報告書</ListItem>
        <ListItem>剰余金計算書</ListItem>
        <ListItem>収支費用明細書</ListItem>
        <ListItem>資本的収支明細書</ListItem>
      </List>
      <Note>
        (注2)当処理は何回でも実行可能ですが、新年度のマスタ修正後に当処理を実行した場合は
        新年度の修正分が破棄されますのでご注意して下さい。
      </Note>
      <Text>
        「詳細」ボタンを押すと詳細情報画面へ遷移し「表示」ボタンを押すことで、マスタ設定に不整合がある
        場合の詳細情報を照会できます。
      </Text>
      <Text>
        最終更新日時: 令和{year - 2018}年{month}月{date} 
        令和{year - 2017}年度 → 令和{newYear - 2017}年度
      </Text>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: MasterDataProps = {
  year: 2022,
  month: 10,
  date: '27日',
  newYear: '6',
  maxUpdateDate: '令和6年10月27日',
};

const App: React.FC = () => {
  return (
    <div>
      <MasterData {...sampleData} />
    </div>
  );
};

export default App;