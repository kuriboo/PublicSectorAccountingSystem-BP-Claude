import React from 'react';
import styled from 'styled-components';

// 剝奪金処分計算書出力コンポーネントの型定義
type CalculationFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
};

// 剝奪金処分計算書出力コンポーネント
const CalculationForm: React.FC<CalculationFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <FormWrapper>
      <Title>剝奪金処分計算書出力</Title>
      
      <DateWrapper>
        <DateLabel>平成29年09月04日</DateLabel>
      </DateWrapper>
      
      <TableWrapper>
        <TableTitle>科目設定編集</TableTitle>
        <Table>
          <TableHeader>
            <TableHeaderCell>科目コード</TableHeaderCell>
            <TableHeaderCell>科目名称</TableHeaderCell>
            <TableHeaderCell>当年度未残高</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {/* テーブルデータの例 */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>科目1</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <DetailWrapper>
          <DetailLabel>当年度末残高</DetailLabel>
          <DetailValue>0</DetailValue>
        </DetailWrapper>
      </TableWrapper>
      
      <SubTableTitle>処分事由および処分期間等</SubTableTitle>
      
      <SubTable>
        <SubTableHeader>
          <SubTableHeaderCell>区分</SubTableHeaderCell>
          <SubTableHeaderCell>事由№</SubTableHeaderCell>
          <SubTableHeaderCell>処分事由等</SubTableHeaderCell>
          <SubTableHeaderCell>科目コード</SubTableHeaderCell>
          <SubTableHeaderCell>科目名称</SubTableHeaderCell>
          <SubTableHeaderCell>処分額</SubTableHeaderCell>
        </SubTableHeader>
        <SubTableBody>
          {/* サブテーブルデータの例 */}
          <SubTableRow>
            <SubTableCell>条例</SubTableCell>
            <SubTableCell>1</SubTableCell>
            <SubTableCell>事由1</SubTableCell>
            <SubTableCell>1</SubTableCell>
            <SubTableCell>科目1</SubTableCell>
            <SubTableCell>0</SubTableCell>
          </SubTableRow>
        </SubTableBody>
      </SubTable>
      
      <ButtonWrapper>
        <SubmitButton type="button" onClick={onSubmit}>登録</SubmitButton>
        <CancelButton type="button" onClick={onCancel}>クリア</CancelButton>
        <PrintButton type="button">終了</PrintButton>
      </ButtonWrapper>
      
    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateWrapper = styled.div`
  margin-bottom: 20px;
`;

const DateLabel = styled.p`
  font-size: 14px;
`;

const TableWrapper = styled.div`
  margin-bottom: 30px;
`;

const TableTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
`;

const DetailWrapper = styled.div`
  margin-top: 10px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  margin-left: 10px;
`;

const SubTableTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SubTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const SubTableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const SubTableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const SubTableBody = styled.tbody``;

const SubTableRow = styled.tr``;

const SubTableCell = styled.td`
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;

  &:hover {
    background-color: #a71d2a;
  }
`;

const PrintButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #474f57;
  }
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('登録ボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('クリアボタンがクリックされました');
  };

  return (
    <div>
      <CalculationForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;