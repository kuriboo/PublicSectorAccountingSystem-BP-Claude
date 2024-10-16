import React from 'react';
import styled from 'styled-components';

type FixedAssetDetailProps = {
  code: string;
  name: string;
  depreciationMethod: '定額法' | '定率法';
  usefulLife: number;
  residualValue: number;
  acquisitionDate: string;
  locationCode: string;
  manager: string;
  assetStatus: '稼動' | '遊休' | '除却';
  depreciationStartDate: string;
  laterDepreciationMethod: 'リース物件' | 'リース資産';
  accountTitle: '仮勘定以外' | '仮勘定（減価償却設定行わない）' | '仮勘定（減価償却設定）';
  costAllocationCode: string;
  responsibilityCode: string;
  locationName: string;
  quantity: number;
  unitPrice: number;
};

const FixedAssetDetail: React.FC<FixedAssetDetailProps> = ({
  code,
  name,
  depreciationMethod,
  usefulLife,
  residualValue,
  acquisitionDate,
  locationCode,
  manager,
  assetStatus,
  depreciationStartDate,
  laterDepreciationMethod,
  accountTitle,
  costAllocationCode,
  responsibilityCode,
  locationName,
  quantity,
  unitPrice,
}) => {
  return (
    <Container>
      <Title>固定資産節／明細マスタ</Title>
      <Grid>
        <Label>資産マスタ</Label>
        <Value>{code}</Value>
        <Label>名称</Label>
        <Value>{name}</Value>

        <Label>減価償却</Label>
        <Value>{depreciationMethod === '定額法' ? '定額法' : '定率法'}</Value>
        <Label>耐用年数</Label>
        <Value>{usefulLife}</Value>
        <Label>残存率</Label>
        <Value>{residualValue}</Value>
        <Label>取得日付</Label>
        <Value>{acquisitionDate}</Value>

        <Label>設置場所</Label>
        <Value>{locationCode}</Value>
        <Label>管理者</Label>
        <Value>{manager}</Value>
        <Label>資産区分</Label>
        <Value>
          {assetStatus === '稼動'
            ? '有形'
            : assetStatus === '遊休'
            ? '無形・投資'
            : ''}
        </Value>

        <Label>償却方法</Label>
        <Value>
          {laterDepreciationMethod === 'リース物件'
            ? '定額法'
            : laterDepreciationMethod === 'リース資産'
            ? '定率法（月割）'
            : ''}
        </Value>
        <Label>勘定科目</Label>
        <Value>
          {accountTitle === '仮勘定以外'
            ? '仮勘定以外'
            : accountTitle === '仮勘定（減価償却設定行わない）'
            ? '仮勘定（減価償却設定行わない）'
            : '仮勘定（減価償却設定）'}
        </Value>

        <Label>細節コード</Label>
        <Value>{costAllocationCode}</Value>
        <Label>明細コード</Label>
        <Value>{responsibilityCode}</Value>
        <Label>設置場所</Label>
        <Value>{locationName}</Value>
        <Label>数量</Label>
        <Value>{quantity}</Value>
        <Label>単価</Label>
        <Value>{unitPrice}</Value>
      </Grid>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 8px 16px;
`;

// Usage example
const SampleData: FixedAssetDetailProps = {
  code: '06101010',
  name: '土地',
  depreciationMethod: '定額法',
  usefulLife: 10,
  residualValue: 0,
  acquisitionDate: '0943001',
  locationCode: '0001',
  manager: '0001',
  assetStatus: '稼動',
  depreciationStartDate: '0943001',
  laterDepreciationMethod: 'リース物件',
  accountTitle: '仮勘定以外',
  costAllocationCode: '0001',
  responsibilityCode: '0001',
  locationName: '本社',
  quantity: 1,
  unitPrice: 100,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Fixed Asset Detail</h1>
      <FixedAssetDetail {...SampleData} />
    </div>
  );
};

export default App;