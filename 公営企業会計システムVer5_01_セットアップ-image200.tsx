import React from 'react';
import styled from '@emotion/styled';

type Company = {
  code: string;
  name: string;
};

type MasterProps = {
  companies: Company[];
  onSelect: (code: string) => void;
};

// マスタ検索用コンポーネント
const Master: React.FC<MasterProps> = ({ companies, onSelect }) => {
  return (
    <Container>
      <Title>団体マスタ</Title>
      <Table>
        <thead>
          <tr>
            <Th>コード</Th>
            <Th>名称</Th>
            <Th>選択</Th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.code}>
              <Td>{company.code}</Td>
              <Td>{company.name}</Td>
              <Td>
                <SelectButton onClick={() => onSelect(company.code)}>
                  選択
                </SelectButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  text-align: left;
`;

const Td = styled.td`
  background-color: #fff;
`;

const SelectButton = styled.button`
  padding: 4px 8px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 使用例
const MasterExample: React.FC = () => {
  const companies: Company[] = [
    { code: '000001', name: '水道局' },
    { code: '000002', name: '持定金融機関' },
    // 他のデータを追加
  ];

  const handleSelect = (code: string) => {
    console.log(`Selected company code: ${code}`);
    // 選択された団体コードに対する処理を実装
  };

  return <Master companies={companies} onSelect={handleSelect} />;
};

export default MasterExample;