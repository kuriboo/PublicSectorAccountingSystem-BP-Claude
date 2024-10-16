import React from 'react';
import styled from '@emotion/styled';

type AssetManagementProps = {
  assetList: Array<{
    assetCode: string;
    assetName: string;
    acquisitionDate: string;
    depreciationPeriod: string;
    amount: string;
  }>;
};

const AssetManagement: React.FC<AssetManagementProps> = ({ assetList }) => {
  return (
    <Container>
      <Header>
        <Title>アセットマネジメント様式保守</Title>
        <ButtonGroup>
          <Button>終了</Button>
          <Button>クリア</Button>
          <Button primary>OK</Button>
        </ButtonGroup>
      </Header>
      <Content>
        <SearchSection>
          <Row>
            <Label>範囲指定</Label>
            <RadioButton type="radio" name="range" />
            <RadioLabel>構造</RadioLabel>
            <RadioButton type="radio" name="range" />
            <RadioLabel>管理</RadioLabel>
          </Row>
          <Row>
            <Label>固定資産科目</Label>
            <Input placeholder="00000000" width="100px" />
            <Label>～</Label>
            <Input placeholder="9999999999" width="100px" />
          </Row>
          <Row>
            <Label>資産番号</Label>
            <Input placeholder="80022000" width="80px" />
            <Label>～</Label>
            <Input placeholder="9999999999" width="80px" />
          </Row>
          <SearchButton>表示</SearchButton>
        </SearchSection>
        <TableSection>
          <Table>
            <thead>
              <TableRow>
                <TableHeader width="10%">資産番号</TableHeader>
                <TableHeader width="30%">名称</TableHeader>
                <TableHeader width="15%">取得年月日</TableHeader>
                <TableHeader width="15%">耐用年数</TableHeader>
                <TableHeader width="10%">金額</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {assetList.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{asset.assetCode}</TableCell>
                  <TableCell>{asset.assetName}</TableCell>
                  <TableCell>{asset.acquisitionDate}</TableCell>
                  <TableCell>{asset.depreciationPeriod}</TableCell>
                  <TableCell>{asset.amount}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableSection>
      </Content>
    </Container>
  );
};

// Sample data for demonstration
const sampleData = [
  {
    assetCode: '80022000',
    assetName: '○○地区配水管改良工事',
    acquisitionDate: '平成30年08月31日',
    depreciationPeriod: '1:取水',
    amount: '',
  },
  {
    assetCode: '80022900',
    assetName: '工事合計金額',
    acquisitionDate: '平成30年06月31日',
    depreciationPeriod: '1:取水',
    amount: '',
  },
  // More sample data...
];

// Component for displaying the asset management form
const AssetManagementForm = () => {
  return <AssetManagement assetList={sampleData} />;
};

export default AssetManagementForm;

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 5px 10px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
`;

const SearchSection = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Input = styled.input<{ width: string }>`
  padding: 5px;
  width: ${({ width }) => width};
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TableSection = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th<{ width: string }>`
  padding: 10px;
  text-align: left;
  background-color: #f0f0f0;
  width: ${({ width }) => width};
`;

const TableCell = styled.td`
  padding: 10px;
`;