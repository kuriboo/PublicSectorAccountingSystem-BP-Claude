import React from 'react';
import styled from 'styled-components';

// 型定義
type CompanySearchFormProps = {
  onSubmit: (data: {
    companyCode?: string;
    departmentCode?: string;
    fiscalYear: string;
    fiscalMonth: string;
  }) => void;
};

// スタイル定義
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 2;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const CompanySearchForm: React.FC<CompanySearchFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      companyCode: form.companyCode.value || undefined,
      departmentCode: form.departmentCode.value || undefined,
      fiscalYear: form.fiscalYear.value,
      fiscalMonth: form.fiscalMonth.value,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>
          会社区分
          <Select name="companyCode">
            <option value="">指定なし</option>
            <option value="code1">会社区分コード1</option>
            {/* 会社区分の選択肢を追加 */}
          </Select>
        </Label>
        <Label>
          〜
          <Select name="departmentCode">
            <option value="">指定なし</option>
            <option value="code1">会社区分コード1</option>
            {/* 会社区分の選択肢を追加 */}
          </Select>
        </Label>
      </Row>
      <Row>
        <Label>
          範囲指定
          <Input type="text" name="fiscalYear" defaultValue="00000000" />
        </Label>
        <Label>
          〜
          <Input type="text" name="fiscalYear2" defaultValue="9999999999" />
        </Label>
      </Row>
      <Row>
        <Label>
          資産番号
          <Input type="number" name="assetNumber" defaultValue="0" min="0" />
        </Label>
        <Label>
          〜
          <Input type="number" name="assetNumber2" defaultValue="99" min="0" />
        </Label>
      </Row>
      <SubmitButton type="submit">OK</SubmitButton>
    </Form>
  );
};

// サンプルデータ
const sampleData = {
  companyCode: 'code1',
  departmentCode: 'code2',
  fiscalYear: '20230201',
  fiscalMonth: '02',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: {
    companyCode?: string;
    departmentCode?: string;
    fiscalYear: string;
    fiscalMonth: string;
  }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>会社検索フォーム</h1>
      <CompanySearchForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <CompanySearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;