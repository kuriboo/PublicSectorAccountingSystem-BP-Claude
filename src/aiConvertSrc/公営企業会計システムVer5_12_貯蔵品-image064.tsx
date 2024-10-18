import React from 'react';
import styled from '@emotion/styled';

type DivisionSplitFormProps = {
  onSubmit: (formData: DivisionSplitFormData) => void;
};

type DivisionSplitFormData = {
  divisionMethod: 'split' | 'preserve';
  startDate: string;
  endDate: string;
  isAllStaff: boolean;
  protectionStaff: boolean;
  splitCode: string;
  partitionCode: string;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
  padding: 0;
`;

const Legend = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Radio = styled.input`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const DivisionSplitForm: React.FC<DivisionSplitFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: DivisionSplitFormData = {
      divisionMethod: formData.get('divisionMethod') as DivisionSplitFormData['divisionMethod'],
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      isAllStaff: formData.get('isAllStaff') === 'true',
      protectionStaff: formData.get('protectionStaff') === 'true',
      splitCode: formData.get('splitCode') as string,
      partitionCode: formData.get('partitionCode') as string,
    };

    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <Legend>分類別受払簿範囲入力</Legend>
        <InputGroup>
          <Label>
            <Radio type="radio" name="divisionMethod" value="split" defaultChecked />
            分類コード
          </Label>
          <Input type="text" name="splitCode" defaultValue="0000000" />
          〜 
          <Input type="text" name="partitionCode" defaultValue="9999999" />
        </InputGroup>
        <InputGroup>
          <Label>入出庫年月</Label>
          <Input type="text" name="startDate" defaultValue="平成29年06月" />
          〜
          <Input type="text" name="endDate" defaultValue="平成29年06月" />
        </InputGroup>
      </FieldSet>
      <FieldSet>
        <Legend>保管場所</Legend>
        <InputGroup>
          <Label>
            <Radio type="radio" name="isAllStaff" value="true" defaultChecked />
            全体
          </Label>
          <Label>
            <Radio type="radio" name="protectionStaff" value="true" />
            保管場所別
          </Label>
        </InputGroup>
      </FieldSet>
      <InputGroup>
        <Button type="submit">OK</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">終了</Button>
      </InputGroup>
    </Form>
  );
};

// サンプル使用例
const SampleDivisionSplitForm = () => {
  const handleSubmit = (data: DivisionSplitFormData) => {
    console.log(data);
    // 実際のロジックを実装する
  };

  return <DivisionSplitForm onSubmit={handleSubmit} />;
};

export default DivisionSplitForm;