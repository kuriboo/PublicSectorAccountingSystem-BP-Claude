import React from 'react';
import styled from '@emotion/styled';

type DecisionWorkflowFormProps = {
  fiscalYear: number;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

const DecisionWorkflowForm: React.FC<DecisionWorkflowFormProps> = ({
  fiscalYear,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>決算統計作表制御集計処理</Title>
      <Subtitle>
        総務課 予算・会計担当 ぎょうせい太郎
        <br />
        平成29年09月06日
      </Subtitle>
      <FormGroup>
        <Label>年度</Label>
        <Input type="text" value={fiscalYear} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>作表制御区分</Label>
        <Select onChange={(e) => onChange(e.target.value)}>
          <option>作表制御区分を選択</option>
          {/* TODO: 作表制御区分のオプションを追加 */}
        </Select>
      </FormGroup>
      <Message>
        事前にセットアップにて作表制御表関連の
        <br />
        設定が必要となります。
        <br />
        以下の処理で1000円丸めをしたデータを印字するには
        <br />
        この処理が必要です。
      </Message>
      <ButtonGroup>
        <Button type="button" onClick={onSubmit}>
          OK
        </Button>
        <Button type="button" onClick={onCancel}>
          クリア
        </Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Meiryo', sans-serif;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  text-align: right;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  width: 150px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 14px;
`;

const Message = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 15px;
  font-size: 14px;
`;

// 使用例
const SampleDecisionWorkflowForm: React.FC = () => {
  const handleChange = (value: string) => {
    console.log('Selected:', value);
  };

  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return (
    <DecisionWorkflowForm
      fiscalYear={29}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SampleDecisionWorkflowForm;