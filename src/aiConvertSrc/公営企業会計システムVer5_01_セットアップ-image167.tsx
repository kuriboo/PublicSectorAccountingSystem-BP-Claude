import React from 'react';
import styled from 'styled-components';

// Define type for component props
type Props = {
  title: string;
  items: string[];
};

// Define styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
`;

// Define main component
const DataDisplay: React.FC<Props> = ({ title, items }) => {
  // Render nothing if title or items are missing
  if (!title || !items) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
    </Container>
  );
};

// Sample data for demonstration
const sampleData = [
  { title: '1152 APパラメータ アプリケーションプル→プラス', items: ['CORPCYPAPGPSCD::char', 'SBSPINFO::char'] },
  { title: '1152 APPUT アプリケーションマスタ', items: ['CORPSYSAPIUTLCD::char', 'APIUTGPCD::char'] },
  { title: '1151 APIDATAアプリケーション構成マスタ', items: ['CORPINTERIDZID::number', 'CORPSYSCDZID::char', 'CORPSYSTSGZID::char', 'CORPSYAPIUTGZID::char', 'SJDATAEQIDGZID::char', 'SJDATAIEGZID::char'] },
  { title: '1154 DATA/ACCESSMENT データ取得機関調整マスタ', items: ['CORPINTERIDZID::number', 'CORPSYSCDZID::char', 'CORPSYSTSGZID::char', 'CORPSYAPIUTGPGZID::char', 'SJDATAKIGZID::char', 'SJINFO::char', 'SJDATAKIGZIDH::char'] },
];

// Render sample data using DataDisplay component
const App: React.FC = () => {
  return (
    <div>
      {sampleData.map((data, index) => (
        <DataDisplay key={index} title={data.title} items={data.items} />
      ))}
    </div>
  );
};

export default App;