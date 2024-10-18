import React from 'react';
import styled from '@emotion/styled';

// 権限区分の型定義
type Permission = '○' | '×' | '-';

// アプリケーション権限マスタのプロパティ型定義
type ApplicationPermissionMasterProps = {
  companyCode: string;
  accountCode: string;
  apGroupCode: string;
  permissions: {
    all: Permission;
    register: Permission;
    temporaryDelete: Permission;
    completeDelete: Permission;
    partialDelete: Permission;
    individualNumberLink: Permission;
  };
};

// アプリケーション権限マスタコンポーネント
const ApplicationPermissionMaster: React.FC<ApplicationPermissionMasterProps> = ({
  companyCode,
  accountCode,
  apGroupCode,
  permissions,
}) => {
  return (
    <Container>
      <Title>アプリケーション権限マスタ</Title>
      <Form>
        <Label>
          平成17年
          <Input type="text" value={companyCode} readOnly />
          年度
        </Label>
        <Label>
          所属コード
          <Input type="text" value={accountCode} readOnly />
          会計担当
        </Label>
        <Label>
          担当コード
          <Input type="text" value="002" readOnly />
          会計担当
        </Label>
        <Label>
          APグループコード
          <Input type="text" value={apGroupCode} readOnly />
        </Label>
        <Table>
          <thead>
            <tr>
              <Th>権限区分</Th>
              <Th>なし</Th>
              <Th>全データ</Th>
              <Th>所属大分類データ</Th>
              <Th>所属中分類データ</Th>
              <Th>所属小分類データ</Th>
              <Th>個別指定</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>登録</Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.register === '○'} readOnly /></Td>
            </tr>
            <tr>
              <Td>削除</Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.temporaryDelete === '○'} readOnly /></Td>
            </tr>
            <tr>
              <Td>参照</Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
              <Td><Checkbox checked={permissions.all === '○'} readOnly /></Td>
            </tr>
          </tbody>
        </Table>
      </Form>
      <ButtonContainer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: ApplicationPermissionMasterProps = {
  companyCode: '000001',
  accountCode: '123456',
  apGroupCode: '0000001',
  permissions: {
    all: '○',
    register: '○',
    temporaryDelete: '○',
    completeDelete: '○',  
    partialDelete: '-',
    individualNumberLink: '×',
  },
};

// サンプル表示用コンポーネント
const SampleApplicationPermissionMaster: React.FC = () => {
  return (
    <ApplicationPermissionMaster
      companyCode={sampleData.companyCode}
      accountCode={sampleData.accountCode}
      apGroupCode={sampleData.apGroupCode}
      permissions={sampleData.permissions}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
  background-color: #f0f0f0;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: not-allowed;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border: none;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default SampleApplicationPermissionMaster;