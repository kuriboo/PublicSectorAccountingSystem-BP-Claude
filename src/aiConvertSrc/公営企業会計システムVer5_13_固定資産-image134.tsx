import React from 'react';
import styled from 'styled-components';

// Define types for component props
type SystemNameMasterProps = {
  systemTypes: string[];
  maxDivisionCode: number;
  name: string;
  onSubmit: (data: { divisionCode: string; name: string }) => void;
};

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SystemTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const SystemTypeLabel = styled.label`
  margin: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define main component
const SystemNameMaster: React.FC<SystemNameMasterProps> = ({
  systemTypes,
  maxDivisionCode,
  name,
  onSubmit,
}) => {
  const [selectedSystemType, setSelectedSystemType] = React.useState('');
  const [divisionCode, setDivisionCode] = React.useState('');
  const [systemName, setSystemName] = React.useState('');
  const [tableData, setTableData] = React.useState<{ divisionCode: string; name: string }[]>([]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (divisionCode && systemName) {
      onSubmit({ divisionCode, name: systemName });
      setTableData([...tableData, { divisionCode, name: systemName }]);
      setDivisionCode('');
      setSystemName('');
    }
  };

  return (
    <Container>
      <Title>システム固定資産名称マスタ</Title>
      <Form onSubmit={handleSubmit}>
        <SystemTypeContainer>
          {systemTypes.map((type) => (
            <SystemTypeLabel key={type}>
              <input
                type="radio"
                checked={selectedSystemType === type}
                onChange={() => setSelectedSystemType(type)}
              />
              {type}
            </SystemTypeLabel>
          ))}
        </SystemTypeContainer>
        <InputContainer>
          <label>異動区分コード</label>
          <Input
            type="text"
            value={divisionCode}
            onChange={(e) => setDivisionCode(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label>名称</label>
          <Input type="text" value={systemName} onChange={(e) => setSystemName(e.target.value)} />
        </InputContainer>
        <Button type="submit">編集</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <TableHeader>異動区分コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.divisionCode}>
              <TableData>{data.divisionCode}</TableData>
              <TableData>{data.name}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </div>
    </Container>
  );
};

export default SystemNameMaster;

// Example usage
const systemTypes = ['異動区分マスタ', '償却方法区分マスタ', '書式区分マスタ', '償却計算仕様区分マスタ'];

const SampleUsage: React.FC = () => {
  const handleSubmit = (data: { divisionCode: string; name: string }) => {
    console.log('Submitted data:', data);
  };

  return (
    <SystemNameMaster
      systemTypes={systemTypes}
      maxDivisionCode={99}
      name="取得"
      onSubmit={handleSubmit}
    />
  );
};