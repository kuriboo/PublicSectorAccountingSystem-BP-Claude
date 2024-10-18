import React from 'react';
import styled from '@emotion/styled';

type ConstructionProgressManagementFormProps = {
  constructionNumber: string;
  constructionName: string;
  constructionStatus: string;
  startDate: string;
  completionDate: string;
  department: string;
  personInCharge: string;
  contractor: string;
  constructionLocation: string;
  designerCompany: string;
  designerPerson: string;
  designCompletionDate: string;
  constructionManager: string;
  constructionManagerAppointmentDate: string;
  constructionCompletionInspector: string;
  constructionCompletionInspectionDate: string;
  usePermitApplicationDate: string;
  intermediateInspectionDate: string;
  usePermitDate: string;
  completionReportDate: string;
  buildingCertificationReportDate: string;
  buildingRegistrationDate: string;
  taxDeclarationDate: string;
};

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ConstructionProgressManagementForm: React.FC<ConstructionProgressManagementFormProps> = ({
  constructionNumber,
  constructionName,
  constructionStatus,
  startDate,
  completionDate,
  department,
  personInCharge,
  contractor,
  constructionLocation,
  designerCompany,
  designerPerson,
  designCompletionDate,
  constructionManager,
  constructionManagerAppointmentDate,
  constructionCompletionInspector,
  constructionCompletionInspectionDate,
  usePermitApplicationDate,
  intermediateInspectionDate,
  usePermitDate,
  completionReportDate,
  buildingCertificationReportDate,
  buildingRegistrationDate,
  taxDeclarationDate,
}) => {
  return (
    <Form>
      <Label>工事番号</Label>
      <Input type="text" value={constructionNumber} readOnly />

      <Label>工事名称</Label>
      <Input type="text" value={constructionName} readOnly />

      <Label>工事状況</Label>
      <Input type="text" value={constructionStatus} readOnly />

      <Label>着工日</Label>
      <Input type="date" value={startDate} readOnly />

      <Label>完成日</Label>
      <Input type="date" value={completionDate} readOnly />

      <Label>担当部署</Label>
      <Input type="text" value={department} readOnly />

      <Label>担当者</Label>
      <Input type="text" value={personInCharge} readOnly />

      <Label>請負業者</Label>
      <Input type="text" value={contractor} readOnly />

      <Label>工事場所</Label>
      <Input type="text" value={constructionLocation} readOnly />

      <Label>設計業者</Label>
      <Input type="text" value={designerCompany} readOnly />

      <Label>設計者</Label>
      <Input type="text" value={designerPerson} readOnly />

      <Label>設計完了日</Label>
      <Input type="date" value={designCompletionDate} readOnly />

      <Label>現場代理人</Label>
      <Input type="text" value={constructionManager} readOnly />

      <Label>現場代理人通知日</Label>
      <Input type="date" value={constructionManagerAppointmentDate} readOnly />

      <Label>完成検査者</Label>
      <Input type="text" value={constructionCompletionInspector} readOnly />

      <Label>完成検査日</Label>  
      <Input type="date" value={constructionCompletionInspectionDate} readOnly />

      <Label>使用許可申請日</Label>
      <Input type="date" value={usePermitApplicationDate} readOnly />

      <Label>中間検査日</Label>
      <Input type="date" value={intermediateInspectionDate} readOnly />

      <Label>使用許可日</Label>
      <Input type="date" value={usePermitDate} readOnly />
        
      <Label>完了届提出日</Label>
      <Input type="date" value={completionReportDate} readOnly />
        
      <Label>建築証明書提出日</Label>
      <Input type="date" value={buildingCertificationReportDate} readOnly />

      <Label>建物登記日</Label>
      <Input type="date" value={buildingRegistrationDate} readOnly />

      <Label>課税申告日</Label>
      <Input type="date" value={taxDeclarationDate} readOnly />
    </Form>
  );
};

// Usage example
const App: React.FC = () => {
  const data: ConstructionProgressManagementFormProps = {
    constructionNumber: '999NM',
    constructionName: 'Next.js案件',
    constructionStatus: '実施中',
    startDate: '2017-02-27',
    completionDate: '2017-06-30',
    department: '東村山都市建設部',
    personInCharge: '東村山太郎',
    contractor: '株式会社ABC',
    constructionLocation: '東村山市XYZ',
    designerCompany: '設計株式会社',
    designerPerson: '山田太郎',
    designCompletionDate: '2017-01-15',
    constructionManager: '佐藤次郎',
    constructionManagerAppointmentDate: '2017-02-20',
    constructionCompletionInspector: '鈴木三郎',
    constructionCompletionInspectionDate: '',
    usePermitApplicationDate: '',
    intermediateInspectionDate: '',
    usePermitDate: '',
    completionReportDate: '',
    buildingCertificationReportDate: '',
    buildingRegistrationDate: '',  
    taxDeclarationDate: '',
  };

  return <ConstructionProgressManagementForm {...data} />;
};

export default App;