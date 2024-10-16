import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface DataRangeSettingProps {
  title: string;
  period?: {
    from: string;
    to: string;
  };
  reportCode?: {
    from: string; 
    to: string;
  };
  apGroupCode?: {
    from: string;
    to: string;  
  };
  storeGroupInfo?: {
    from: string;
    to: string;
  };
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}

// Define styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RowLabel = styled.span`
  width: 120px;
`;

const Input = styled.input`
  padding: 4px;
  width: 120px;
  margin-right: 8px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

// Define main component
const DataRangeSetting: React.FC<DataRangeSettingProps> = ({
  title,
  period,
  reportCode,
  apGroupCode,  
  storeGroupInfo,
  onOk,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      
      <Row>
        <RowLabel>期間指定</RowLabel>
        <Input type="text" defaultValue={period?.from} />
        <Separator>~</Separator>
        <Input type="text" defaultValue={period?.to} />
      </Row>
      
      <Row>
        <RowLabel>担当コード</RowLabel>
        <Input type="text" defaultValue={reportCode?.from} />
        <Separator>~</Separator>        
        <Input type="text" defaultValue={reportCode?.to} />
      </Row>

      <Row>
        <RowLabel>APグループコード</RowLabel>
        <Input type="text" defaultValue={apGroupCode?.from} />
        <Separator>~</Separator>
        <Input type="text" defaultValue={apGroupCode?.to} />        
      </Row>

      <Row>
        <RowLabel>店舗グループ情報</RowLabel>
        <Input type="text" defaultValue={storeGroupInfo?.from} />
        <Separator>~</Separator>
        <Input type="text" defaultValue={storeGroupInfo?.to} />
      </Row>
      
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonContainer>
      
    </Container>
  );
};

export default DataRangeSetting;

// Example usage
const App: React.FC = () => {
  return (
    <DataRangeSetting 
      title="データ権限 個別設定 マスタリスト作成"
      period={{from: '0000000', to: '9999999'}}
      reportCode={{from: '000', to: '999'}}
      apGroupCode={{from: '0000000', to: '9999999'}}
      storeGroupInfo={{from: '0000000', to: '9999999'}}
    />
  );  
};