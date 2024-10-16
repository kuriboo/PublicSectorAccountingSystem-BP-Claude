import React from 'react';
import styled from '@emotion/styled';

interface ApplicationMasterItem {
  code: string;
  title: string;
  groupCode: string;
}

interface ApplicationMasterProps {
  items: ApplicationMasterItem[];
  onSelectItem: (item: ApplicationMasterItem) => void;
}

const ApplicationMaster: React.FC<ApplicationMasterProps> = ({ items, onSelectItem }) => {
  return (
    <Container>
      <Title>アプリケーションマスタ</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>画面タイトルコード</TableHeader>
            <TableHeader>画面タイトル</TableHeader>
            <TableHeader>APグループコード</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableRow key={index} onClick={() => onSelectItem(item)}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.groupCode}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// Example usage
const sampleData: ApplicationMasterItem[] = [
  { code: 'BFD1010', title: '当年度データ作成', groupCode: '00000008' },
  { code: 'BFD1020', title: '単価計算', groupCode: '00000006' },
  { code: 'BFD1030', title: '当初予算データ作成', groupCode: '00000006' },
  { code: 'BFD1040', title: 'シーリング設定', groupCode: '00000006' },
  { code: 'BFD1050', title: '枠配分設定', groupCode: '00000006' },
  { code: 'BFD1060', title: '予算データ削除', groupCode: '00000006' },
];

const ExampleComponent: React.FC = () => {
  const handleSelectItem = (item: ApplicationMasterItem) => {
    console.log('Selected item:', item);
  };

  return <ApplicationMaster items={sampleData} onSelectItem={handleSelectItem} />;
};

export default ExampleComponent;