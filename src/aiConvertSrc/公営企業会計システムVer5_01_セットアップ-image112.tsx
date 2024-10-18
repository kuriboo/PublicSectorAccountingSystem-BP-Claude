import React from 'react';
import styled from 'styled-components';

// 区分コンポーネントの型定義
type DivisionProps = {
  label: string;
  value: string;
};

// 区分コンポーネント
const Division: React.FC<DivisionProps> = ({ label, value }) => {
  return (
    <DivisionWrapper>
      <DivisionLabel>{label}</DivisionLabel>
      <DivisionValue>{value}</DivisionValue>
    </DivisionWrapper>
  );
};

// 区分のスタイリング
const DivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DivisionLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DivisionValue = styled.span`
  color: #333;
`;

// 金額区分コンポーネントの型定義
type AmountDivisionProps = {
  value: '01' | '02' | '03';
};

// 金額区分コンポーネント
const AmountDivision: React.FC<AmountDivisionProps> = ({ value }) => {
  const getLabel = (value: string) => {
    switch (value) {
      case '01':
        return '執行額';
      case '02':
        return 'クリア';
      case '03':
        return 'キャンセル';
      default:
        return '';
    }
  };

  return <Division label="金額区分" value={getLabel(value)} />;
};

// マスク区分コンポーネント
const MaskDivision: React.FC = () => {
  return <Division label="マスク区分" value="予算" />;
};

// 科目名称コンポーネント
const SubjectName: React.FC = () => {
  return <Division label="科目名称" value="通勤手当" />;
};

// 金額コンポーネントの型定義
type AmountProps = {
  value: string;
};

// 金額コンポーネント
const Amount: React.FC<AmountProps> = ({ value }) => {
  // 金額の値が空の場合はデフォルト値を設定
  const formattedValue = value ? value : '00301010000001';

  return <Division label="金額" value={formattedValue} />;
};

// サンプルデータを使用したコンポーネントの表示例
const SampleComponent: React.FC = () => {
  return (
    <div>
      <MaskDivision />
      <SubjectName />
      <Amount value="00301010000001" />
      <AmountDivision value="01" />
    </div>
  );
};

export default SampleComponent;