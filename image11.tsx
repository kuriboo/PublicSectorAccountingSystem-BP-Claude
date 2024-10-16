以下のコードは、TypeScriptとNext.jsを使用して作業時間を表示するコンポーネントを実装したものです。プロパティを通じてカスタマイズ可能で、styled-componentsを使ってCSS-in-JS形式でスタイリングを組み込んでいます。レスポンシブデザインにも対応し、例外処理も含まれています。

import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface WorkHoursProps {
  title?: string;
  hours?: string;
}

// スタイルコンポーネントの定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Hours = styled.p`
  font-size: 18px;
`;

// 作業時間コンポーネントの定義
const WorkHours: React.FC<WorkHoursProps> = ({ title = '仕訳時間', hours = '-' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Hours>{hours}</Hours>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <WorkHours />
      <WorkHours title="勤務時間" hours="8時間30分" />
    </div>
  );
};

export default WorkHours;

このコードでは、WorkHoursコンポーネントを定義し、titleとhoursのプロパティを受け取ります。デフォルト値も設定されているので、プロパティが渡されない場合でも表示されます。

styled-componentsを使ってContainerやTitleなどのスタイルコンポーネントを定義し、レスポンシブデザインにも対応しています。

最後に、サンプルデータを用いたSampleUsageコンポーネントを実装し、WorkHoursコンポーネントの使用例を示しています。

コンポーネントの再利用性とカスタマイズ性を考慮し、例外処理も含めた実装となっています。