import React from 'react';
import styled from '@emotion/styled';

type AssetSummaryData = {
  assetPrincipal: number;
  beforeMtm: number;
  mtm: number;
  afterMtm: number;
  creditPrincipal: number;
  beforeMtmCredit: number;
  mtmCredit: number;
  afterMtmCredit: number;
  marginExcess: number;
  marginRate: number;
};

type AssetSummaryProps = {
  data: AssetSummaryData;
};

const AssetSummary: React.FC<AssetSummaryProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <div>資産番号</div>
        <div>8002400</div>
        <div>資産名称</div>
        <div>行政市貯水池特権</div>
        <div>財源コード</div>
        <div>01</div>
        <div>財源名称</div>
        <div>自己財源</div>
      </Header>
      
      <Content>
        <Section>
          <SubHeader>賠償保険</SubHeader>
          <Item>
            <div>前期末残高</div>
            <div>{data.assetPrincipal}</div>
          </Item>
          <Item>
            <div>当期増加額</div>
            <div>{data.mtm}</div>
          </Item>
          <Item>
            <div>当期減少額</div>
            <div>{data.afterMtm}</div>
          </Item>
        </Section>

        <Section>
          <SubHeader>償却累計額</SubHeader>
          <Item>
            <div>前期末残高</div>
            <div>{data.creditPrincipal}</div>
          </Item>
          <Item>
            <div>当期増加額</div>
            <div>{data.mtmCredit}</div>
          </Item>
          <Item>
            <div>当期減少額</div>
            <div>{data.afterMtmCredit}</div>
          </Item>
        </Section>
        
        <Section>
          <SubHeader>過年度損益</SubHeader>
          <Item>
            <div>前期末残高</div>
            <div>{data.beforeMtm}</div>
          </Item>
          <Item>
            <div>当期増加額</div>
            <div>{data.beforeMtmCredit}</div>
          </Item>
          <Item>
            <div>当期減少額</div>
            <div>0</div>
          </Item>
        </Section>
        
        <Section>
          <SubHeader>過年度損益</SubHeader>
          <Item>
            <div>修正益</div>
            <div>{data.marginExcess}</div>
          </Item>
          <Item>
            <div>修正損</div>
            <div>{data.marginRate}</div>
          </Item>
        </Section>
        
      </Content>
      
      <Footer>
        <button>OK</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </Footer>
    </Container>
  );
};

// Sample data for testing
const sampleData: AssetSummaryData = {
  assetPrincipal: 5000000,
  beforeMtm: 0,
  mtm: 0, 
  afterMtm: 0,
  creditPrincipal: 0,
  beforeMtmCredit: 0,
  mtmCredit: 0,
  afterMtmCredit: 0,
  marginExcess: 0,
  marginRate: 0,
};

// Component for displaying the AssetSummary
const App: React.FC = () => {
  return (
    <div>
      <h1>Asset Summary</h1>
      <AssetSummary data={sampleData} />
    </div>
  );
};

export default App;

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin-bottom: 20px;
  > div {
    background-color: #e0e0e0;
    padding: 5px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubHeader = styled.h3`
  margin: 0 0 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  > div {
    flex: 1;
  }
`;

const Footer = styled.div`
  text-align: right;
  > button {
    margin-left: 10px;
  }
`;