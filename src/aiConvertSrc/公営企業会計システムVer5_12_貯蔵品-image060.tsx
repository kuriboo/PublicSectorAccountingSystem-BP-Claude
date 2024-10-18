import React from 'react';
import styled from 'styled-components';

// 仕訳明細表作成画面のプロパティ型定義
interface SuriMeisaiProps {
  kessaiSection: string; // 決済区分
  hokanField1: string; // 保管場所1
  hokanField2: string; // 保管場所2
  shikkoCode1: string; // 仕訳コード1
  shikkoCode2: string; // 仕訳コード2
  inputYear1: string; // 入出庫年月日1
  inputYear2: string; // 入出庫年月日2
}

// スタイル定義
const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DetailsWrapper = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const DetailsRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DetailsLabel = styled.div`
  width: 100px;
  margin-right: 16px;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const DetailsValue = styled.div`
  flex: 1;
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// 仕訳明細表作成コンポーネント
const SuriMeisai: React.FC<SuriMeisaiProps> = ({
  kessaiSection,
  hokanField1,
  hokanField2,
  shikkoCode1,  
  shikkoCode2,
  inputYear1,
  inputYear2,
}) => {
  return (
    <Wrapper>
      <Title>仕訳別入出庫明細表作成</Title>
      <DetailsWrapper>
        <DetailsRow>
          <DetailsLabel>決裁区分</DetailsLabel>
          <DetailsValue>{kessaiSection || '-'}</DetailsValue>
        </DetailsRow>
        <DetailsRow>    
          <DetailsLabel>保管場所</DetailsLabel>
          <DetailsValue>{hokanField1 || '000000'}</DetailsValue>
          <DetailsLabel>〜</DetailsLabel>     
          <DetailsValue>{hokanField2 || '999999'}</DetailsValue>
        </DetailsRow>
        <DetailsRow>
          <DetailsLabel>仕訳コード</DetailsLabel>
          <DetailsValue>{shikkoCode1 || '000000'}</DetailsValue>    
          <DetailsLabel>〜</DetailsLabel>
          <DetailsValue>{shikkoCode2 || '999999'}</DetailsValue>
        </DetailsRow>
        <DetailsRow>
          <DetailsLabel>入出庫年月日</DetailsLabel>  
          <DetailsValue>{inputYear1 || '平成99年09月01日'}</DetailsValue>
          <DetailsLabel>〜</DetailsLabel>
          <DetailsValue>{inputYear2 || '平成99年09月14日'}</DetailsValue>
        </DetailsRow>
      </DetailsWrapper>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>  
      </ButtonRow>
    </Wrapper>
  );
};

// サンプルデータを使用した表示例
const SuriMeisaiExample: React.FC = () => {
  return (
    <SuriMeisai
      kessaiSection="決裁区分"
      hokanField1="000000"  
      hokanField2="999999"
      shikkoCode1="000000"
      shikkoCode2="999999" 
      inputYear1="平成29年09月01日"
      inputYear2="平成29年09月14日"
    />
  );  
};

export default SuriMeisaiExample;