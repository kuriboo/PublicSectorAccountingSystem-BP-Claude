import React from 'react';
import styled from 'styled-components';

// 予算繰越入力フォームのプロパティ型定義
interface YosanKurikoshiFormProps {
  nendo: string; // 年度
  yosanKamoku: string; // 予算科目
  suiko: string; // 出納
  torihiki: string; // 取引
}

// 予算繰越入力フォームコンポーネント
const YosanKurikoshiForm: React.FC<YosanKurikoshiFormProps> = ({
  nendo,
  yosanKamoku,
  suiko,
  torihiki,
}) => {
  return (
    <Container>
      <Title>予算繰越入力</Title>
      <Table>
        <thead>
          <tr>
            <Th>予定年度</Th>
            <Th>予定番号</Th>
            <Th>負担年度</Th>
            <Th>負担番号</Th>
            <Th>予算節</Th>
            <Th>予算細節</Th>
            <Th>予算明細</Th>
            <Th>未処理額(伝票)</Th>
            <Th>繰越額(税込)</Th>
            <Th>繰越区分</Th>
            <Th>業者名</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{nendo}</Td>
            <Td>64</Td>
            <Td>{nendo}</Td>
            <Td>139</Td>
            <Td>原油・給料</Td>
            <Td>給料</Td>
            <Td>給料</Td>
            <Td>1,000,000</Td>
            <Td>1,200,000</td>
            <Td>継続改良</Td>
            <Td>ぎょうせい工務店</Td>
          </tr>
        </tbody>
      </Table>
      
      <DetailTitle>明細情報</DetailTitle>
      
      <DetailTable>
        <tbody>
          <tr>
            <DetailTh>予定年度</DetailTh>
            <DetailTd>{nendo}</DetailTd>
            <DetailTh>年度</DetailTh>
            <DetailTd>{nendo}</DetailTd>
          </tr>
          <tr>
            <DetailTh>負担年度</DetailTh>
            <DetailTd>{nendo}</DetailTd>
            <DetailTh>年度</DetailTh>
            <DetailTd>{nendo}</DetailTd>
          </tr>
          <tr>
            <DetailTh>予算科目</DetailTh>
            <DetailTd colSpan={3}>{yosanKamoku}</DetailTd>
          </tr>
          <tr>
            <DetailTh>予算節</DetailTh>
            <DetailTd>給油・給整備費</DetailTd>
            <DetailTd>給油・給整備費</DetailTd>
          </tr>
          <tr>
            <DetailTh>予算細節</DetailTh>
            <DetailTd>給油整備工事</DetailTd>
            <DetailTd>給油整備工事</DetailTd>
          </tr>
          <tr>  
            <DetailTh>予算明細</DetailTh>
            <DetailTd colSpan={3}>整備費</DetailTd>
          </tr>
        </tbody>
      </DetailTable>
      
      <FormGroup>
        <FormLabel>未処理額(伝票)</FormLabel>
        <FormInput type="text" defaultValue="0" />
      </FormGroup>
      
      <FormGroup>
        <FormLabel>変更予定額(税込)</FormLabel>
        <FormInput type="text" defaultValue="26,400,000" />
      </FormGroup>
        
      <FormGroup>
        <FormLabel>繰越額(税込)</FormLabel>
        <FormInput type="text" defaultValue="26,400,000" />
      </FormGroup>

      <RadioGroup>
        <RadioButton type="radio" name="kurikoshi" defaultChecked />
        <RadioLabel>継続改良</RadioLabel>
        
        <RadioButton type="radio" name="kurikoshi" />
        <RadioLabel>事故繰越</RadioLabel>
      </RadioGroup>
        
      <TextArea rows={4} />
        
      <ButtonGroup>
        <Button type="button">予算照会</Button>
        <SubmitButton type="submit">行確定</SubmitButton>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const Example: React.FC = () => {
  return (
    <YosanKurikoshiForm
      nendo="平成29"
      yosanKamoku="給油・給料"
      suiko="水道整備課"
      torihiki="ぎょうせい工務店" 
    />
  );
};

// スタイリング用のStyled Componentsを定義
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th, td {
    padding: 0.75rem;
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    background: #f0f0f0;
    font-weight: bold;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td`
  white-space: nowrap;
`;

const DetailTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th, td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid #ccc;
  }

  th {
    background: #f0f0f0;
    font-weight: bold;
    width: 10rem;
  }
`;

const DetailTh = styled.th`
  white-space: nowrap;
`;

const DetailTd = styled.td`
  white-space: nowrap;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  width: 10rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
`;

const RadioLabel = styled.label`
  margin-right: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background: #007bff;
  color: #fff;
`;

export default YosanKurikoshiForm;