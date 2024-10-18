import React from 'react';
import styled from '@emotion/styled';

type ReportTitleProps = {
  title: string;
  fiscalYear: string;
  company: string;
};

type ReportTableProps = {
  headers: string[];
  rows: string[][];
};

const ReportTitle: React.FC<ReportTitleProps> = ({ title, fiscalYear, company }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <Info>令和05年02月22日</Info>
        <Info>総務課 予算・会計担当</Info>
      </InfoContainer>
      <CompanyInfo>{company}</CompanyInfo>
    </TitleContainer>
  );
};

const ReportTable: React.FC<ReportTableProps> = ({ headers, rows }) => {
  return (
    <TableContainer>
      <TableHeader>
        {headers.map((header, index) => (
          <HeaderCell key={index}>{header}</HeaderCell>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

const ReportSample: React.FC = () => {
  const title = '業者情報取込更新処理';
  const fiscalYear = '令和04';
  const company = '●● 株式会社';
  
  const headers = ['', '行追加', '行削除'];
  const rows = [
    ['1', '', ''],
    ['2', '', ''],
    ['3', '', ''],
    ['4', '', ''],
    ['5', '', ''],
  ];

  return (
    <Container>
      <ReportTitle title={title} fiscalYear={fiscalYear} company={company} />
      <ReportTable headers={headers} rows={rows} />
      <ButtonContainer>
        <Button>データ更新</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ReportSample;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const InfoContainer = styled.div`
  text-align: right;
`;

const Info = styled.p`
  font-size: 14px;
  margin: 0;
`;

const CompanyInfo = styled.p`
  font-size: 16px;
  margin: 0;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 14px;
`;