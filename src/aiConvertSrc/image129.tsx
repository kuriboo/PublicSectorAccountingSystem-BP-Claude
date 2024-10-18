import React from 'react';
import styled from '@emotion/styled';

type AssetDetailProps = {
  assetNumber: string;
  cardId: string;
  assetName: string;
  assetModel: string;
  acquisitionDate: string;
  managementResponsibility: string;
  accountingResponsibility: string;
  assetLocation: string;
  quantity: number;
  unit: string;
  acquisitionAmount: number;
  monthlyDepreciation: number;
  depreciationAtEnd: number;
  monthlyRent: number;
  taxExpense: number;
  displacementCompensation: number;
  economicRent: number;
};

const AssetDetail: React.FC<AssetDetailProps> = ({
  assetNumber,
  cardId,
  assetName,
  assetModel,
  acquisitionDate,
  managementResponsibility,
  accountingResponsibility,
  assetLocation,
  quantity,
  unit,
  acquisitionAmount,
  monthlyDepreciation,
  depreciationAtEnd,
  monthlyRent,
  taxExpense,
  displacementCompensation,
  economicRent,
}) => {
  return (
    <Container>
      <Header>
        <Label>資産番号</Label>
        <Value>{assetNumber || '-'}</Value>
        <Label>資産名称</Label>
        <Value>{assetName || '-'}</Value>
      </Header>
      
      <DetailRow>
        <Label>カードID</Label>
        <Value>{cardId || '-'}</Value>
        <Label>償却単勘定科目</Label>
        <Value>{managementResponsibility || '-'}</Value>
      </DetailRow>
      
      <DetailRow>
        <Label>異動区分コード</Label>
        <Value>01</Value>
        <Label>月次水道借入価格</Label>
        <Value>{acquisitionAmount.toLocaleString() || '0'}</Value>
      </DetailRow>
      
      <DetailRow>
        <Label>取得</Label>
        <Value>{acquisitionDate || '-'}</Value>
        <Label>償却累計減少額</Label>  
        <Value>{depreciationAtEnd.toLocaleString() || '0'}</Value>
      </DetailRow>
      
      <DetailRow>
        <Label>異動金額</Label>
        <Value>{acquisitionAmount.toLocaleString() || '0'}</Value>
        <Label>売却額</Label>
        <Value>0</Value>
      </DetailRow>

      <DetailRow>
        <Label>償却限度率</Label>
        <Value>{monthlyDepreciation.toLocaleString() || '0'}</Value>
        <Label>除却額</Label>
        <Value>0</Value>
      </DetailRow>

      <DetailRow>
        <Label>償却限度額</Label>
        <Value>0</Value>
        <Label>予定年数</Label>
        <Value>{taxExpense.toLocaleString() || '0'}</Value>
      </DetailRow>

      <DetailRow>
        <Label>耐用年数</Label>
        <Value>100.00</Value>
        <Label>割余金取崩額</Label>
        <Value>0</Value>
      </DetailRow>

      <DetailRow>
        <Label>残存価額</Label>
        <Value>{economicRent.toLocaleString() || '0'}</Value>
        <Label>経過年数</Label>
        <Value>{monthlyRent.toLocaleString() || '0'}</Value>
      </DetailRow>

      <DetailRow>
        <Label>償却除外額</Label>
        <Value>0</Value>
        <Label>過年度修正損益</Label>
        <Value>0</Value>
      </DetailRow>

      <DetailRow>
        <Label>年間償却額</Label>
        <Value>0</Value>
      </DetailRow>

      <DetailRow lastRow>
        <Label>当年度差引償却</Label>
        <Value>0</Value>
      </DetailRow>

    </Container>
  );
};

// Sample data for displaying the component
const sampleData: AssetDetailProps = {
  assetNumber: '8002400',
  cardId: '行政市町水-汕頭通',
  assetName: '取得',
  assetModel: '取得',
  acquisitionDate: '平成30年06月30日',
  managementResponsibility: '1',
  accountingResponsibility: '0',
  assetLocation: '取得',
  quantity: 1,
  unit: '',
  acquisitionAmount: 5000000,
  monthlyDepreciation: 5000000,
  depreciationAtEnd: 0,
  monthlyRent: 0, 
  taxExpense: 100.00,
  displacementCompensation: 0,
  economicRent: 5000000,
};

const AssetDetailExample: React.FC = () => {
  return (
    <div>
      <h2>Asset Detail Example</h2>
      <AssetDetail {...sampleData} />
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.div`
  display: contents;
  font-weight: bold;

  > div:first-of-type {
    grid-column: 1 / span 2;
  }
`;

const DetailRow = styled.div<{ lastRow?: boolean }>`
  display: contents;
  ${({ lastRow }) => lastRow && 'grid-column: 1 / span 2;'}
`;

const Label = styled.div`
  color: #666;
`;

const Value = styled.div`
  color: #333;
`;

export default AssetDetailExample;