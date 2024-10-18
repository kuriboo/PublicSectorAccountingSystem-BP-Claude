import React, { useState } from 'react';
import styled from '@emotion/styled';

// 作表制御コンポーネントの型定義
interface ControlProps {
  onSubmit: () => void;
}

// 作表制御コンポーネント
const Control: React.FC<ControlProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [departmentCode, setDepartmentCode] = useState('001');
  const [comment, setComment] = useState('');
  const [checked, setChecked] = useState(false);

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Container>
      <Title>作表制御集計表作成</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作表指定</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Select
            value={departmentCode}
            onChange={(e) => setDepartmentCode(e.target.value)}
          >
            <option value="001">運用開成課(合計)</option>
            {/* 他の選択肢は省略 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>処理概要</Label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="作表制御表を作成します。"
          />
        </FormGroup>
        <FormGroup>
          <Checkbox
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <CheckboxLabel>
            行名称の2行目が空白の場合、その行を印字しない。
          </CheckboxLabel>
        </FormGroup>
        <ButtonGroup>
          <Button type="button">CSV出力</Button>
          <SubmitButton type="submit">OK</SubmitButton>
          <CancelButton type="button">クリア</CancelButton>
          <Button type="button">終了</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  margin-right: 8px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 4px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// サンプルデータを用いた使用例
const SampleData = {
  date: '2023-06-04',
  departmentCode: '001',
  comment: '作表制御表を作成します。',
  checked: true,
};

const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('フォームが送信されました');
  };

  return (
    <div>
      <Control onSubmit={handleSubmit} />
      <h3>サンプルデータを用いた表示例:</h3>
      <p>日付: {SampleData.date}</p>
      <p>作表制御区分: {SampleData.departmentCode}</p>
      <p>処理概要: {SampleData.comment}</p>
      <p>
        行名称の2行目が空白の場合、その行を印字しない:{' '}
        {SampleData.checked ? 'はい' : 'いいえ'}
      </p>
    </div>
  );
};

export default App;