import React from 'react';
import styled from 'styled-components';

// 決算のプロセスを表すコンポーネントの型定義
type SettlementProcessProps = {
  processes?: string[]; // 決算プロセスの配列（オプショナル）
};

// 決算のプロセスを表すコンポーネント
const SettlementProcess: React.FC<SettlementProcessProps> = ({ processes = [] }) => {
  return (
    <ProcessWrapper>
      {processes.map((process, index) => (
        <React.Fragment key={process}>
          <ProcessBox>{process}</ProcessBox>
          {index < processes.length - 1 && <Arrow />}
        </React.Fragment>
      ))}
    </ProcessWrapper>
  );
};

// プロセスボックスのスタイル
const ProcessBox = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 0 8px;
  display: inline-block;
`;

// 矢印のスタイル
const Arrow = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #999;
  margin: 0 8px;
`;

// プロセスをまとめるラッパーのスタイル
const ProcessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleProcesses = ['消費税準備', '決定a 分の設定（個別対応方式の場合）', '固定資産税', '法人税', '消費税申告'];

  return (
    <div>
      <h2>決算プロセス</h2>
      <SettlementProcess processes={sampleProcesses} />
    </div>
  );
};

export default SampleUsage;