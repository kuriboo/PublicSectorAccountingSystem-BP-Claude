import React from 'react';
import styled from '@emotion/styled';

type CompanySelectionProps = {
  companies: string[];
  selectedCompany: string;
  onCompanyChange: (company: string) => void;
};

const CompanySelection: React.FC<CompanySelectionProps> = ({
  companies,
  selectedCompany,
  onCompanyChange,
}) => {
  return (
    <CompanySelectionContainer>
      <CompanySelectionLabel>会社内容</CompanySelectionLabel>
      <CompanySelectionSelect
        value={selectedCompany}
        onChange={(e) => onCompanyChange(e.target.value)}
      >
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </CompanySelectionSelect>
    </CompanySelectionContainer>
  );
};

const CompanySelectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CompanySelectionLabel = styled.label`
  margin-right: 8px;
`;

const CompanySelectionSelect = styled.select`
  padding: 4px;
  font-size: 14px;
`;

type EmploymentSelectionProps = {
  employmentStatuses: string[];
  selectedEmploymentStatus: string;
  onEmploymentStatusChange: (status: string) => void;
};

const EmploymentSelection: React.FC<EmploymentSelectionProps> = ({
  employmentStatuses,
  selectedEmploymentStatus,
  onEmploymentStatusChange,
}) => {
  return (
    <EmploymentSelectionContainer>
      <EmploymentSelectionLabel>雇用区分</EmploymentSelectionLabel>
      <EmploymentSelectionSelect
        value={selectedEmploymentStatus}
        onChange={(e) => onEmploymentStatusChange(e.target.value)}
      >
        {employmentStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </EmploymentSelectionSelect>
    </EmploymentSelectionContainer>
  );
};

const EmploymentSelectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const EmploymentSelectionLabel = styled.label`
  margin-right: 8px;
`;

const EmploymentSelectionSelect = styled.select`
  padding: 4px;
  font-size: 14px;
`;

type SpecificationFormProps = {
  specificationNumber: string;
  onSpecificationNumberChange: (value: string) => void;
  version: string;
  onVersionChange: (value: string) => void;
  relatedIndustries: string;
  onRelatedIndustriesChange: (value: string) => void;
  remarks: string;
  onRemarksChange: (value: string) => void;
};

const SpecificationForm: React.FC<SpecificationFormProps> = ({
  specificationNumber,
  onSpecificationNumberChange,
  version,
  onVersionChange,
  relatedIndustries,
  onRelatedIndustriesChange,
  remarks, 
  onRemarksChange,
}) => {
  return (
    <SpecificationFormContainer>
      <SpecificationFormItem>
        <SpecificationFormLabel>指名番号</SpecificationFormLabel>
        <SpecificationFormInput
          value={specificationNumber}
          onChange={(e) => onSpecificationNumberChange(e.target.value)}
        />
      </SpecificationFormItem>
      <SpecificationFormItem>
        <SpecificationFormLabel>業種明細</SpecificationFormLabel>
        <SpecificationFormTextarea
          value={relatedIndustries}
          onChange={(e) => onRelatedIndustriesChange(e.target.value)}
        />
      </SpecificationFormItem>
      <SpecificationFormItem>
        <SpecificationFormLabel>バージョン</SpecificationFormLabel>
        <SpecificationFormInput
          value={version}
          onChange={(e) => onVersionChange(e.target.value)}
        />
      </SpecificationFormItem>
      <SpecificationFormItem>
        <SpecificationFormLabel>その他</SpecificationFormLabel>
        <SpecificationFormTextarea
          value={remarks}
          onChange={(e) => onRemarksChange(e.target.value)}
        />
      </SpecificationFormItem>
    </SpecificationFormContainer>
  );
};

const SpecificationFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const SpecificationFormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpecificationFormLabel = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const SpecificationFormInput = styled.input`
  padding: 4px;
  font-size: 14px;
`;

const SpecificationFormTextarea = styled.textarea`
  padding: 4px;
  font-size: 14px;
  resize: vertical;
`;

type PublicSelectionProps = {
  isPublic: boolean;
  onIsPublicChange: (value: boolean) => void;
};

const PublicSelection: React.FC<PublicSelectionProps> = ({ 
  isPublic,
  onIsPublicChange,
}) => {
  return (
    <PublicSelectionContainer>
      <PublicSelectionLabel>
        <PublicSelectionInput
          type="radio"
          checked={isPublic}
          onChange={() => onIsPublicChange(true)}
        />
        公開
      </PublicSelectionLabel>
      <PublicSelectionLabel>
        <PublicSelectionInput
          type="radio"
          checked={!isPublic}
          onChange={() => onIsPublicChange(false)}
        />  
        非公開
      </PublicSelectionLabel>
    </PublicSelectionContainer>
  );
};

const PublicSelectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PublicSelectionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const PublicSelectionInput = styled.input`
  margin-right: 4px;
`;

// サンプルデータと使用例
const App: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = React.useState('0001:管理なし');
  const [selectedEmploymentStatus, setSelectedEmploymentStatus] = React.useState(
    '0001:部門'
  );
  const [specificationNumber, setSpecificationNumber] = React.useState('');
  const [relatedIndustries, setRelatedIndustries] = React.useState('');
  const [version, setVersion] = React.useState('');
  const [remarks, setRemarks] = React.useState('');
  const [isPublic, setIsPublic] = React.useState(false);

  return (
    <div>
      <h2>企業・雇用形態選択</h2>
      <CompanySelection
        companies={['0001:管理なし', '0002:その他']}
        selectedCompany={selectedCompany}
        onCompanyChange={setSelectedCompany}
      />
      <EmploymentSelection
        employmentStatuses={['0001:部門', '0002:派遣', '0003:協力', '0004:現場']}
        selectedEmploymentStatus={selectedEmploymentStatus}
        onEmploymentStatusChange={setSelectedEmploymentStatus}
      />
      
      <h2>仕様関連</h2>
      <SpecificationForm
        specificationNumber={specificationNumber}
        onSpecificationNumberChange={setSpecificationNumber}
        version={version}  
        onVersionChange={setVersion}
        relatedIndustries={relatedIndustries}
        onRelatedIndustriesChange={setRelatedIndustries}
        remarks={remarks}
        onRemarksChange={setRemarks}
      />
      
      <h2>公開設定</h2>
      <PublicSelection 
        isPublic={isPublic}
        onIsPublicChange={setIsPublic}
      />
      
      <button>クリア</button>
      <button>終了</button>
    </div>
  );
};

export default App;