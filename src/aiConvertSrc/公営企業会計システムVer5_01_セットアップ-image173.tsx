import React from 'react';
import styled from 'styled-components';

// 個別設定マスタの型定義
type IndividualSettingMaster = {
  officeCode: string;
  officeCodeName: string;
  personalCode: string;
  personalCodeName: string;
  apGroupCode: string;
  managementPersonalCode: string;
  managementPersonalCodeName: string;
  isOfficeRegistered: boolean;
  isPersonalRegistered: boolean;
  isManagementRegistered: boolean;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 600px) {
    max-width: 500px;
    margin: 0 auto;
  }  
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const CodeInput = styled.input`
  width: 100px;
`;

const NameInput = styled.input`
  width: 200px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// 個別設定マスタコンポーネント
const IndividualSettingMasterComponent: React.FC<{
  data: IndividualSettingMaster;
  onChange: (data: IndividualSettingMaster) => void;
}> = ({ data, onChange }) => {
  // フィールドの変更をハンドル
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    onChange({ ...data, [name]: newValue });
  };

  return (
    <Container>
      <Title>個別設定マスタ</Title>
      <Table>
        <tbody>
          <tr>
            <TableHeader>事務所</TableHeader>
            <TableData>
              <CodeInput
                type="text"
                name="officeCode"
                value={data.officeCode}
                onChange={handleChange}
              />
            </TableData>
            <TableData>
              <NameInput
                type="text"
                name="officeCodeName"
                value={data.officeCodeName}
                onChange={handleChange}
              />
            </TableData>
          </tr>
          <tr>
            <TableHeader>担当コード</TableHeader>
            <TableData>
              <CodeInput
                type="text"
                name="personalCode"
                value={data.personalCode}
                onChange={handleChange}
              />
            </TableData>
            <TableData>
              <NameInput
                type="text"
                name="personalCodeName"
                value={data.personalCodeName}
                onChange={handleChange}
              />
            </TableData>
          </tr>
          <tr>
            <TableHeader>APグループコード</TableHeader>
            <TableData colSpan={2}>
              <CodeInput
                type="text"
                name="apGroupCode"
                value={data.apGroupCode}
                onChange={handleChange}
              />
            </TableData>
          </tr>
          <tr>
            <TableHeader>操作可能所属コード</TableHeader>
            <TableData>
              <CodeInput
                type="text"
                name="managementPersonalCode"
                value={data.managementPersonalCode}
                onChange={handleChange}
              />
            </TableData>
            <TableData>
              <NameInput
                type="text"
                name="managementPersonalCodeName"
                value={data.managementPersonalCodeName}
                onChange={handleChange}
              />
            </TableData>
          </tr>
        </tbody>
      </Table>

      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            name="isOfficeRegistered"
            checked={data.isOfficeRegistered}
            onChange={handleChange}
          />
          登録
        </label>
        <label>
          <input
            type="checkbox"
            name="isPersonalRegistered"
            checked={data.isPersonalRegistered}
            onChange={handleChange}
          />
          削除
        </label>
        <label>
          <input
            type="checkbox"
            name="isManagementRegistered"
            checked={data.isManagementRegistered}
            onChange={handleChange}
          />
          参照
        </label>
      </CheckboxContainer>

      <div>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleData: IndividualSettingMaster = {
  officeCode: '0000008',
  officeCodeName: '管理部',
  personalCode: '021',
  personalCodeName: '経理担当',
  apGroupCode: '0000000',
  managementPersonalCode: '0000001',
  managementPersonalCodeName: '総務部',
  isOfficeRegistered: false,
  isPersonalRegistered: false,
  isManagementRegistered: true,
};

// 使用例
const IndividualSettingMasterPage: React.FC = () => {
  const [data, setData] = React.useState<IndividualSettingMaster>(sampleData);

  return (
    <IndividualSettingMasterComponent
      data={data}
      onChange={(newData) => setData(newData)}
    />
  );
};

export default IndividualSettingMasterPage;