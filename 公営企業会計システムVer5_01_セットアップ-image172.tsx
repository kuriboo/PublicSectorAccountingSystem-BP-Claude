import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyCode: string;
  companyName: string;
  departmentCode: string;
  departmentName: string;
  apGroupCode: string;
  operationDepartmentCode: string;
  operationDepartmentName: string;
  canDelete?: boolean;
  canEdit?: boolean;
  canCopy?: boolean;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ItemTitle = styled.div`
  width: 200px;
  font-weight: bold;
`;

const ItemValue = styled.div`
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  button {
    margin-left: 8px;
  }
`;

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyCode,
  companyName,
  departmentCode,
  departmentName,
  apGroupCode,
  operationDepartmentCode,
  operationDepartmentName,
  canDelete = false,
  canEdit = false,
  canCopy = false,
}) => {
  return (
    <Container>
      <Title>データ権限個別設定マスタ</Title>
      <ItemContainer>
        <ItemTitle>会社:</ItemTitle>
        <ItemValue>{companyCode}</ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>所属コード:</ItemTitle>
        <ItemValue>{departmentCode}</ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>担当コード:</ItemTitle>
        <ItemValue>{operationDepartmentCode}</ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>APグループコード:</ItemTitle>
        <ItemValue>{apGroupCode}</ItemValue>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>操作可能所属コード:</ItemTitle>
        <ItemValue>{operationDepartmentCode}</ItemValue>
      </ItemContainer>
      <ButtonsContainer>
        {canDelete && <button>削除</button>}
        {canEdit && <button>修正</button>}
        {canCopy && <button>コピー</button>}
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonsContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const companyInfo = {
    companyCode: '000001',
    companyName: 'ABC Company',
    departmentCode: '001',
    departmentName: 'Sales Department',
    apGroupCode: '0000001',
    operationDepartmentCode: '000001',
    operationDepartmentName: 'Operation Department',
    canDelete: true,
    canEdit: true,
    canCopy: true,
  };

  return (
    <div>
      <CompanyInfo {...companyInfo} />
    </div>
  );
};

export default App;