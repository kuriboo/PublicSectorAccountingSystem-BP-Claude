import React from 'react';
import styled from 'styled-components';

interface CompanyMasterProps {
  companyName: string;
  companyNameKana: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  url: string;
  closingDate: number;
  closingAdjustmentDate: number;
  paymentDate: number;
  paymentMethod: 'transfer' | 'bill';
  transferFeeResponsibility: 'our_company' | 'their_company';
  businessStartDate: string;
  taxRate: number;
  noteFields: string;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

const CompanyMaster: React.FC<CompanyMasterProps> = ({
  companyName,
  companyNameKana,
  postalCode,
  address,
  phoneNumber,
  faxNumber,
  url,
  closingDate,
  closingAdjustmentDate,
  paymentDate,
  paymentMethod,
  transferFeeResponsibility,
  businessStartDate,
  taxRate,
  noteFields,
  onSave,
  onCancel,
  onDelete,
}) => {
  return (
    <Container>
      <Title>会社マスタ</Title>
      <Row>
        <Label>会社名</Label>
        <Input type="text" value={companyName} />
      </Row>
      <Row>
        <Label>会社名カナ</Label>
        <Input type="text" value={companyNameKana} />
      </Row>
      {/* 他の入力項目も同様に実装 */}
      <Row>
        <Label>新規登録日</Label>
        <div>{businessStartDate}</div>
      </Row>
      <Row>
        <Label>標準税率</Label>
        <Input type="number" value={taxRate} min={0} max={100} />
      </Row>
      <Row>
        <Label>備考欄</Label>
        <TextArea value={noteFields} />
      </Row>
      <ButtonRow>
        <Button onClick={onSave}>登録</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onDelete}>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleCompanyMaster: React.FC = () => {
  const sampleData: CompanyMasterProps = {
    companyName: '株式会社サンプル',
    companyNameKana: 'カブシキガイシャサンプル',
    postalCode: '123-4567',
    address: '東京都サンプル区サンプル町1-2-3',
    phoneNumber: '03-1234-5678',
    faxNumber: '03-1234-5679',
    url: 'https://www.example.com',
    closingDate: 31,
    closingAdjustmentDate: 10, 
    paymentDate: 10,
    paymentMethod: 'transfer',
    transferFeeResponsibility: 'their_company',
    businessStartDate: '2017/1/1',
    taxRate: 10,
    noteFields: '',
    onSave: () => alert('登録ボタンがクリックされました'),
    onCancel: () => alert('クリアボタンがクリックされました'),
    onDelete: () => alert('終了ボタンがクリックされました'), 
  };

  return <CompanyMaster {...sampleData} />;
};

export default SampleCompanyMaster;

// スタイリング
const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 200px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 4px;
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;