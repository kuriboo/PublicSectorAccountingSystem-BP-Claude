import React from 'react';
import styled from '@emotion/styled';

// 構造産業計システムのプロパティの型定義
interface ConstructionIndustrySystemProps {
  constructionNumber?: string; // 資産番号
  registrationCategory?: '登録' | '訂正' | '削除'; // 登録区分
  comment?: string; // 摘要
  constructionAmount?: number; // 取得金額
  usefulLife?: number; // 耐用年数
}

// 構造産業計システムコンポーネント
const ConstructionIndustrySystem: React.FC<ConstructionIndustrySystemProps> = ({
  constructionNumber = '7481500',
  registrationCategory = '登録',
  comment = '',
  constructionAmount = 30000,
  usefulLife = 30,
}) => {
  return (
    <Container>
      <Title>構造資産累計マスタ</Title>
      <SystemName>行政市水道事業会計 総務課 予算・会計担当 ぜよう せい太郎</SystemName>
      <DateText>平成29年09月14日</DateText>
      
      <FieldContainer>
        <Legend>登録区分</Legend>
        <RadioButton type="radio" checked={registrationCategory === '登録'} readOnly />
        <RadioLabel>登録</RadioLabel>
        <RadioButton type="radio" checked={registrationCategory === '訂正'} readOnly />
        <RadioLabel>訂正</RadioLabel>
        <RadioButton type="radio" checked={registrationCategory === '削除'} readOnly />  
        <RadioLabel>削除</RadioLabel>
      </FieldContainer>

      <FieldContainer>
        <Legend>資産番号</Legend>
        <Input type="text" value={constructionNumber} readOnly />
        <Label>資産名称 エンジンポンプ</Label>
      </FieldContainer>
      
      <FieldContainer>
        <Legend>構造設備号</Legend>
        <Input type="text" readOnly />
      </FieldContainer>
      
      <FieldContainer>  
        <Legend>単位</Legend>
        <Input type="text" value="1" readOnly />
      </FieldContainer>

      <FieldContainer>
        <Legend>取得数量</Legend>
        <Input type="text" value="30" readOnly />
      </FieldContainer>

      <FieldContainer>
        <Legend>取得金額</Legend>
        <Input type="text" value={constructionAmount.toLocaleString()} readOnly />
      </FieldContainer>

      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用した構造産業計システムコンポーネントの表示例
const SampleConstructionIndustrySystem: React.FC = () => {
  return (
    <ConstructionIndustrySystem
      constructionNumber="7481500"
      registrationCategory="登録"
      comment="資産名称 エンジンポンプ"
      constructionAmount={30000}
      usefulLife={30}
    />
  );
};

// スタイルコンポーネント
const Container = styled.div`
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const SystemName = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;

const DateText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

const Legend = styled.span`
  display: inline-block;
  width: 100px;
`;

const RadioButton = styled.input`
  margin-left: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 150px;
`;

const Label = styled.span`
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
`;

export default ConstructionIndustrySystem;