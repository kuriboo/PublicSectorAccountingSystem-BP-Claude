import React from 'react';
import styled from '@emotion/styled';

// 貸借対照表ファイルの型定義
type BalanceSheetFile = {
  id: number;
  name: string;
}

// コンポーネントのプロパティの型定義
type Props = {
  division: string;
  accountCode?: string;
  department: string;
  businessPlace: string;
  makerCode: string;
  collateCode: number;
  revenueCode: number;
  collateFiles: BalanceSheetFile[];
  revenueFiles: BalanceSheetFile[];
  onNext: () => void;
  onPrev: () => void;
}

// スタイル定義
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  background-color: #F0F0F0;
  padding: 16px;
  min-width: 320px;

  @media (min-width: 768px) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #164A84;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: inline-block;
  width: 120px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 240px;
`;

const Input = styled.input`
  width: 240px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 8px;
`;

// 貸借対照表コンポーネント
const BalanceSheet: React.FC<Props> = ({
  division,
  accountCode = '',
  department,
  businessPlace,
  makerCode,
  collateCode,
  revenueCode,
  collateFiles,
  revenueFiles,
  onNext,
  onPrev,
}) => {

  // 科目コード選択肢
  const accountCodes = ['', '選択項目1', '選択項目2'];

  return (
    <Container>
      <Title>貸借対照表借方照表ファイル</Title>
      <FormGroup>
        <Label>区分</Label>
        {division}
      </FormGroup>
      <FormGroup>
        <Label>年度</Label>
        <Input type="text" defaultValue="29" />
      </FormGroup>
      <FormGroup>
        <Label>科目コード</Label>
        <Select defaultValue={accountCode}>
          {accountCodes.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>事業部</Label>
        <Input type="text" defaultValue={department} />
      </FormGroup>
      <FormGroup>
        <Label>事業所</Label>
        <Input type="text" defaultValue={businessPlace} />
      </FormGroup>
      <FormGroup>
        <Label>メーカー</Label>
        <Input type="text" defaultValue={makerCode} />
      </FormGroup>
      <FormGroup>
        <Label>資産中予算</Label>
        <Select defaultValue={String(collateCode)}>
          <option value="1">名称1</option>
          <option value="2">名称2</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>収益中予算</Label>
        <Select defaultValue={String(revenueCode)}>
          <option value="1">名称1</option>
          <option value="2">名称2</option>
        </Select>
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onPrev}>前データ</Button>
        <Button onClick={onNext}>次データ</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  division: '管理部',
  department: '1営業部',
  businessPlace: 'マイナス金額項目名称',
  makerCode: '1行政',
  collateCode: 1,
  revenueCode: 1,
  collateFiles: [
    { id: 1, name: '名称CIF' },
    { id: 2, name: '名称CSV' }
  ],
  revenueFiles: [
    { id: 1, name: '名称CIF' },
    { id: 2, name: '名称CSV' }
  ],
};

// 表示用のサンプルコンポーネント
const SampleBalanceSheet = () => {
  const handleNext = () => {
    console.log('Next button clicked');
  };

  const handlePrev = () => {
    console.log('Prev button clicked');
  };

  return (
    <BalanceSheet
      {...sampleData}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  );
};

export default SampleBalanceSheet;