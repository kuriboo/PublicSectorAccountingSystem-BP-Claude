import React from 'react';
import styled from '@emotion/styled';

type Range = {
  from: string;
  to: string;
};

type MasterListProps = {
  fiscalYear?: number;
  singleCode?: boolean;
  ranges: Range[];
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RangeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RangeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RangeLabel = styled.div`
  width: 60px;
`;

const RangeInput = styled.input`
  width: 100px;
  padding: 5px;
`;

const Spacer = styled.div`
  width: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

/**
 * マスタリストコンポーネント
 */
const MasterList: React.FC<MasterListProps> = ({
  fiscalYear = new Date().getFullYear(),
  singleCode = false,
  ranges = [],
}) => {
  return (
    <Container>
      <Title>貯蔵品単価マスタリスト</Title>
      <div>令和{fiscalYear - 2018}年度</div>
      <RadioGroup>
        <Radio type="radio" id="singleCode" checked={singleCode} readOnly />
        <Label htmlFor="singleCode">単価コード</Label>
        <Radio type="radio" id="rangeCode" checked={!singleCode} readOnly />
        <Label htmlFor="rangeCode">範囲コード</Label>
      </RadioGroup>
      <RangeGroup>
        {ranges.map((range, index) => (
          <RangeItem key={index}>
            <RangeLabel>所属</RangeLabel>
            <RangeInput type="text" value={range.from} readOnly />
            <Spacer>〜</Spacer>
            <RangeInput type="text" value={range.to} readOnly />
          </RangeItem>
        ))}
      </RangeGroup>
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

/**
 * サンプルデータを用いた使用例
 */
const SampleUsage: React.FC = () => {
  const sampleRanges = [
    { from: '0000000', to: '9999999' },
    { from: '000000000', to: '999999999' },
  ];

  return <MasterList ranges={sampleRanges} />;
};

export default MasterList;