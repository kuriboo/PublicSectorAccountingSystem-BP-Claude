import React from 'react';
import styled from 'styled-components';

// 型定義
type AssetInformation = {
  number: string;
  name: string;
  unitPrice: number;
  quantity: number;
  memo: string;
  taxRate: number;
};

type Props = {
  assetNo: string;
  assetType: string;
  structureName: string;
  acquisitionDate: string;
  acquisitionAmount: number;
  depreciatedAmount: number;
  estimatedDisposalAmount: number;
  assetInformationList: AssetInformation[];
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
`;

// コンポーネント定義
const AssetRegistration: React.FC<Props> = ({
  assetNo,
  assetType,
  structureName,
  acquisitionDate,
  acquisitionAmount,
  depreciatedAmount,
  estimatedDisposalAmount,
  assetInformationList,
}) => {
  return (
    <Container>
      <Header>
        <HeaderItem>資産番号　{assetNo}</HeaderItem>
        <HeaderItem>資産名称　{structureName}</HeaderItem>
      </Header>
      <div>
        <label>
          <input type="radio" name="assetType" checked={assetType === '管理'} />
          管理（金額無）
        </label>
        <label>
          <input type="radio" name="assetType" checked={assetType === '管理（金額無）'} />
          管理（金額無）
        </label>
        <label>
          <input type="radio" name="assetType" checked={assetType === '構造'} />
          構造
        </label>
        <label>
          <input type="radio" name="assetType" checked={assetType === '明細無'} />
          明細無
        </label>
      </div>
      <div>
        <label>資産情報を引継ぐ</label>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>異動年月日</TableHeader>
            <TableHeader>異動区分</TableHeader>
            <TableHeader>異動摘要</TableHeader>
            <TableHeader>異動金額(外貨)</TableHeader>
            <TableHeader>異動金額(円貨換算)</TableHeader>
            <TableHeader>異動後帳簿価額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>{acquisitionDate}</TableCell>
            <TableCell>取得</TableCell>
            <TableCell>取得</TableCell>
            <TableCell>{acquisitionAmount.toLocaleString()}</TableCell>
            <TableCell>{acquisitionAmount.toLocaleString()}</TableCell>
            <TableCell>{(acquisitionAmount - depreciatedAmount).toLocaleString()}</TableCell>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHeader>稼働</TableHeader>
            <TableHeader>行削除</TableHeader>
            <TableHeader>構造内容</TableHeader>
            <TableHeader>異動数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>異動金額</TableHeader>
            <TableHeader>備考</TableHeader>
          </tr>
        </thead>
        <tbody>
          {assetInformationList.map((info, index) => (
            <tr key={index}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <Button>行削除</Button>
              </TableCell>
              <TableCell>{info.name}</TableCell>
              <TableCell>{info.quantity}</TableCell>
              <TableCell />
              <TableCell>{info.unitPrice.toLocaleString()}</TableCell>
              <TableCell>{info.memo}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <InputContainer>
        <Label>異動年月日</Label>
        <Input type="text" />
        <Label>稼働日</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>異動数量</Label>
        <Input type="number" />
        <Label>単位</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>異動金額</Label>
        <Input type="number" />
      </InputContainer>
      <div>
        <Button>確定</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </div>
    </Container>
  );
};

export default AssetRegistration;

// 使用例
const sampleData: Props = {
  assetNo: '20160609',
  assetType: '構造',
  structureName: '平成28年度取得資産(構造)',
  acquisitionDate: '2013-03-31',
  acquisitionAmount: 2500000,
  depreciatedAmount: 0,
  estimatedDisposalAmount: 2500000,
  assetInformationList: [
    {
      number: '1',
      name: '移動式発電機',
      unitPrice: 2500000,
      quantity: 1,
      memo: '',
      taxRate: 5,
    },
    {
      number: '2',
      name: 'LED投光器',
      unitPrice: 1000,
      quantity: 10,
      memo: '',
      taxRate: 5,
    },
  ],
};

const App: React.FC = () => {
  return <AssetRegistration {...sampleData} />;
};