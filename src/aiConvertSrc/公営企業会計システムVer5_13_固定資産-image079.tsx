import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  [key: string]: string;
};

type FormProps = {
  title: string;
  data: FormData[];
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const Form: React.FC<FormProps> = ({ title, data, onSubmit, onCancel, onClose }) => {
  return (
    <FormWrapper>
      <FormHeader>
        <FormTitle>{title}</FormTitle>
        <FormDate>平成29年09月12日</FormDate>
      </FormHeader>
      <FormContent>
        {data.map(({ label, value }, index) => (
          <FormItem key={index}>
            <FormLabel>{label}</FormLabel>
            <FormValue>{value}</FormValue>
            <FormLabel>{label}</FormLabel>
            <FormValue>{value}</FormValue>
          </FormItem>
        ))}
      </FormContent>
      <FormFooter>
        <FormButton onClick={onSubmit}>終了</FormButton>
        <FormButton onClick={onCancel}>クリア</FormButton>
        <FormButton onClick={onClose}>終了</FormButton>
      </FormFooter>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 500px;
`;

const FormHeader = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-bottom: 16px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const FormDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const FormContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin-bottom: 16px;
`;

const FormItem = styled.div`
  display: contents;
`;

const FormLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const FormValue = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FormFooter = styled.div`
  text-align: center;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const handleClose = () => {
    console.log('Form closed');
  };

  const formData: FormData[] = [
    { label: '部門', value: '001' },
    { label: '部門', value: '014' },
    { label: '施設', value: '00000' },
    { label: '施設', value: '999999' },
    { label: '管理名称', value: '000000' },
    { label: '管理名称', value: '9999999' },
    { label: '管理規格', value: '000000' },
    { label: '管理規格', value: '9999999' },
  ];

  return (
    <Form
      title="部門別施設別管理延長の調作成"
      data={formData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}  
      onClose={handleClose}
    />
  );
};

export default App;