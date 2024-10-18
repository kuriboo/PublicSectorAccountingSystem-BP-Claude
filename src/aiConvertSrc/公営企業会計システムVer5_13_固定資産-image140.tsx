import React from 'react';
import styled from 'styled-components';

// 分類1と分類2のタイプ定義
type Division = '分類1' | '分類2';

// 耐用年数管理テーブルの型定義
type TableData = {
  title: string;
  division1: string;
  division2: string;
  usefulLife: string;
}[];

// 耐用年数管理コンポーネントのプロパティ型定義
type UsefulLifeManagementProps = {
  data: TableData;
};

// 耐用年数管理コンポーネント
const UsefulLifeManagement: React.FC<UsefulLifeManagementProps> = ({ data }) => {
  // 選択中の分類
  const [selectedDivision, setSelectedDivision] = React.useState<Division>('分類1');

  // 分類が変更された時のハンドラ
  const handleDivisionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDivision(e.target.value as Division);
  };

  // 表示するデータをフィルタリング
  const filteredData = data.filter(item => 
    selectedDivision === '分類1' ? item.division1 : item.division2  
  );

  return (
    <Container>
      <Title>耐用年数管理マスタ</Title>
      
      {/* 分類選択 */}
      <DivisionContainer>
        <DivisionLabel>
          <input 
            type="radio"
            value="分類1"
            checked={selectedDivision === '分類1'} 
            onChange={handleDivisionChange}
          />
          分類1
        </DivisionLabel>
        <DivisionLabel>
          <input
            type="radio" 
            value="分類2"
            checked={selectedDivision === '分類2'}
            onChange={handleDivisionChange} 
          />
          分類2  
        </DivisionLabel>
      </DivisionContainer>
      
      {/* テーブル */}
      <Table>
        <thead>
          <tr>
            <TableHeader>タイトル</TableHeader>
            <TableHeader>分類1</TableHeader>
            <TableHeader>分類2</TableHeader>
            <TableHeader>耐用年数</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.division1}</TableCell>
              <TableCell>{row.division2}</TableCell>
              <TableCell>{row.usefulLife}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      
      {/* ボタン */}
      <ButtonContainer>
        <Button>確定</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: TableData = [
  {
    title: '建物',
    division1: '鉄骨鉄筋コンクリート造又は鉄筋コンクリート造のもの',
    division2: '事務所用のもの',
    usefulLife: '050'
  },
  {
    title: '建物',
    division1: '鉄骨鉄筋コンクリート造又は鉄筋コンクリート造のもの',
    division2: '店舗用、家賃専用、宿泊所用又は娯楽用のもの',
    usefulLife: '047'
  },
  // ...他のサンプルデータ
];

// 使用例
const UsefulLifeManagementExample: React.FC = () => {
  return (
    <UsefulLifeManagement data={sampleData} />
  );
}

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const DivisionContainer = styled.div`
  margin-bottom: 10px;
`;

const DivisionLabel = styled.label`
  margin-right: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default UsefulLifeManagement;