import React from 'react';
import styled from '@emotion/styled';

type ZoneDivision = {
  label: string;
  value: string;
};

type ManagementDivisionProps = {
  divisions: ZoneDivision[];
  managementDivisions: ZoneDivision[];
  onChangeZoneDivision?: (value: string) => void;
  onChangeManagementDivision?: (value: string) => void;
  onOk?: () => void;
  onCancel?: () => void;
};

const ManagementDivision: React.FC<ManagementDivisionProps> = ({
  divisions,
  managementDivisions,
  onChangeZoneDivision,
  onChangeManagementDivision,
  onOk,
  onCancel,
}) => {
  return (
    <Container>
      <Header>
        <Column>管理区分種別</Column>
        <Column>管理区分名称</Column>
      </Header>
      <Content>
        <SelectWrapper>
          <Select
            onChange={(e) => onChangeZoneDivision?.(e.target.value)}
          >
            {divisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <Select
            onChange={(e) => onChangeManagementDivision?.(e.target.value)}
          >
            {managementDivisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </Select>
        </SelectWrapper>
      </Content>
      <Footer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 1px solid #ccc;
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  background-color: #f0f0f0;
  padding: 4px;
`;

const Column = styled.div`
  flex: 1;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;
`;

const SelectWrapper = styled.div`
  flex: 1;
  padding: 4px;
`;

const Select = styled.select`
  width: 100%;
  height: 24px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// Usage example
const divisions = [
  { label: '選択肢1', value: 'option1' },
  { label: '選択肢2', value: 'option2' },
];

const managementDivisions = [
  { label: '選択肢A', value: 'optionA' },
  { label: '選択肢B', value: 'optionB' },
];

const App: React.FC = () => {
  const handleZoneDivisionChange = (value: string) => {
    console.log('Selected Zone Division:', value);
  };

  const handleManagementDivisionChange = (value: string) => {
    console.log('Selected Management Division:', value);
  };

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <ManagementDivision
      divisions={divisions}
      managementDivisions={managementDivisions}
      onChangeZoneDivision={handleZoneDivisionChange}
      onChangeManagementDivision={handleManagementDivisionChange}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default App;