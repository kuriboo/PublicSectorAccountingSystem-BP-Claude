import React from 'react';
import styled from 'styled-components';

// 型定義
type CommonPart = {
  PO: string;
  LBLNCD: string;
  SHM: string;
};

type Chair = CommonPart & {
  var2: string;
};

type Mask = CommonPart & {
  PWBWCD?: string;
  PRCD?: string;
  STLBLCD?: string;
  SMENCD?: string;
  SZBLNCD?: string;
};

type ExtendedMask = Mask & {
  [key: string]: string | undefined;
};

type Part = Chair | ExtendedMask;

type PartsTree = {
  [key: string]: Part;
};

// スタイル定義
const TreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PartWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PartTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const PartContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartItem = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  color: #666;
`;

// パーツツリーコンポーネント
const PartsTreeComponent: React.FC<{ data: PartsTree }> = ({ data }) => {
  const renderPartContent = (part: Part) => {
    return Object.entries(part).map(([k, v]) => (
      <PartItem key={k}>
        {k}: {v !== undefined ? v : 'N/A'}
      </PartItem>
    ));
  };

  return (
    <TreeWrapper>
      {Object.entries(data).map(([key, value]) => (
        <PartWrapper key={key}>
          <PartTitle>{key}</PartTitle>
          <PartContent>
            {renderPartContent(value as Part)}
          </PartContent>
        </PartWrapper>
      ))}
    </TreeWrapper>
  );
};

// データバリデーション関数
const validatePartsTree = (data: PartsTree): boolean => {
  for (const [key, part] of Object.entries(data)) {
    if (typeof key !== 'string' || key.trim() === '') {
      console.error('Invalid key:', key);
      return false;
    }

    if (typeof part !== 'object' || part === null) {
      console.error('Invalid part:', part);
      return false;
    }

    if (!('PO' in part) || !('LBLNCD' in part) || !('SHM' in part)) {
      console.error('Missing required properties in part:', part);
      return false;
    }

    for (const [propKey, propValue] of Object.entries(part)) {
      if (typeof propValue !== 'string') {
        console.error(`Invalid property value in part ${key}:`, propKey, propValue);
        return false;
      }
    }
  }
  return true;
};

// サンプルデータ
const sampleData: PartsTree = {
  'T060 SZLBNMT 前最大分岐マスク': {
    PO: 'SZMENBD00',
    LBLNCD: 'char',
    SHM: 'var2',
    var2: '',
  },
  'T059 SZMENMT 前最中分岐マスク': {
    PO: 'SZMENBD00',
    LBLNCD: 'char',
    SHM: 'var2',
    PWBWCD: '',
    PRCD: '',
    STLBLCD: '',
    SMENCD: '',
    SZBLNCD: '',
  },
  'T060 SZLMT 前最マスク': {
    PO: 'SZMENBD00',
    LBLNCD: 'char',
    SHM: '',
    PWBWCD: '',
    PRCD: '',
    STLBLCD: '',
    SMENCD: '',
    SZBLNCD: '',
  },
  'T129 TTMT 担当マスク': {
    PO: 'STTCD',
    LBLNCD: 'char',
    SHM: 'var2',
  },
  'T130 SPMT 事務所マスク': {
    PO: 'SCD5',
    LBLNCD: 'char',
    SHM: 'var2',
    PEWD: 'char',
  },
  'T138 SZTTMT 前務担当マスク': {
    PO: 'SNBLNCD',
    LBLNCD: 'number',
    SHM: 'char',
    STTCD: 'char',
    STCD: 'char',
  },
};

// 使用例
const App: React.FC = () => {
  if (!validatePartsTree(sampleData)) {
    return <div>Invalid data structure</div>;
  }

  return (
    <div>
      <h1>パーツツリー</h1>
      <PartsTreeComponent data={sampleData} />
    </div>
  );
};

export default App;