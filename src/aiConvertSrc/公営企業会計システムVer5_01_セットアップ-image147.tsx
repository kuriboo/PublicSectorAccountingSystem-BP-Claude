import React from 'react';
import styled from 'styled-components';

// 型定義
type Chair = {
  PO: string;
  LBLNCD: string;
  SHM: string;
  var2: string;
};

type Mask = {
  PO: string;
  LBLNCD: string;
  SHM: string;
  PWBWCD: string;
  PRCD: string;
  STLBLCD: string;
  SMENCD: string;
  SZBLNCD: string;
};

type PartsTree = {
  [key: string]: Chair | Mask;
};

// スタイル定義
const TreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const PartWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

const PartTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PartContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartItem = styled.div`
  margin-bottom: 4px;
`;

// パーツツリーコンポーネント
const PartsTreeComponent: React.FC<{ data: PartsTree }> = ({ data }) => {
  return (
    <TreeWrapper>
      {Object.entries(data).map(([key, value]) => (
        <PartWrapper key={key}>
          <PartTitle>{key}</PartTitle>
          <PartContent>
            {Object.entries(value).map(([k, v]) => (
              <PartItem key={k}>
                {k}: {v}
              </PartItem>
            ))}
          </PartContent>
        </PartWrapper>
      ))}
    </TreeWrapper>
  );
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
  return (
    <div>
      <h1>パーツツリー</h1>
      <PartsTreeComponent data={sampleData} />
    </div>
  );
};

export default App;