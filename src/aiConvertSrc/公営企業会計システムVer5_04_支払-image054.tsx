import React from 'react';
import styled from '@emotion/styled';

// 日付入力フィールドの型定義
type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// 日付入力フィールドコンポーネント
const DateField: React.FC<DateFieldProps> = ({ label, value, onChange }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
};

// 工事明細書入力フォームの型定義
type ConstructionStatementFormProps = {
  onSubmit: (data: {
    projectName: string;
    totalAmount: number;
    issueDate: string;
    completionDate: string;
    startDate: string;
    commencementDate: string;
    constructionPeriod: number;
  }) => void;
};

// 工事明細書入力フォームコンポーネント
const ConstructionStatementForm: React.FC<ConstructionStatementFormProps> = ({
  onSubmit,
}) => {
  const [projectName, setProjectName] = React.useState('');
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [issueDate, setIssueDate] = React.useState('');
  const [completionDate, setCompletionDate] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [commencementDate, setCommencementDate] = React.useState('');
  const [constructionPeriod, setConstructionPeriod] = React.useState(0);

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      projectName,
      totalAmount,
      issueDate,
      completionDate,
      startDate,
      commencementDate,
      constructionPeriod,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper>
        <Label>工事名称所</Label>
        <Input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Label>平成30年度 施設管理 1号</Label>
        <Input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
        />
      </FieldWrapper>
      <DateField
        label="着手年月日"
        value={startDate}
        onChange={(value) => setStartDate(value)}
      />
      <DateField
        label="竣工年月日"
        value={completionDate}
        onChange={(value) => setCompletionDate(value)}
      />
      <DateField
        label="完了年月日"
        value={commencementDate}
        onChange={(value) => setCommencementDate(value)}
      />
      <FieldWrapper>
        <Label>契約番号</Label>
        <Input
          type="number"
          value={constructionPeriod}
          onChange={(e) => setConstructionPeriod(Number(e.target.value))}
        />
      </FieldWrapper>
      <ButtonWrapper>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonWrapper>
    </Form>
  );
};

// サンプルデータ
const sampleData = {
  projectName: '○○工事',
  totalAmount: 1000000,
  issueDate: '2023-04-01',
  completionDate: '2023-05-31',
  startDate: '2023-04-15',
  commencementDate: '2023-05-15',
  constructionPeriod: 30,
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: typeof sampleData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>工事明細書</h1>
      <ConstructionStatementForm onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;