import React from 'react';
import styled from '@emotion/styled';

interface BusinessFormProps {
  startDate: string;
  endDate: string;
  name: string;
  kana: string;
  gender: string;
  companyName: string;
  companyKana: string;
  jobTitle: string;
  annualIncome: number;
  annualIncomeTax: number;
  socialInsurance: string;
  deduction: string;
  dependent: string;
  onSubmit: () => void;
}

const BusinessForm: React.FC<BusinessFormProps> = ({
  startDate,
  endDate,
  name,
  kana,
  gender,
  companyName, 
  companyKana,
  jobTitle,
  annualIncome,
  annualIncomeTax,
  socialInsurance,
  deduction,
  dependent,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>事業主義務事項台帳</Title>
      <Row>
        <Label>平成30</Label>
        <Value>年度</Value>
      </Row>
      <Row>
        <Label>所属</Label>
        <Value>9999999</Value>
        <Label>管理者</Label>
        <Value>000100000</Value>
      </Row>
      <Row>
        <Label>単価</Label>
        <Value>999999</Value>
        <Label>参照コード</Label>
        <Value></Value>
      </Row>

      <SectionTitle>名称</SectionTitle>  
      <Row>
        <Label>事業所名</Label>
        <Value>000001</Value>
        <Label>軽作業名</Label>
        <Value>軽作業名</Value>
      </Row>
      <Row>  
        <Label>事業所フリガナ</Label>
        <Value>000002</Value>
        <Label>軽作業フリガナ</Value>
        <Value>ケイサギョウ</Value>
      </Row>

      <Row>
        <Label>単位</Label>
        <Value>足</Value>
        <Label>単価率</Label>
        <RadioButton
          type="radio"
          name="unitPrice"
          value="計算する"
          label="計算する"
          checked={true}
        />
        <RadioButton
          type="radio"
          name="unitPrice"  
          value="計算しない"
          label="計算しない"
        />
      </Row>

      <Row>
        <Label>消費税率</Label>  
        <Value>05 5.00%</Value>
        <Label>税込/抜</Label>
        <RadioButton
          type="radio"
          name="taxInclusion"
          value="税込"
          label="税込"
          checked={true}  
        />
        <RadioButton 
          type="radio"
          name="taxInclusion"
          value="税抜"
          label="税抜"
        />
      </Row>

      <SectionTitle>事務処理</SectionTitle>
      <Table>
        <thead>
          <tr>
            <th>適用開始年月日</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019/04/16</td>  
            <td>1,500.00</td>
          </tr>
        </tbody>
      </Table>

      <ButtonContainer>
        <Button>前データ</Button>
        <Button>次データ</Button>  
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  text-align: center; 
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  width: 150px;
`;

const Value = styled.div`
  margin-right: 16px;
`;
  
const RadioButton = styled.input`
  margin-right: 8px;
`;

const SectionTitle = styled.h3`
  margin-top: 32px;
  margin-bottom: 16px;  
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  text-align: center;
`;
  
const Button = styled.button`
  margin: 0 8px;
`;

const SubmitButton = styled(Button)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {  
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

// Sample usage
const SampleBusinessForm: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <BusinessForm 
      startDate="2023/04/01"
      endDate="2024/03/31" 
      name="山田太郎"
      kana="ヤマダタロウ"
      gender="男性"
      companyName="株式会社ABC"
      companyKana="カブシキガイシャエービーシー"
      jobTitle="営業" 
      annualIncome={5000000}
      annualIncomeTax={500000}
      socialInsurance="加入"
      deduction="27センチ"
      dependent="扶養する"
      onSubmit={handleSubmit}
    />
  );  
};

export default BusinessForm;