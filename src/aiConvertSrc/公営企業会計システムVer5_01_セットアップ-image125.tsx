import React from 'react';
import styled from '@emotion/styled';

type SplitProps = {
  code: string;
  name: string;
};

type DivisionProps = {
  divisions: SplitProps[];
  onAdd: () => void;
  onDelete: (index: number) => void;
};

const DivisionSettingDialog: React.FC<DivisionProps> = ({ divisions, onAdd, onDelete }) => {
  return (
    <DialogContainer>
      <DialogTitle>部門編集画面</DialogTitle>
      <MainContent>
        <TableHeader>
          <div>コード</div>
          <div>名前</div>
        </TableHeader>
        {divisions.map((division, index) => (
          <TableRow key={index}>
            <TableCell>{division.code}</TableCell>
            <TableCell>{division.name}</TableCell>
          </TableRow>
        ))}
        <AddButton onClick={onAdd}>小分類</AddButton>
      </MainContent>

      <DialogFooter>
        <FooterButton>前データ</FooterButton>
        <FooterButton>次データ</FooterButton>
        <FooterButton primary>OK</FooterButton>
        <FooterButton>クリア</FooterButton>
        <FooterButton onClick={() => onDelete(divisions.length - 1)}>キャンセル</FooterButton>
      </DialogFooter>
    </DialogContainer>
  );
};

// Styles
const DialogContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;
`;

const DialogTitle = styled.h2`
  margin: 0 0 16px;
`;

const MainContent = styled.div`
  margin-bottom: 16px;
`;

const TableHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;

  > div {
    flex: 1;
  }
`;

const TableRow = styled.div`
  display: flex;
  padding: 4px 0;
  
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.div`
  flex: 1;
  padding: 4px;
`;

const AddButton = styled.button`
  margin-top: 8px;
`;

const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FooterButton = styled.button<{ primary?: boolean }>`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: ${props => props.primary ? '#007bff' : '#f0f0f0'};
  color: ${props => props.primary ? '#fff' : '#333'};
  border: none;
  cursor: pointer;
`;

// Usage example
const divisions = [
  { code: '001', name: '部門名1' },
  { code: '002', name: '部門名2' },
];

const ExampleUsage: React.FC = () => {
  const handleAddDivision = () => {
    // Add division logic
  };

  const handleDeleteDivision = (index: number) => {
    // Delete division logic
  };

  return (
    <DivisionSettingDialog
      divisions={divisions}
      onAdd={handleAddDivision}
      onDelete={handleDeleteDivision}
    />
  );
};

export default DivisionSettingDialog;