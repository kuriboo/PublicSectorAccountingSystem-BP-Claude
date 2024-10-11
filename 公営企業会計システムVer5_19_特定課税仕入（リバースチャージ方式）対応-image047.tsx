import React from 'react';
import styled from 'styled-components';

type YosanProps = {
  yosan: number;
  yosanTani: string;
  kessan: number;
  kessanTani: string;
  zeinuki: number;
  zeikomikessangaku: number;
  consumptionTaxRate: number;
  shohizei: number;
  jigyo: number;
};

const YosanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const Yosan: React.FC<YosanProps> = ({
  yosan,
  yosanTani,
  kessan,
  kessanTani,
  zeinuki,
  zeikomikessangaku,
  consumptionTaxRate,
  shohizei,
  jigyo,
}) => {
  return (
    <YosanWrapper>
      <Row>
        <Label>予算</Label>
        <Value>{`${yosan.toLocaleString()} ${yosanTani}`}</Value>
      </Row>
      <Row>
        <Label>決算</Label>
        <Value>{`${kessan.toLocaleString()} ${kessanTani}`}</Value>
      </Row>
      <Row>
        <Label>税抜金額</Label>
        <Value>{`${zeinuki.toLocaleString()}`}</Value>
      </Row>
      <Row>
        <Label>税込決算額</Label>
        <Value>{`${zeikomikessangaku.toLocaleString()}`}</Value>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Value>{`${consumptionTaxRate} %`}</Value>
      </Row>
      <Row>
        <Label>消費税</Label>
        <Value>{`${shohizei.toLocaleString()}`}</Value>
      </Row>
      <Row>
        <Label>事業</Label>
        <Value>{`${jigyo.toLocaleString()}`}</Value>
      </Row>
    </YosanWrapper>
  );
};

// 使用例
const YosanExample = () => {
  return (
    <Yosan
      yosan={1000000}
      yosanTani="円"
      kessan={925024}
      kessanTani="円"
      zeinuki={1000000}
      zeikomikessangaku={-1000000}
      consumptionTaxRate={8}
      shohizei={74074}
      jigyo={0}
    />
  );
};

export default YosanExample;