import React from 'react';
import styled from '@emotion/styled';

// 振替日振替パターンの型定義
type TransferPattern = '設定済み' | '未設定' | 'すべて';

// 科目別振替性質紐づけマスタのプロパティ型定義
interface MasterProps {
  data: Array<{
    変更: string;
    種別: string;
    科目コード: string;
    節: string;
    細節: string;
    明細: string;
    セグメント名: string;
    振替性質: string;
  }>;
  date: string;
  transferPattern: TransferPattern;
}

// 科目別振替性質紐づけマスタコンポーネント
const Master: React.FC<MasterProps> = ({ data, date, transferPattern }) => {
  // 振替日の表示形式を変換
  const formattedDate = date.split('-').join('');

  // 振替パターンによるデータのフィルタリング
  const filteredData = data.filter((item) => {
    if (transferPattern === '設定済み') {
      return item.振替性質 !== '公共下水道';
    } else if (transferPattern === '未設定') {
      return item.振替性質 === '公共下水道';
    }
    return true;
  });

  return (
    <Container>
      <Header>
        <Title>科目別振替性質紐づけマスタ</Title>
        <DateWrapper>
          <DateLabel>予算管理</DateLabel>
          <DateValue>予算科日営繕権限者 全権限</DateValue>
          <DateValue>令和03年11月23日</DateValue>
        </DateWrapper>
      </Header>

      <Conditions>
        <Condition>
          <ConditionLabel>科目</ConditionLabel>
          <SegmentSelect>
            <option value="公共下水道">公共下水道</option>
          </SegmentSelect>
        </Condition>
        <Condition>
          <ConditionLabel>振替性質紐づけ</ConditionLabel>
          <PatternSelect value={transferPattern}>
            <option value="設定済み">設定済み</option>
            <option value="未設定">未設定</option>
            <option value="すべて">すべて</option>
          </PatternSelect>
        </Condition>
      </Conditions>

      <Notice>CSVファイルはzipに圧縮された状態で保存します。</Notice>

      <Table>
        <thead>
          <tr>
            <HeaderCell>変更</HeaderCell>
            <HeaderCell>種別</HeaderCell>
            <HeaderCell>科目コード</HeaderCell>
            <HeaderCell>節</HeaderCell>
            <HeaderCell>細節</HeaderCell>
            <HeaderCell>明細</HeaderCell>
            <HeaderCell>セグメント名</HeaderCell>
            <HeaderCell>振替性質</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <Cell>{row.変更}</Cell>
              <Cell>{row.種別}</Cell>
              <Cell>{row.科目コード}</Cell>
              <Cell>{row.節}</Cell>
              <Cell>{row.細節}</Cell>
              <Cell>{row.明細}</Cell>
              <Cell>{row.セグメント名}</Cell>
              <Cell>{row.振替性質}</Cell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Footer>
        <FooterButton>OK</FooterButton>
        <FooterButton>クリア</FooterButton>
        <FooterButton>終了</FooterButton>
      </Footer>
    </Container>
  );
};

// サンプルデータ
const sampleData = [
  {
    変更: '予/任',
    種別: '予備費',
    科目コード: '0040401010001 00008',
    節: '予備費',
    細節: '予備費',
    明細: '予備費',
    セグメント名: '公共下水道',
    振替性質: '振替性質',
  },
  {
    変更: '予算',
    種別: '01080010010001 0008',
    科目コード: '予備費',
    節: '予備費',
    細節: '予備費',
    明細: '公共下水道',
    セグメント名: '公共下水道',
    振替性質: '振替性質',
  },
  {
    変更: '予算',
    種別: '0130101 010001001',
    科目コード: '材料',
    節: '材料',
    細節: '材料',
    明細: '公共下水道',
    セグメント名: '公共下水道',
    振替性質: '振替性質',
  },
  {
    変更: '予算',
    種別: '0130101 908000001',
    科目コード: 'その他貯蔵品',
    節: 'その他貯蔵品',
    細節: 'その他貯蔵品',
    明細: '公共下水道',
    セグメント名: '公共下水道',
    振替性質: '振替性質',
  },
];

// サンプル表示用コンポーネント
const SampleMaster = () => {
  return (
    <Master
      data={sampleData}
      date="令和03-11-23"
      transferPattern="設定済み"
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: 'Meiryo UI';
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const DateWrapper = styled.div`
  text-align: right;
`;

const DateLabel = styled.div`
  font-weight: bold;
`;

const DateValue = styled.div`
  font-size: 14px;
`;

const Conditions = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ConditionLabel = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const SegmentSelect = styled.select`
  padding: 5px;
`;

const PatternSelect = styled.select`
  padding: 5px;
`;

const Notice = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FooterButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

export default SampleMaster;