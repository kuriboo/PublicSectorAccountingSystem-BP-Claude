import React from 'react';
import styled from '@emotion/styled';

interface ConnectSettingFormProps {
  defaultValues?: {
    managerId: number;
    memoArea: number;
    collectionBranch: number;
    regionCD: number;
  };
  onSubmit: (values: {
    managerId: number;
    memoArea: number;
    collectionBranch: number;
    regionCD: number;
  }) => void;
}

const ConnectSettingForm: React.FC<ConnectSettingFormProps> = ({
  defaultValues = {
    managerId: 0,
    memoArea: 0, 
    collectionBranch: 0,
    regionCD: 0,
  },
  onSubmit,
}) => {
  const [formValues, setFormValues] = React.useState(defaultValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>連携設定マスタ</Title>
      <Table>
        <thead>
          <Row>
            <HeaderCell>編集</HeaderCell>
            <HeaderCell>追加</HeaderCell>
            <HeaderCell>削除</HeaderCell>
          </Row>
        </thead>
        <tbody>
          <Row>
            <DataCell>管理CD</DataCell>
            <DataCell>メータ区分</DataCell>
            <DataCell>収納拠点日区分</DataCell>
            <DataCell>地区区分CD</DataCell>
          </Row>
          <Row>
            <DataCell>{defaultValues.managerId}</DataCell>
            <DataCell>{defaultValues.memoArea}</DataCell>
            <DataCell>{defaultValues.collectionBranch}</DataCell>
            <DataCell>{defaultValues.regionCD}</DataCell>
          </Row>
        </tbody>
      </Table>
      <FieldsContainer>
        <label>
          管理CD
          <input type="number" name="managerId" value={formValues.managerId} onChange={handleChange} />
        </label>
        <label>
          メータ区分
          <input type="number" name="memoArea" value={formValues.memoArea} onChange={handleChange} />
        </label>
        <label>
          収納拠点日区分
          <input type="number" name="collectionBranch" value={formValues.collectionBranch} onChange={handleChange} />
        </label>
        <label>
          地区区分CD
          <input type="number" name="regionCD" value={formValues.regionCD} onChange={handleChange} />
        </label>
      </FieldsContainer>
      <ButtonsContainer>
        <SubmitButton type="submit">登録</SubmitButton>
        <CancelButton type="button">取消</CancelButton>
      </ButtonsContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const DataCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Example usage
const ExampleComponent: React.FC = () => {
  const handleSubmit = (values: {
    managerId: number;
    memoArea: number;
    collectionBranch: number; 
    regionCD: number;
  }) => {
    console.log(values);
  };

  return (
    <ConnectSettingForm
      defaultValues={{
        managerId: 10,
        memoArea: 1,
        collectionBranch: 1,
        regionCD: 1,
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleComponent;