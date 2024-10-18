import React from 'react';
import styled from '@emotion/styled';

// 枠配分設定コンポーネントの型定義
interface PartitionSettingProps {
  title: string;
  fiscalYear: string;
  fiscalTerm: string;
  schedule: string;
  scheduleDetail: string;
  partitionAmount: number;
}

// 枠配分設定コンポーネント
const PartitionSetting: React.FC<PartitionSettingProps> = ({
  title,
  fiscalYear,
  fiscalTerm,
  schedule,
  scheduleDetail,
  partitionAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputGroup>
        <Label>設定種別</Label>
        <RadioGroup>
          <RadioButton type="radio" name="setting" />
          <RadioLabel>科目別</RadioLabel>
          <RadioButton type="radio" name="setting" />
          <RadioLabel>事業別</RadioLabel>
          <RadioButton type="radio" name="setting" />
          <RadioLabel>所属別</RadioLabel>
        </RadioGroup>
      </InputGroup>
      <InputGroup>
        <Label>科目レベル</Label>
        <CheckboxGroup>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>款</CheckboxLabel>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>項</CheckboxLabel>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>目</CheckboxLabel>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>節</CheckboxLabel>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>細節</CheckboxLabel>
          <Checkbox type="checkbox" name="level" />
          <CheckboxLabel>明細</CheckboxLabel>
        </CheckboxGroup>
      </InputGroup>
      <InputGroup>
        <Label>事業科目</Label>
        <CheckboxGroup>
          <Checkbox type="checkbox" name="project" />
          <CheckboxLabel>事業</CheckboxLabel>
          <Checkbox type="checkbox" name="project" />
          <CheckboxLabel>施設</CheckboxLabel>
          <Checkbox type="checkbox" name="project" />
          <CheckboxLabel>施設明細</CheckboxLabel>
        </CheckboxGroup>
      </InputGroup>
      <FieldGroup>
        <Field>
          <Label>所属</Label>
          <Input type="text" defaultValue={fiscalYear} />
        </Field>
        <Field>
          <Label>事業科目</Label>
          <Input type="text" defaultValue={fiscalTerm} />
        </Field>
      </FieldGroup>
      <InputGroup>
        <Label>枠配分額</Label>
        <Input type="text" defaultValue={partitionAmount.toLocaleString()} />
        <Unit>円</Unit>
      </InputGroup>
      <ButtonGroup>
        <Button>エラー確認</Button>
        <SubmitButton>OK</SubmitButton>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: PartitionSettingProps = {
  title: '枠配分設定',
  fiscalYear: '平成30',
  fiscalTerm: '年度',
  schedule: '当初',
  scheduleDetail: '6月補正',
  partitionAmount: 50000000,
};

// サンプルコンポーネント
const SamplePartitionSetting: React.FC = () => {
  return (
    <PartitionSetting
      title={sampleData.title}
      fiscalYear={sampleData.fiscalYear}  
      fiscalTerm={sampleData.fiscalTerm}
      schedule={sampleData.schedule}
      scheduleDetail={sampleData.scheduleDetail}
      partitionAmount={sampleData.partitionAmount}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 100px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Unit = styled.span`
  margin-left: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

export default PartitionSetting;