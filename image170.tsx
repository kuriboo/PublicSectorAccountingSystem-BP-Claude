import React from 'react';
import styled from 'styled-components';

type ApplicationFormProps = {
  company: string;
  name: string;
  email: string;
  apGroupCode: string;
  permissions: {
    [key: string]: boolean;
  };
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CheckboxCell = styled.td`
  text-align: center;
`;

const ApplicationForm: React.FC<ApplicationFormProps> = ({ company, name, email, apGroupCode, permissions }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <th>会社</th>
          <td>{company}</td>
        </tr>
        <tr>
          <th>所属コード</th>
          <td>{apGroupCode}</td>
        </tr>
        <tr>
          <th>担当コード</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>APグループコード</th>
          <td>{apGroupCode}</td>
        </tr>
        <tr>
          <th>権限区分</th>
          <th>全データ</th>
          <th>所属大分類データ</th>
          <th>所属中分類データ</th>
          <th>所属小分類データ</th>
          <th>個別設定</th>
        </tr>
        <tr>
          <th>登録</th>
          <CheckboxCell>{permissions.regist ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.registDepartmentLarge ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.registDepartmentMedium ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.registDepartmentSmall ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.registIndividual ? '●' : ''}</CheckboxCell>
        </tr>
        <tr>
          <th>削除</th>
          <CheckboxCell>{permissions.delete ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.deleteDepartmentLarge ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.deleteDepartmentMedium ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.deleteDepartmentSmall ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.deleteIndividual ? '●' : ''}</CheckboxCell>
        </tr>
        <tr>
          <th>参照</th>
          <CheckboxCell>{permissions.reference ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.referenceDepartmentLarge ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.referenceDepartmentMedium ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.referenceDepartmentSmall ? '○' : ''}</CheckboxCell>
          <CheckboxCell>{permissions.referenceIndividual ? '●' : ''}</CheckboxCell>
        </tr>
      </tbody>
    </Table>
  );
};

// Usage example
const App: React.FC = () => {
  const applicationData = {
    company: '○○○○○',
    name: '山田太郎',
    email: 'taro@example.com',
    apGroupCode: '○○○○○○',
    permissions: {
      regist: true,
      registDepartmentLarge: true,
      registDepartmentMedium: true, 
      registDepartmentSmall: true,
      registIndividual: true,
      delete: true,
      deleteDepartmentLarge: true,
      deleteDepartmentMedium: true,
      deleteDepartmentSmall: true,  
      deleteIndividual: true,
      reference: true,
      referenceDepartmentLarge: true,
      referenceDepartmentMedium: true,
      referenceDepartmentSmall: true,
      referenceIndividual: true,
    },
  };

  return (
    <div>
      <h1>アプリケーション権限マスタ</h1>
      <ApplicationForm {...applicationData} />
    </div>
  );
};

export default App;