import React from 'react';
import styled from 'styled-components';

type PrefixType = '有形' | '無形';
type ReservationType = '指定なし' | '会計区分コード' | 'コード指定';
type RangeType = '期中期' | '施設別' | '地区別';

interface PublicAssetSystemProps {
  companyName: string;
  officeName: string;
  projectName: string;
  fiscalYear: string;
  prefix?: PrefixType;
  reservation?: ReservationType;
  reservationCode?: string;
  rangeType?: RangeType;
  startAmount?: number;
  startComparison?: '以上' | '以下';
  endAmount?: number;
  endComparison?: '以上' | '以下';
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
`;

const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 10px;
`;

const PublicAssetSystem: React.FC<PublicAssetSystemProps> = ({
  companyName,
  officeName,
  projectName,
  fiscalYear,
  prefix = '無形',
  reservation = '指定なし',
  reservationCode = '',
  rangeType = '期中期',
  startAmount,
  startComparison = '以上',
  endAmount,
  endComparison = '以下',
}) => {
  return (
    <Container>
      <Row>
        <Label>作業年月日</Label>
        <div>{fiscalYear}</div>
      </Row>
      <Row>
        <Label>書式区分</Label>
        <Select defaultValue={prefix}>
          <option value="有形">有形</option>
          <option value="無形">無形</option>
        </Select>
      </Row>
      <Row>
        <Label>会計区分</Label>
        <Select defaultValue={reservation}>
          <option value="指定なし">指定なし</option>
          <option value="会計区分コード">会計区分コード</option>
          <option value="コード指定">コード指定</option>
        </Select>
        {reservation !== '指定なし' && <Input type="text" defaultValue={reservationCode} />}
      </Row>
      <Row>
        <Label>範囲指定</Label>
        {rangeTypes.map((type) => (
          <label key={type}>
            <input type="radio" value={type} checked={rangeType === type} />
            {type}
          </label>
        ))}
      </Row>
      <Row>
        <Label>施設</Label>
        <Input type="number" defaultValue={startAmount} />
        <Select defaultValue={startComparison}>
          <option value="以上">以上</option>
          <option value="以下">以下</option>
        </Select>
        <span>〜</span>
        <Input type="number" defaultValue={endAmount} />
        <Select defaultValue={endComparison}>
          <option value="以上">以上</option>
          <option value="以下">以下</option>
        </Select>
        <span>水道維持</span>
      </Row>
    </Container>
  );
};

const sampleData: PublicAssetSystemProps = {
  companyName: '公営企業会計システム',
  officeName: '技術 - 施設 - 地区 別固定資産明細表作成',
  projectName: '行政市水道事業会計 総務課 予算 - 会計担当 ぎょうせい太郎',
  fiscalYear: '平成29年09月12日',
};

const SampleApp: React.FC = () => {
  return (
    <div>
      <h2>公営企業会計システム</h2>
      <PublicAssetSystem {...sampleData} />
    </div>
  );
};

export default SampleApp;