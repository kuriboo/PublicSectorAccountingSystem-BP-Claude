import React from 'react';
import styled from 'styled-components';

// 事業区分のプロパティ型定義
type DivisionProps = {
  code: string;
  name: string;
};

// 会計年度のプロパティ型定義
type FiscalYearProps = {
  year: number;
  startDate: string;
  endDate: string;
};

// 業務区分のプロパティ型定義
type BusinessProps = {
  division: string;
  content: string;
};

// データ出力のプロパティ型定義
type OutputProps = {
  date: string;
  price: number;
};

// 金額の表示形式を整えるヘルパー関数
const formatPrice = (price: number) => {
  return price.toLocaleString();
};

// メインのコンポーネント
const TransactionData: React.FC<{
  division: DivisionProps;
  fiscalYear: FiscalYearProps;
  business: BusinessProps;
  output: OutputProps;
}> = ({ division, fiscalYear, business, output }) => {

  return (
    <Container>
      <Title>会計運携データ出力</Title>
      <Meta>
        <MetaItem>
          <MetaLabel>事業区分（大）</MetaLabel>
          <MetaValue>{division.code}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>事業区分（小）</MetaLabel>
          <MetaValue>{division.name}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>会計年度</MetaLabel>
          <MetaValue>{fiscalYear.year}</MetaValue>
        </MetaItem>
        <MetaItem>
          <MetaLabel>発生日</MetaLabel>
          <MetaValue>{fiscalYear.startDate} 〜 {fiscalYear.endDate}</MetaValue>
        </MetaItem>
      </Meta>
      <Content>
        <Row>
          <RowItem>
            <RowLabel>調定年月日</RowLabel>
            <RowValue>{output.date}</RowValue>
          </RowItem>
          <RowItem>
            <RowLabel>調定年度</RowLabel>
            <RowValue>{fiscalYear.year}</RowValue>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <RowLabel>調定内容</RowLabel>
            <RowValue>{business.content}</RowValue>
          </RowItem>
        </Row>
        <Row>
          <RowItem>
            <RowLabel>摘要</RowLabel>
            <RowValue>{business.division} {formatPrice(output.price)}円</RowValue>
          </RowItem>
          <RowItem>
            <RowLabel>金額</RowLabel>
            <PriceValue>{formatPrice(output.price)}</PriceValue>
          </RowItem>
          <RowItem>
            <RowLabel>消費税額</RowLabel>
            <PriceValue>{formatPrice(Math.floor(output.price * 0.1))}</PriceValue>
          </RowItem>
        </Row>
      </Content>
      <Footer>
        <Pagination>1/1 ページ</Pagination>
      </Footer>
    </Container>
  );
};

// サンプルデータを用いた表示例
const SampleData: React.FC = () => {
  const division = {
    code: '収入',
    name: 'ぎょうせい地区',
  };

  const fiscalYear = {
    year: 2016,
    startDate: '2016/11/01',
    endDate: '2017/10/31',
  };

  const business = {
    division: '収納(基本+超過)',
    content: 'ぎょうせい地区分担金',  
  };

  const outputData = [
    { date: '2016/11/28', price: 1000 },
    { date: '2016/11/28', price: 2240 },
    { date: '2016/11/28', price: 1760 },
    { date: '2016/11/28', price: 3398 },
    { date: '2016/11/28', price: 2602 },
    { date: '2018/11/28', price: 1490 },
    { date: '2018/11/28', price: 1490 },
  ];

  return (
    <SampleContainer>
      {outputData.map((output, index) => (
        <TransactionData
          key={index}
          division={division}
          fiscalYear={fiscalYear}
          business={business}
          output={output}
        />
      ))}
    </SampleContainer>
  );
};

// スタイリング
const Container = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  page-break-inside: avoid;

  @media print {
    page-break-inside: avoid;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  flex: 1;
`;

const MetaLabel = styled.div`
  font-weight: bold;
`;

const MetaValue = styled.div`
  font-size: 18px;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const RowItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RowLabel = styled.div`
  font-weight: bold;
  width: 100px;
`;

const RowValue = styled.div`
  font-size: 18px;
`;

const PriceValue = styled(RowValue)`
  text-align: right;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #ccc;
`;

const Pagination = styled.div`
  font-style: italic;
`;

const SampleContainer = styled.div`
  @media print {
    page-break-after: always;
  }
`;

export default SampleData;