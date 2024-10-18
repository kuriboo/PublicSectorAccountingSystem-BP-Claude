import React from 'react';
import styled from '@emotion/styled';

interface MaskProps {
  year: number;
  month: number;
  date: string;
  travelPurpose: string;
  destination: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Mask: React.FC<MaskProps> = ({ year, month, date, travelPurpose, destination, onOk, onClear, onCancel }) => {
  // 必須項目が入力されているかチェック
  const isValid = React.useMemo(() => {
    return year > 0 && date && travelPurpose && destination;
  }, [year, date, travelPurpose, destination]);

  return (
    <MaskContainer>
      <Title>平成{year}年{month}月{date}</Title>
      <Row>
        <RowLabel>演算子</RowLabel>
        <RowValue>{travelPurpose || '未記入'}</RowValue>
      </Row>
      <Row>
        <RowLabel>明区分</RowLabel>
        <RowValue>{destination || '未選択'}</RowValue>
      </Row>
      <Message>
        平素マスクの集計材日と期区分(集計対象金額)を入力します。
        ※報画面の設値に固定値を設定した場合は入力の必要はありません。
      </Message>
      <ButtonGroup>
        <Button onClick={onOk} disabled={!isValid}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </MaskContainer>
  );
};

const MaskContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RowLabel = styled.div`
  width: 80px;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const RowValue = styled.div`
  flex: 1;
`;

const Message = styled.div`
  margin: 16px 0;
  color: #666;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }  
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// サンプルデータ
const sampleData = {
  year: 29,
  month: 10,
  date: '01:01:01',
  travelPurpose: '国定資産除却費',
  destination: '1.輪越',
};

const SampleUsage: React.FC = () => {
  return (
    <Mask
      {...sampleData}
      onOk={() => alert('OK clicked')}
      onClear={() => alert('Clear clicked')} 
      onCancel={() => alert('Cancel clicked')}
    />
  );
};

export default SampleUsage;