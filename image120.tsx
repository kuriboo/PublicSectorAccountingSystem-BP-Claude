import React from 'react';
import styled from 'styled-components';

// 部門情報の型定義
type Department = {
  code: string;
  name: string;
  readings: string;
};

// 資産番号の型定義
type AssetNumber = {
  fromNumber: string;
  toNumber: string;
};

// 修繕履歴管理一覧表コンポーネントのプロパティ型定義
type RepairHistoryTableProps = {
  executionDate: string;
  departments: Department[];
  selectedDepartment: Department | null;
  assetNumbers: AssetNumber;
  disposal?: string;
  location?: string;
  remarks?: string;
};

// スタイル定義
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  background-color: #f0f0f0;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 200px;
  height: 25px;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  min-width: 80px;
  height: 30px;
  margin: 0 5px;
`;

/**
 * 修繕履歴管理一覧表コンポーネント
 */
const RepairHistoryTable: React.FC<RepairHistoryTableProps> = ({
  executionDate,
  departments,
  selectedDepartment,
  assetNumbers,
  disposal = '',
  location = '',
  remarks = '',
}) => {
  return (
    <Container>
      <Title>修繕履歴管理一覧表</Title>
      <div>作業日付：{executionDate}</div>
      <FormGroup>
        <Label>範囲指定</Label>
        <Select defaultValue={selectedDepartment?.code ?? ''}>
          <option value="">修繕</option>
          {departments.map((dept) => (
            <option key={dept.code} value={dept.code}>
              {dept.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" defaultValue={assetNumbers.fromNumber} /> ～{' '}
        <Input type="text" defaultValue={assetNumbers.toNumber} />
      </FormGroup>
      <FormGroup>
        <Label>部門</Label>
        <Input type="text" defaultValue={disposal} />
      </FormGroup>
      <FormGroup>
        <Label>拠点</Label>
        <Input type="text" defaultValue={location} />
      </FormGroup>
      <FormGroup>
        <Label>地区</Label>
        <Input type="text" defaultValue={remarks} />
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleDepartments: Department[] = [
  { code: '001', name: '総務部', readings: 'ソウムブ' },
  { code: '002', name: '営業部', readings: 'エイギョウブ' },
];

const sampleAssetNumbers: AssetNumber = {
  fromNumber: '100000',
  toNumber: '999999',
};

/**
 * 修繕履歴管理一覧表コンポーネントの使用例
 */
const RepairHistoryTableExample: React.FC = () => {
  return (
    <RepairHistoryTable
      executionDate="2023年09月12日"
      departments={sampleDepartments}
      selectedDepartment={null}
      assetNumbers={sampleAssetNumbers}
    />
  );
};

export default RepairHistoryTableExample;