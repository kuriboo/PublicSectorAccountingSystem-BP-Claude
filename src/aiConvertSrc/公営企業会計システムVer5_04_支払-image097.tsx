import React from 'react';
import styled from '@emotion/styled';

type Company = {
  companyName: string;
  companyKana: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  url: string;
  establishmentDate: Date;
  capital: number;
  employees: number;
  businessDetails: string;
  bank1: string;
  bank2: string;
  accountingTerm: Date;
  accountingMonth: number;
  submissionDate: Date;
  paymentDate: Date;
  noteworthy: string;
};

type CompanyProfileFormProps = {
  company: Company;
  onSave: (company: Company) => void;
};

const CompanyProfileForm: React.FC<CompanyProfileFormProps> = ({ company, onSave }) => {
  // State for form fields
  const [companyName, setCompanyName] = React.useState(company.companyName);
  const [companyKana, setCompanyKana] = React.useState(company.companyKana);
  const [postalCode, setPostalCode] = React.useState(company.postalCode);
  const [address, setAddress] = React.useState(company.address);
  const [phoneNumber, setPhoneNumber] = React.useState(company.phoneNumber);
  const [faxNumber, setFaxNumber] = React.useState(company.faxNumber);
  const [url, setUrl] = React.useState(company.url);
  const [establishmentDate, setEstablishmentDate] = React.useState(company.establishmentDate);
  const [capital, setCapital] = React.useState(company.capital);
  const [employees, setEmployees] = React.useState(company.employees);
  const [businessDetails, setBusinessDetails] = React.useState(company.businessDetails);
  const [bank1, setBank1] = React.useState(company.bank1);
  const [bank2, setBank2] = React.useState(company.bank2);
  const [accountingTerm, setAccountingTerm] = React.useState(company.accountingTerm);
  const [accountingMonth, setAccountingMonth] = React.useState(company.accountingMonth);
  const [submissionDate, setSubmissionDate] = React.useState(company.submissionDate);
  const [paymentDate, setPaymentDate] = React.useState(company.paymentDate);
  const [noteworthy, setNoteworthy] = React.useState(company.noteworthy);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedCompany: Company = {
      companyName,
      companyKana,
      postalCode,
      address,
      phoneNumber,
      faxNumber,
      url,
      establishmentDate,
      capital,
      employees,
      businessDetails,
      bank1,
      bank2, 
      accountingTerm,
      accountingMonth,
      submissionDate,
      paymentDate,
      noteworthy,
    };
    onSave(updatedCompany);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Label>Company Name</Label>
        <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
      </FormSection>
      
      <FormSection>
        <Label>Company Kana</Label>  
        <Input value={companyKana} onChange={(e) => setCompanyKana(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>Postal Code</Label>
        <Input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>Address</Label>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />  
      </FormSection>

      <FormSection>
        <Label>Phone Number</Label>
        <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>Fax Number</Label>  
        <Input value={faxNumber} onChange={(e) => setFaxNumber(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>URL</Label>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} type="url" />
      </FormSection>

      <FormSection>
        <Label>Establishment Date</Label>
        <Input value={establishmentDate.toISOString().split('T')[0]} onChange={(e) => setEstablishmentDate(new Date(e.target.value))} type="date" />
      </FormSection>

      <FormSection>  
        <Label>Capital</Label>
        <Input value={capital} onChange={(e) => setCapital(Number(e.target.value))} type="number" min={0} />
      </FormSection>

      <FormSection>
        <Label>Number of Employees</Label>
        <Input value={employees} onChange={(e) => setEmployees(Number(e.target.value))} type="number" min={0} />  
      </FormSection>

      <FormSection>
        <Label>Business Details</Label>
        <TextArea value={businessDetails} onChange={(e) => setBusinessDetails(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>Bank 1</Label>
        <Input value={bank1} onChange={(e) => setBank1(e.target.value)} /> 
      </FormSection>

      <FormSection>
        <Label>Bank 2</Label>
        <Input value={bank2} onChange={(e) => setBank2(e.target.value)} />
      </FormSection>

      <FormSection>
        <Label>Accounting Term</Label>
        <Input value={accountingTerm.toISOString().split('T')[0]} onChange={(e) => setAccountingTerm(new Date(e.target.value))} type="date" />  
      </FormSection>

      <FormSection>
        <Label>Accounting Month</Label>
        <Input value={accountingMonth} onChange={(e) => setAccountingMonth(Number(e.target.value))} type="number" min={1} max={12} />
      </FormSection>

      <FormSection>
        <Label>Submission Date</Label>
        <Input value={submissionDate.toISOString().split('T')[0]} onChange={(e) => setSubmissionDate(new Date(e.target.value))} type="date" />
      </FormSection>

      <FormSection>  
        <Label>Payment Date</Label>
        <Input value={paymentDate.toISOString().split('T')[0]} onChange={(e) => setPaymentDate(new Date(e.target.value))} type="date" />
      </FormSection>

      <FormSection>
        <Label>Noteworthy</Label>
        <TextArea value={noteworthy} onChange={(e) => setNoteworthy(e.target.value)} />
      </FormSection>

      <Button type="submit">Save</Button>
    </Form>
  );
};

// Sample usage
const SampleCompany: Company = {
  companyName: 'ACME Corp',
  companyKana: 'アクメ', 
  postalCode: '123-4567',
  address: '東京都渋谷区1-2-3',
  phoneNumber: '03-1234-5678',
  faxNumber: '03-1234-5679',  
  url: 'https://example.com',
  establishmentDate: new Date('2020-01-01'),
  capital: 10000000,
  employees: 100,
  businessDetails: 'Manufacturing and sales of Acme products',
  bank1: 'メインバンク',
  bank2: 'サブバンク',  
  accountingTerm: new Date('2023-03-31'),
  accountingMonth: 3,
  submissionDate: new Date('2023-05-31'),
  paymentDate: new Date('2023-06-30'),
  noteworthy: 'Noteable information about the company',
};

const SampleUsage: React.FC = () => {
  const handleSave = (company: Company) => {
    console.log('Saving company:', company);
  };

  return <CompanyProfileForm company={SampleCompany} onSave={handleSave} />;  
};

// Styled components
const Form = styled.form`
  display: grid;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export default SampleUsage;