import React from 'react';
import styled from '@emotion/styled';

type PublicationScheduleFormProps = {
  year: number;
  month: number;
  date: number;
  paperSize: string;
  colorMode: boolean;
  fixedSchedule: string;
  yoyakuSchedule: string;
  title: string;
  subtitle: string;
  subsubtitle: string;
  onSubmit: boolean;
  pageNumber: number;
};

const PublicationScheduleForm: React.FC<PublicationScheduleFormProps> = ({
  year,
  month,
  date,
  paperSize,
  colorMode,
  fixedSchedule,
  yoyakuSchedule,
  title,
  subtitle,
  subsubtitle,
  onSubmit,
  pageNumber,
}) => {
  return (
    <FormWrapper>
      <FormTitle>暫定予算実施計画書作成</FormTitle>
      <FormSubTitle>
        総務課 予算・会計担当 ぎょうせい太郎
        <br />
        平成29年06月16日
      </FormSubTitle>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" value={year} readOnly />
      </FormGroup>
      <PublicationScheduleWrapper>
        <PublicationScheduleLabel>説明調データ作成情報</PublicationScheduleLabel>
        <RadioGroup>
          <RadioButton type="radio" checked readOnly />
          見積要求額
        </RadioGroup>
        <FixedScheduleWrapper>
          <Label>予算科目</Label>
          <ScheduleInput type="number" value={fixedSchedule} readOnly />
          <Label>予算科目</Label>
          <ScheduleInput type="number" value={yoyakuSchedule} readOnly />
        </FixedScheduleWrapper>
      </PublicationScheduleWrapper>
      <PublicationDetailsWrapper>
        <Label>書式</Label>
        <Input type="text" value={paperSize} readOnly />
        <Label>タイトル</Label>
        <Input type="text" value={title} readOnly />
        <Label>サブタイトル</Label>
        <Input type="text" value={subtitle} readOnly />
        <Label>柱タイトル</Label>
        <Input type="text" value={subsubtitle} readOnly />
        <CheckboxGroup>
          <Checkbox type="checkbox" checked={onSubmit} readOnly />
          表紙付
        </CheckboxGroup>
        <RadioGroup>
          <RadioButton type="radio" checked={colorMode} readOnly />
          する
          <RadioButton type="radio" checked={!colorMode} readOnly />
          しない
        </RadioGroup>
        <Label>関始頁</Label>
        <Input type="number" value={1} readOnly />
      </PublicationDetailsWrapper>
      <ButtonGroup>
        <Button>ＯＫ</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  font-family: 'Meiryo', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const FormSubTitle = styled.div`
  font-size: 14px;
  text-align: right;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const PublicationScheduleWrapper = styled.div`
  margin-bottom: 20px;
`;

const PublicationScheduleLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const FixedScheduleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ScheduleInput = styled.input`
  width: 100px;
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const PublicationDetailsWrapper = styled.div`
  margin-bottom: 20px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <PublicationScheduleForm
      year={2023}
      month={6}
      date={16}
      paperSize="A4 横・A4 縦"
      colorMode={true}
      fixedSchedule="0000000"
      yoyakuSchedule="9999999"
      title="サンプルタイトル"
      subtitle="サンプルサブタイトル"
      subsubtitle="サンプル柱タイトル"
      onSubmit={true}
      pageNumber={1}
    />
  );
};

export default App;