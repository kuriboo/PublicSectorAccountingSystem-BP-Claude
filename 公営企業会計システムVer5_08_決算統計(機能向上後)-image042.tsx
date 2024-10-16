import React from 'react';
import styled from '@emotion/styled';

type TransferData = {
  code: string;
  name: string;
  address: string;
};

type TransferCodeProps = {
  data: TransferData[];
  onOk?: () => void;
  onCancel?: () => void;
};

const TransferCode: React.FC<TransferCodeProps> = ({ data, onOk, onCancel }) => {
  const [selectedType, setSelectedType] = React.useState<'public' | 'private'>('public');

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Container>
      <Header>
        <Title>令和02年度</Title>
        <InputContainer>
          <Label>事業</Label>
          <Input defaultValue="171" />
          <Label>公共下水道</Label>
        </InputContainer>
      </Header>
      <TypeContainer>
        <Label>検索レベル</Label>
        <TypeSelect
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as 'public' | 'private')}
        >
          <option value="public">大分類</option>
          <option value="private">中分類</option>
          <option value="detail">小分類</option>
        </TypeSelect>
      </TypeContainer>
      <InputContainer>
        <Label>大分類</Label>
        <Input defaultValue="01 0" />
        <Label>下水道事業収益</Label>
      </InputContainer>
      <InputContainer>
        <Label>中分類</Label>
        <Input defaultValue="01 0" />
        <Label>営業収益</Label>
      </InputContainer>
      <InputContainer>
        <Label>小分類</Label>
        <Input defaultValue="01 0" />
        <Label>下水道使用料</Label>
      </InputContainer>
      <SearchContainer>
        <Input />
        <SearchButton>表示</SearchButton>
      </SearchContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>振替コード</TableHeader>
              <TableHeader>振替略名</TableHeader>
              <TableHeader>振替正式名</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.code}>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.address}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <CancelButton onClick={handleCancel}>キャンセル</CancelButton>
        <OkButton onClick={handleOk}>OK</OkButton>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const data: TransferData[] = [
    { code: '1710100100010', name: '下水道使用料', address: '下水道使用料' },
    { code: '1710100100000', name: '雨水処理負担金', address: '雨水処理負担金' },
    { code: '1710100101010', name: '受託工事収益', address: '受託工事収益' },
    { code: '1710100101000', name: 'その他営業収益', address: 'その他営業収益' },
  ];

  return <TransferCode data={data} />;
};

export default App;

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin-right: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  margin-right: 8px;
  padding: 4px;
`;

const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TypeSelect = styled.select`
  padding: 4px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SearchButton = styled.button`
  padding: 4px 8px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
`;

const OkButton = styled.button`
  padding: 8px 16px;
`;