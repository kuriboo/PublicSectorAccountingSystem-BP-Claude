import React from 'react';
import styled from '@emotion/styled';

interface FinancialYearSummaryProps {
  year: number;
  start: string;
  end: string;
  note: string;
}

const FinancialYearSummary: React.FC<FinancialYearSummaryProps> = ({ year, start, end, note }) => {
  return (
    <Container>
      <Title>次年度繰越データ作成</Title>
      <Table>
        <tbody>
          <tr>
            <TH>本年度</TH>
            <TD>令和{year}年度</TD>
            <TH>新年度</TH>
            <TD>令和{year + 1}年度</TD>
          </tr>
        </tbody>
      </Table>
      <Note>{note}</Note>
      <TermContainer>
        繰越処理を実行した場合、本年度(前年度)の帳票は実績値と異なる値で出力するため、本年度(前年度)の数値の確認はできなくなります。
        <Term>
          最終更新日時　　令和{year - 1}年{start.split('/')[0]}月{start.split('/')[1]}日　{start.split(' ')[1]}　～　令和{year}年{end.split('/')[0]}月{end.split('/')[1]}日　{end.split(' ')[1]}
        </Term>
      </TermContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  margin-bottom: 16px;
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const TH = styled.th`
  background-color: #f0f0f0;
  width: 15%;
`;

const TD = styled.td`
  width: 35%;
`;

const Note = styled.p`
  white-space: pre-wrap;
  margin-bottom: 8px;
`;

const TermContainer = styled.div`
  margin-top: 16px;
`;

const Term = styled.p`
  margin-top: 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <FinancialYearSummary
      year={2}
      start="03/23 17:07"
      end="06/19 15:07"
      note="本年度の入出庫データを集計して、新年度に繰り越します。
繰越処理完了後は、本年度の月別入出庫データが削除されます。"
    />
  );
};

export default App;