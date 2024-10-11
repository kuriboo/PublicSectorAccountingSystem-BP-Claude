import React from 'react';
import styled from 'styled-components';

// 連携区分を表す列挙型
export enum LinkageType {
  BUSINESS_MATCHING = '業者情報取り込み',
  SYSTEM_INTEGRATION = '案件情報抽出',
  BUILDING_INTEGRATION = '入札結果取り込み',
}

// コンポーネントのPropsの型定義
export type CsvConversionProps = {
  csvType: string;
  systemData: string;
  onConvert: () => void;
  onCancel: () => void;
  onExecute: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const LinkageTypeRow = styled(Row)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LinkageTypeButton = styled.button<{ selected: boolean }>`
  padding: 5px 10px;
  background-color: ${({ selected }) => (selected ? '#ccc' : '#fff')};
  border: 1px solid #ccc;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
`;

const ButtonRow = styled(Row)`
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
`;

// メインのコンポーネント
export const CsvConversionForm: React.FC<CsvConversionProps> = ({
  csvType,
  systemData,
  onConvert,
  onCancel,
  onExecute,
}) => {
  const [selectedLinkageType, setSelectedLinkageType] = React.useState<LinkageType | null>(null);

  const handleLinkageTypeClick = (linkageType: LinkageType) => {
    setSelectedLinkageType(linkageType);
  };

  return (
    <Container>
      <Title>CSV連携データ変換マスタ保守</Title>
      <LinkageTypeRow>
        <LinkageTypeButton
          selected={selectedLinkageType === LinkageType.BUSINESS_MATCHING}
          onClick={() => handleLinkageTypeClick(LinkageType.BUSINESS_MATCHING)}
        >
          {LinkageType.BUSINESS_MATCHING}
        </LinkageTypeButton>
        <LinkageTypeButton
          selected={selectedLinkageType === LinkageType.SYSTEM_INTEGRATION}
          onClick={() => handleLinkageTypeClick(LinkageType.SYSTEM_INTEGRATION)}
        >
          {LinkageType.SYSTEM_INTEGRATION}
        </LinkageTypeButton>
        <LinkageTypeButton
          selected={selectedLinkageType === LinkageType.BUILDING_INTEGRATION}
          onClick={() => handleLinkageTypeClick(LinkageType.BUILDING_INTEGRATION)}
        >
          {LinkageType.BUILDING_INTEGRATION}
        </LinkageTypeButton>
      </LinkageTypeRow>
      <Row>
        <Label>CSVタイプ:</Label>
        <Input value={csvType} readOnly />
      </Row>
      <Row>
        <Label>システムデータ:</Label>
        <Input value={systemData} readOnly />
      </Row>
      <ButtonRow>
        <Button onClick={onConvert}>列番号</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onExecute}>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const handleConvert = () => {
    console.log('列番号ボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('キャンセルボタンがクリックされました');
  };

  const handleExecute = () => {
    console.log('終了ボタンがクリックされました');
  };

  return (
    <CsvConversionForm
      csvType="（最大値：200）"
      systemData=""
      onConvert={handleConvert}
      onCancel={handleCancel}
      onExecute={handleExecute}
    />
  );
};

export default App;