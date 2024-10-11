import React from 'react';
import styled from 'styled-components';

// 構成要素の型定義
type ConstructionElement = {
  elementCode: string;
  elementName: string;
  quantity: string;
  unit: string;
  note: string;
};

type Props = {
  jvNumber: string;
  constructionDate: string;
  industryType: string;
  jvName: string;
  constructionElements: ConstructionElement[];
};

const JvConstructionTable: React.FC<Props> = ({
  jvNumber,
  constructionDate,
  industryType,
  jvName,
  constructionElements,
}) => {
  return (
    <TableWrapper>
      <TableHeader>
        <Jv名>{jvName}</Jv名>
        <JvNumber>{jvNumber}</JvNumber>
        <ConstructionDate>○○建設記事(電気設工事:〇ム地区):特定企業工事 {constructionDate}</ConstructionDate>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <Th>構成コード</Th>
            <Th>構成要素名</Th>
            <Th>出資比率</Th>
            <Th>代表企業</Th>
            <Th>代理人</Th>
            <Th>業種</Th>
          </tr>
        </thead>
        <tbody>
          {constructionElements.map((element, index) => (
            <tr key={index}>
              <Td>{element.elementCode}</Td>
              <Td>{element.elementName}</Td>
              <Td>{element.quantity}</Td>
              <Td>{element.unit === '*' ? '○' : ''}</Td>
              <Td>{element.note}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: Props = {
    jvNumber: '0000002001',
    constructionDate: '〇〇建設記事(電気設工事:〇ム地区):特定企業工事 Jvカナ',  
    industryType: '建築一式工事',
    jvName: '大規模広報開発(JV案件):特定工事企業',
    constructionElements: [
      {
        elementCode: '0000000001',
        elementName: '大規模広報開発(JV案件):特定工事企業',  
        quantity: '000',
        unit: '*',
        note: '建築一式工事',
      },
    ],
  };

  return <JvConstructionTable {...sampleData} />;
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

const Jv名 = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const JvNumber = styled.span`
  margin-left: 16px;
`;

const ConstructionDate = styled.span`
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td`
  white-space: nowrap;
`;

export default JvConstructionTable;