import React from 'react';
import styled from '@emotion/styled';

interface CompanyStatisticsFormProps {
  companyCode: string;
  year: number;
  quarterSelection: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CompanyStatisticsForm: React.FC<CompanyStatisticsFormProps> = ({
  companyCode,
  year,
  quarterSelection,
  handleSubmit,
}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>決算統計データ移行</Title>
      <Description>
        分析した決算統計金額を集計し、各表項目へ反映します。
        （再実行により、決算統計金額保守で再度した金額が消えとはありません。）
      </Description>
      <InputContainer>
        <Label>令和02</Label>
        <Input value={year} readOnly />
        <Label>年度</Label>
      </InputContainer>
      <InputContainer>
        <Label>業種・事業コード 171</Label>
        <Input value={companyCode} readOnly />
      </InputContainer>
      <Select value={quarterSelection}>
        <option value="">公共下水道</option>
        {/* Add more options based on available quarter selections */}
      </Select>
      <InputContainer>
        <Label>表番号</Label>
        <Input />
        <Label>施設</Label>
        <Input />
      </InputContainer>
      <SubmitButton type="submit">実行</SubmitButton>
      <CancelButton type="button">クリア</CancelButton>
      <HelpButton type="button">終了</HelpButton>
      <Notification>
        決算分析処理後の金額集計、企業債データおよび簡易水道データの取り込みを行い、調査表の金額へ反映します。
        企業債データは起債管理システムから出力したファイルを取り込みます。
        簡易水道データの取り込みは、水道事業と簡易水道事業を別データベースで運用している場合、簡易水道事業の
        決算統計調査表出力機能から出力したdatファイルを、水道事業側で取り込みます。
        （簡易水道の取り込みは、決算統計年度別管理マスタの簡易水道取込区分が設定されている場合に表示されます。）
      </Notification>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;

const HelpButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
`;

const Notification = styled.p`
  margin-top: 20px;
  text-align: center;
`;

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <CompanyStatisticsForm
        companyCode="171"
        year={2020}
        quarterSelection="公共下水道"
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;