import React from 'react';
import styled from '@emotion/styled';

type ConstructionReservationFormProps = {
  onSubmit: (data: ConstructionReservationData) => void;
};

type ConstructionReservationData = {
  constructionNo: string;
  fiscalYear: string;
  constructionName: string;
  constructionLocation: string;
  completionSchedule: string;
  constructionType: string;
  workType: string;
  buildingRemovalType: string;
  directConstructionCost1: number;
  sitePreparationCost: number;
  miscExpense1: number;
  miscExpense2: number;
  miscExpense3: number;
  totalConstructionCost: number;
  totalSitePreparationCost: number;
  totalMiscExpense: number;
  grandTotalIncludingTax: number;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 4px;
  width: 100%;
`;

const Select = styled.select`
  padding: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConstructionReservationForm: React.FC<ConstructionReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ConstructionReservationData = {
      constructionNo: formData.get('constructionNo') as string,
      fiscalYear: formData.get('fiscalYear') as string,
      constructionName: formData.get('constructionName') as string,
      constructionLocation: formData.get('constructionLocation') as string,
      completionSchedule: formData.get('completionSchedule') as string,
      constructionType: formData.get('constructionType') as string,
      workType: formData.get('workType') as string,
      buildingRemovalType: formData.get('buildingRemovalType') as string,
      directConstructionCost1: Number(formData.get('directConstructionCost1')),
      sitePreparationCost: Number(formData.get('sitePreparationCost')),
      miscExpense1: Number(formData.get('miscExpense1')),
      miscExpense2: Number(formData.get('miscExpense2')),
      miscExpense3: Number(formData.get('miscExpense3')),
      totalConstructionCost: Number(formData.get('totalConstructionCost')),
      totalSitePreparationCost: Number(formData.get('totalSitePreparationCost')),
      totalMiscExpense: Number(formData.get('totalMiscExpense')),
      grandTotalIncludingTax: Number(formData.get('grandTotalIncludingTax')),
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>工事台帳保守</Label>
          <Input type="text" name="constructionNo" />
        </FormField>
        <FormField>
          <Label>年度</Label>
          <Input type="text" name="fiscalYear" />
        </FormField>
        <FormField>
          <Label>工事名称</Label>
          <Input type="text" name="constructionName" />
        </FormField>
        <FormField>
          <Label>工事場所</Label>
          <Input type="text" name="constructionLocation" />
        </FormField>
        <FormField>
          <Label>工事完成フラグ</Label>
          <Select name="completionSchedule">
            <option value="未完成">未完成</option>
            <option value="完成">完成</option>
          </Select>
        </FormField>
        <FormField>
          <Label>工事区分フラグ</Label>
          <Select name="constructionType">
            <option value="新規">新規</option>
            <option value="改修">改修</option>
          </Select>
        </FormField>
        <FormField>
          <Label>建設仮勘定フラグ</Label>
          <Select name="workType">
            <option value="資産">資産</option>
            <option value="建仮残">建仮残</option>
          </Select>
        </FormField>
        <FormField>
          <Label>直接施工費</Label>
          <Input type="number" name="directConstructionCost1" />
        </FormField>
        <FormField>
          <Label>特定経費</Label>
          <Input type="number" name="sitePreparationCost" />
        </FormField>
        <FormField>
          <Label>事務費1</Label>
          <Input type="number" name="miscExpense1" />
        </FormField>
        <FormField>
          <Label>事務費2</Label>
          <Input type="number" name="miscExpense2" />
        </FormField>
        <FormField>
          <Label>事務費3</Label>
          <Input type="number" name="miscExpense3" />
        </FormField>
        <FormField>
          <Label>過年度按分対象額</Label>
          <Input type="number" name="totalConstructionCost" />
        </FormField>
        <FormField>
          <Label>過年度事務費1</Label>
          <Input type="number" name="totalSitePreparationCost" />
        </FormField>
        <FormField>
          <Label>過年度事務費2</Label>
          <Input type="number" name="totalMiscExpense" />
        </FormField>
        <FormField>
          <Label>固定資産計上済額</Label>
          <Input type="number" name="grandTotalIncludingTax" />
        </FormField>
        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

export default ConstructionReservationForm;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: ConstructionReservationData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h1>Construction Reservation Form</h1>
      <ConstructionReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;