import React from 'react';
import styled from 'styled-components';

// 型定義
type Props = {
  title: string;
  accountNumber: string;
  beforeDate: string;
  afterDate: string;
  note: string;
  onClose: () => void;
  onClear: () => void;
  onExecute: () => void;
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 15px;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
`;

// コンポーネント定義
const AccountPublishForm: React.FC<Props> = ({
  title,
  accountNumber,
  beforeDate,
  afterDate,
  note,
  onClose,
  onClear,
  onExecute,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        <Label>口座番号</Label>
        <Input type="text" value={accountNumber} readOnly />
      </Row>
      <Row>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="publish" defaultChecked /> データクリア
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="publish" /> 予測入力分確保
          </RadioLabel>
        </RadioGroup>
      </Row>
      <Row>
        <Label>抽出処理年月日</Label>
        <Input type="text" value={beforeDate} readOnly />
      </Row>
      <Row>
        <Label>前回抽出処理</Label>
        <Input type="text" value={afterDate} readOnly />
      </Row>
      <Row>
        <Label>抽出資産件数</Label>
        <TextArea value={note} readOnly />
      </Row>
      <ButtonGroup>
        <Button onClick={onExecute}>終了</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onClose}>閉じる</Button>
      </ButtonGroup>
    </Container>
  );
};

export default AccountPublishForm;

// 使用例
const SampleData = {
  title: '資産台帳抽出処理',
  accountNumber: '1234567890',
  beforeDate: '平成29年09月11日',
  afterDate: '平成28年04月30日',
  note: `注意\n「予測入力分確保」を選択した場合でも、以下のデータはクリアされます。\n- 異動予測データ入力画面で登録したデータ\n- 取得予測データ入力画面で抽出処理日以前の取得年月で登録した資産`,
};

const SampleUsage: React.FC = () => {
  const handleClose = () => {
    console.log('閉じるボタンがクリックされました');
  };

  const handleClear = () => {
    console.log('クリアボタンがクリックされました');
  };

  const handleExecute = () => {
    console.log('終了ボタンがクリックされました');
  };

  return (
    <AccountPublishForm
      title={SampleData.title}
      accountNumber={SampleData.accountNumber}
      beforeDate={SampleData.beforeDate}
      afterDate={SampleData.afterDate}
      note={SampleData.note}
      onClose={handleClose}
      onClear={handleClear}
      onExecute={handleExecute}
    />
  );
};