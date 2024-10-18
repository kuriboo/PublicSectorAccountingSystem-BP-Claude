import React from 'react';
import styled from '@emotion/styled';

// 資産保有者情報の型定義
type AssetManagementFormProps = {
  formData: {
    code: string;
    name: string;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// 資産保有者情報入力フォームコンポーネント
const AssetManagementForm: React.FC<AssetManagementFormProps> = ({ formData, onInputChange }) => {
  return (
    <FormWrapper>
      <FormItem>
        <Label>資産保有者コード</Label>
        <Input
          type="text"
          name="code"
          value={formData.code}
          onChange={onInputChange}
        />
      </FormItem>
      <FormItem>
        <Label>資産保有者名称</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={onInputChange}
        />
      </FormItem>
    </FormWrapper>
  );
};

// 資産管理システムのメインコンポーネント
const AssetManagementSystem: React.FC = () => {
  // ダミーデータ
  const data = [
    { id: 1, assetNumber: '8002200', name: '○○地区配水管改良工事', registrationDate: '平成30年06月31日', district: '○○地区配水管改良工事', amount: '1:1枚' },
    { id: 2, assetNumber: '8002300', name: '工事台帳登録', registrationDate: '平成30年06月31日', district: '工事台帳登録', amount: '1:1枚' },
    // ...
  ];

  // 資産保有者情報の状態管理
  const [formData, setFormData] = React.useState({ code: '', name: '' });

  // 入力値の変更を処理
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <Wrapper>
      <Title>アセットマネジメント様式保守</Title>
      <AssetManagementForm formData={formData} onInputChange={handleInputChange} />
      <TableWrapper>
        <TableHeader>
          <HeaderCell>資産番号</HeaderCell>
          <HeaderCell>名称</HeaderCell>
          <HeaderCell>登録年月日</HeaderCell>
          <HeaderCell>場所</HeaderCell>
          <HeaderCell>枚数</HeaderCell>
        </TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.assetNumber}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.registrationDate}</TableCell>
              <TableCell>{item.district}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 150px;
`;

const Input = styled.input`
  padding: 5px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const HeaderCell = styled.div`
  padding: 5px;
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  padding: 5px;
`;

export default AssetManagementSystem;