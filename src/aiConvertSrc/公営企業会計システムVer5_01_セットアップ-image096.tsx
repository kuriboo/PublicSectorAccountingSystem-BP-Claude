import React from 'react';
import styled from 'styled-components';

// 決算報告書ファイルリスト作成コンポーネントの型定義
interface SettlementFileListProps {
  startDate: string;
  endDate: string;
  decision: number;
  total: number;
}

// 決算報告書ファイルリスト作成コンポーネント
const SettlementFileList: React.FC<SettlementFileListProps> = ({ startDate, endDate, decision, total }) => {
  return (
    <Container>
      <Title>決算報告書ファイルリスト作成</Title>
      <DateRange>
        {/* 決算報告書の対象期間を表示 */}
        <span>予算年度: {startDate} 〜 {endDate}</span>
      </DateRange>
      <Table>
        <tbody>
          <TableRow>
            {/* 決算報告書番号の範囲を表示 */}
            <TableHeader>範囲指定</TableHeader>
            <TableData>
              <span>{decision}</span>
              <span> 〜 </span>  
              <span>{total}</span>
            </TableData>
          </TableRow>
          <TableRow>
            {/* 決算報告書番号を表す件数を表示 */}
            <TableHeader>決算報告書集計番号</TableHeader>
            <TableData>
              <span>{decision}</span>
              <span> 〜 </span>
              <span>{total}</span>  
            </TableData>
          </TableRow>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: 'Meiryo', sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 50%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateRange = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ffffff;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  width: 30%;
  font-weight: normal;
`;

const TableData = styled.td`
  padding: 8px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 4px 16px;
  margin: 0 8px;
`;

// 使用例
const settlementData = {
  startDate: '平成25年',
  endDate: '9999999999',
  decision: 0,
  total: 9999,
};

const SettlementFileListExample = () => {
  return (
    <SettlementFileList
      startDate={settlementData.startDate}
      endDate={settlementData.endDate}
      decision={settlementData.decision}
      total={settlementData.total}
    />
  );
};

export default SettlementFileListExample;