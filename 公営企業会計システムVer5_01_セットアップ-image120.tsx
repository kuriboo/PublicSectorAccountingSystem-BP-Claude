import React from 'react';
import styled from '@emotion/styled';

// 型定義
type TkComponent = {
  number: string;
  char: string;
  varchar2?: string;
  date?: string;
};

type TkComponentProps = {
  components: TkComponent[];
};

// スタイル定義
const ComponentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ComponentBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  background-color: #f9f9f9;
`;

const ComponentTitle = styled.h3`
  margin: 0 0 10px;
  padding: 0;
  font-size: 16px;
`;

const ComponentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ComponentItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
`;

// TkComponentコンポーネント
const TkComponent: React.FC<TkComponentProps> = ({ components }) => {
  return (
    <ComponentWrapper>
      {components.map((component, index) => (
        <ComponentBox key={index}>
          <ComponentTitle>{component.number}</ComponentTitle>
          <ComponentList>
            <ComponentItem>{component.char}</ComponentItem>
            {component.varchar2 && <ComponentItem>{component.varchar2}</ComponentItem>}
            {component.date && <ComponentItem>{component.date}</ComponentItem>}
          </ComponentList>
        </ComponentBox>
      ))}
    </ComponentWrapper>
  );
};

// サンプルデータ
const sampleData: TkComponentProps = {
  components: [
    {
      number: '000 TKSMMT',
      char: '基本情報(生マスタ)',
    },
    {
      number: '001 TKSSMMTIN',
      char: '基本(貸与(-)分)',
      varchar2: 'マスタ',
    },
    {
      number: '002 TKSSMSMMT',
      char: '基本(貸与(+)分)',
      varchar2: 'マスタ',
    },
    {
      number: '003 TKSMT',
      char: '単価別基準値(貸マスタ)',
    },
    {
      number: '004 TKTKCSMT',
      char: '手形別条件マスタ',
      varchar2: '手形割引手数料',
    },
    {
      number: '005 TKSMMT',
      char: '単価種別マスタ',
    },
  ],
};

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  return (
    <div>
      <h2>TkComponentサンプル</h2>
      <TkComponent components={sampleData.components} />
    </div>
  );
};

export default SampleComponent;