以下は、指定された要件に基づいて作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

type TaxDeclarationConditionsProps = {
  conditions: string[];
};

const TaxDeclarationConditions: React.FC<TaxDeclarationConditionsProps> = ({ conditions }) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <ConditionList>
        {conditions.map((condition, index) => (
          <ConditionItem key={index}>
            <CheckIcon>✔</CheckIcon>
            {condition}
          </ConditionItem>
        ))}
      </ConditionList>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ConditionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ConditionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CheckIcon = styled.span`
  margin-right: 8px;
  color: green;
`;

// Usage example
const TaxDeclarationConditionsExample: React.FC = () => {
  const sampleConditions = [
    '第一表 課税期間分の消費税及び地方消費税の（確定）申告書',
    '第二表 課税期間分の消費税及び地方消費税の（確定）申告書',
    '付表1-1 税率別消費税額計算表 兼 地方消費税の課税標準となる消費税額計算表',
    '付表1-2 税率別消費税額計算表 兼 地方消費税の課税標準となる消費税額計算表',
    '付表2-1 課税売上割合・控除対象仕入額等の計算表',
    '付表2-2 課税売上割合・控除対象仕入額等の計算表',
    '特定収入に係る課税仕入れ等の税額の計算表',
  ];

  return <TaxDeclarationConditions conditions={sampleConditions} />;
};

export default TaxDeclarationConditionsExample;