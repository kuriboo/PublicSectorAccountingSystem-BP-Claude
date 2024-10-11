import React from 'react';
import styled from '@emotion/styled';

type ContractManagementType = {
  registerCode: string;
  name: string;
  division: string;
};

type ContractManagementProps = {
  contractManagementData: ContractManagementType[];
};

const ContractManagement: React.FC<ContractManagementProps> = ({ contractManagementData }) => {
  return (
    <Container>
      <Title>契約管理区分保守</Title>
      <Row>
        <Label>平成29:</Label>
        <Input type="text" />
        <Button>前データ</Button>
        <Button>次データ</Button>
      </Row>
      <Row>
        <RadioButton type="radio" id="maintainContract" name="contractType" />
        <RadioButtonLabel htmlFor="maintainContract">契約管理区分使別名称</RadioButtonLabel>
        <RadioButton type="radio" id="divisionContract" name="contractType" />  
        <RadioButtonLabel htmlFor="divisionContract">契約管理区分名称</RadioButtonLabel>
      </Row>
      <ContractManagementTable>
        <thead>
          <TableRow>
            <TableHeader>コード</TableHeader>
            <TableHeader>名称</TableHeader>
            <TableHeader>削除</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {contractManagementData.map((data, index) => (
            <TableRow key={index}>
              <TableData>{data.registerCode}</TableData>
              <TableData>{data.name}</TableData>
              <TableData>{data.division}</TableData>
            </TableRow>
          ))}
        </tbody>
      </ContractManagementTable>
      <ButtonContainer>
        <SubmitButton>確定</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const ContractManagementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const sampleData: ContractManagementType[] = [
  { registerCode: '001', name: '契約保証金', division: '契約保証金に代わる担保の納付' },
  { registerCode: '002', name: '契約保証金', division: '金銭保証' },
  { registerCode: '003', name: '履行保証保険', division: '' },
  { registerCode: '004', name: '公共工事履行保証証券', division: '' },
];

const App: React.FC = () => {
  return (
    <div>
      <ContractManagement contractManagementData={sampleData} />
    </div>
  );
};

export default App;