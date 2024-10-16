// Master.tsx
import React from 'react';
import styled from '@emotion/styled';

type MasterProps = {
  data: {
    code: string;
    name1: string;
    name2: string;
    description: string;
  }[];
  currentPage: number;
  totalPages: number;
  onAddNew: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOK: () => void;
  onCancel: () => void;
  onExecute: () => void;
};

const Master: React.FC<MasterProps> = ({
  data,
  currentPage,
  totalPages,
  onAddNew,
  onEdit,
  onDelete,
  onPrev,
  onNext,
  onOK,
  onCancel,
  onExecute,
}) => {
  return (
    <Container>
      <Header>
        <Title>仕訳マスタ</Title>
        <Actions>
          <RegisterButton onClick={onAddNew}>登録</RegisterButton>
          <ClearButton>訂正</ClearButton>
          <DeleteButton onClick={onDelete}>削除</DeleteButton>
        </Actions>
      </Header>

      <Main>
        <PropertyList>
          <LabeledProperty>
            <PropertyLabel>内容</PropertyLabel>
            <PropertyInput />
          </LabeledProperty>
          <LabeledProperty>
            <PropertyLabel>摘要(1)</PropertyLabel>
            <PropertyInput />
          </LabeledProperty>
          <LabeledProperty>
            <PropertyLabel>摘要(2)</PropertyLabel>
            <PropertySelect>
              <option value=""></option>
            </PropertySelect>
          </LabeledProperty>
          <LabeledProperty>
            <PropertyLabel>仕訳先</PropertyLabel>
          </LabeledProperty>
        </PropertyList>

        <Table>
          <thead>
            <TableRow>
              <TableHeader>水道料金（日報率）</TableHeader>
              <TableHeader>未収給水収益</TableHeader>
              <TableHeader>水道料金</TableHeader>
              <TableHeader>未収給水収益</TableHeader>
              <TableHeader>水道料金</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.name1}</TableCell>
                <TableCell>{item.name2}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <PrevButton onClick={onPrev}>前データ</PrevButton>
          <NextButton onClick={onNext}>次データ</NextButton>
          <PageInfo>
            {currentPage} / {totalPages}
          </PageInfo>
        </Pagination>

      </Main>

      <Footer>
        <ExecuteButton onClick={onExecute}>継続仕訳コード</ExecuteButton>
        <OKButton onClick={onOK}>ＯＫ</OKButton>
        <CancelButton onClick={onCancel}>終了</CancelButton>
      </Footer>
    </Container>
  );
};

// Sample usage
const SampleMasterData = [
  {
    code: '001',
    name1: '水道料金（日報率）',
    name2: '未収給水収益',
    description: '水道料金',
  },
  {
    code: '002',
    name1: '下水道料金',
    name2: '未収下水道使用料', 
    description: '下水道料金',
  },
];

const SampleMaster = () => {
  return (
    <Master
      data={SampleMasterData}
      currentPage={1}
      totalPages={5}
      onAddNew={() => console.log('Add New')}
      onEdit={() => console.log('Edit')}
      onDelete={() => console.log('Delete')}
      onPrev={() => console.log('Previous')} 
      onNext={() => console.log('Next')}
      onOK={() => console.log('OK')}
      onCancel={() => console.log('Cancel')} 
      onExecute={() => console.log('Execute')}
    />
  );
};

export default SampleMaster;

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0;
`;

const Actions = styled.div`
  > * {
    margin-left: 8px;
  }
`;

const RegisterButton = styled.button``;
const ClearButton = styled.button``;  
const DeleteButton = styled.button``;

const Main = styled.div`
  flex: 1;
  padding: 16px;
`;

const PropertyList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

const LabeledProperty = styled.label`
  display: flex;
  align-items: center;
`;

const PropertyLabel = styled.span`
  margin-right: 8px;
`;

const PropertyInput = styled.input`
  flex: 1;
`;

const PropertySelect = styled.select`
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 4px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 4px;
  border: 1px solid #ccc;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevButton = styled.button``;
const NextButton = styled.button``;
const PageInfo = styled.span``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background-color: #f0f0f0;
  > * {
    margin-left: 8px;
  }  
`;

const ExecuteButton = styled.button``;
const OKButton = styled.button``;
const CancelButton = styled.button``;