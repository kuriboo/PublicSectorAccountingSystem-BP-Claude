import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  sectionCode: string;
  accountCode: string;
  appropriationCode: string;
};

type WaterRight = {
  isAllowed: boolean;
  label: string;
};

type ApplicationFormProps = {
  formData: FormData;
  waterRights: WaterRight[];
  onDataChange: (data: FormData) => void;
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({ formData, waterRights, onDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...formData, [name]: value });
  };

  return (
    <Container>
      <TitleText>アプリケーション権限マスタ</TitleText>
      <FormSection>
        <Label>
          業務
          <Input type="text" name="sectionCode" value={formData.sectionCode} onChange={handleChange} />
        </Label>
        <Label>
          所属コード
          <Input type="text" name="accountCode" value={formData.accountCode} onChange={handleChange} />
        </Label>
        <Label>
          担当コード
          <Input type="text" name="appropriationCode" value={formData.appropriationCode} onChange={handleChange} />
        </Label>
      </FormSection>
      <TableSection>
        <TableHeader>
          <Row>
            <HeaderCell>権限区分</HeaderCell>
            <HeaderCell>なし</HeaderCell>
            <HeaderCell>全データ</HeaderCell>
            <HeaderCell>所属大分類データ</HeaderCell>
            <HeaderCell>所属中分類データ</HeaderCell>
            <HeaderCell>所属小分類データ</HeaderCell>
            <HeaderCell>個別指定</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {waterRights.map(({ label, isAllowed }) => (
            <Row key={label}>
              <Cell>{label}</Cell>
              {Array.from({ length: 6 }).map((_, i) => (
                <Cell key={i}>
                  <input type="checkbox" checked={isAllowed} onChange={() => {}} />
                </Cell>
              ))}
            </Row>
          ))}
        </TableBody>
      </TableSection>
      <ButtonSection>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonSection>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
`;

const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const FormSection = styled.div`
  display: flex; 
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  padding: 0.25rem;
`;

const TableSection = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
  background-color: #f0f0f0;
`;

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Sample usage
const SampleApplicationForm = () => {
  const [formData, setFormData] = React.useState<FormData>({
    sectionCode: 'H29',
    accountCode: '000001',
    appropriationCode: '001',
  });

  const waterRights: WaterRight[] = [
    { label: '登録', isAllowed: true },
    { label: '削除', isAllowed: false },
    { label: '参照', isAllowed: true },
  ];

  const handleDataChange = (data: FormData) => {
    setFormData(data);
  };

  return <ApplicationForm formData={formData} waterRights={waterRights} onDataChange={handleDataChange} />;
};

export default SampleApplicationForm;