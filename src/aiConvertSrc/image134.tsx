import React from 'react';
import styled from '@emotion/styled';

// 土地総括編集の型定義
type LandSummaryEditProps = {
  landNumber: string;
  productName: string;
  acquisitionDate: string;
  registrationAmount: number;
  registrationTax: number;
  onSave: () => void;
  onCancel: () => void;
};

// 土地総括編集コンポーネント
const LandSummaryEdit: React.FC<LandSummaryEditProps> = ({
  landNumber,
  productName,
  acquisitionDate,
  registrationAmount,
  registrationTax,
  onSave,
  onCancel,
}) => {
  return (
    <Container>
      <Title>土地総括保守</Title>
      <LandNumber>{landNumber}</LandNumber>
      <ProductName>{productName}</ProductName>
      <Table>
        <TableHeader>
          <HeaderCell>異動年月日</HeaderCell>
          <HeaderCell>総括摘要</HeaderCell>
          <HeaderCell>総面積</HeaderCell>
          <HeaderCell>総価額</HeaderCell>
        </TableHeader>
        <TableRow>
          <Cell>{acquisitionDate}</Cell>
          <Cell>{productName}の取得</Cell>
          <Cell>{registrationAmount}</Cell>
          <Cell>{registrationTax.toLocaleString()}</Cell>
        </TableRow>
      </Table>
      <EditForm>
        <FormField>
          <Label>異動年月日</Label>
          <Input type="date" defaultValue={acquisitionDate} />
        </FormField>
        <FormField>
          <Label>総括摘要</Label>
          <Input type="text" defaultValue={productName + 'の取得'} />
        </FormField>
        <FormField>
          <Label>総面積</Label>
          <Input type="number" defaultValue={registrationAmount} />
        </FormField>
        <FormField>
          <Label>総価額</Label>
          <Input type="number" defaultValue={registrationTax} />
        </FormField>
      </EditForm>
      <ButtonGroup>
        <Button onClick={onSave}>行確定</Button>
        <CancelButton onClick={onCancel}>行ｷｬﾝｾﾙ</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  landNumber: '8002400',
  productName: '行政市町水池開道',
  acquisitionDate: '2018-03-31',
  registrationAmount: 70,
  registrationTax: 5000000,
};

// 土地総括編集のサンプル使用コンポーネント 
const LandSummaryEditSample: React.FC = () => {
  return (
    <LandSummaryEdit
      {...sampleData}
      onSave={() => console.log('Saved')}
      onCancel={() => console.log('Canceled')}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const LandNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ProductName = styled.div`
  font-size: 18px;
  color: #888;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.tr`
  background-color: #ddd;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f7f7f7;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: right;
`;

const EditForm = styled.div`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ccc;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  margin-left: 8px;
`;

export default LandSummaryEditSample;