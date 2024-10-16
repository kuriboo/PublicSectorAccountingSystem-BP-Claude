import React from 'react';
import styled from '@emotion/styled';

// 修正情報を表す型定義
type RepairInfo = {
  name: string;
  code: string;
  comment: string;
};

// 調整入力修正項目のプロパティ型定義
type RepairInputProps = {
  repairs: RepairInfo[];
  onClickOk?: () => void;
  onClickClear?: () => void;
  onClickCancel?: () => void;
};

// 修正項目のスタイル
const RepairItem = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const RepairName = styled.div`
  width: 200px;
`;

const RepairCode = styled.div`
  width: 100px;
`;

const RepairComment = styled.div`
  flex: 1;
`;

// 調整額のスタイル
const AdjustmentAmount = styled.div`
  margin-top: 16px;
  padding: 8px;
  border: 1px solid #ccc;

  > div {
    margin-bottom: 4px;
  }
`;

// ボタンのスタイル
const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

/**
 * 調整入力修正項目のコンポーネント
 */
const RepairInput: React.FC<RepairInputProps> = ({
  repairs,
  onClickOk,
  onClickClear, 
  onClickCancel,
}) => {
  return (
    <div>
      {repairs.map((repair, index) => (
        <RepairItem key={index}>
          <RepairName>{repair.name}</RepairName>
          <RepairCode>{repair.code}</RepairCode>
          <RepairComment>{repair.comment}</RepairComment>
        </RepairItem>
      ))}

      <AdjustmentAmount>
        <div>節名称 環境</div>
        <div>節：0012345 外・その他維持管理</div>
        <div>明細：000 売電収益</div>
        <div>税区分 課税</div>
      </AdjustmentAmount>

      <div>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </div>
    </div>
  );
};

export default RepairInput;

// 使用例
const App: React.FC = () => {
  const sampleRepairs: RepairInfo[] = [
    { name: '節', code: '0012345', comment: '過年度損益修正損' },
    { name: '細節', code: '00001', comment: '過年度修繕工事収益'  },
    { name: '明細', code: '0004', comment: '過年度修繕工事収益'  },
  ];

  return (
    <div>
      <h1>調整入力修正項目</h1>
      <RepairInput 
        repairs={sampleRepairs}
        onClickOk={() => console.log('OK clicked')}
        onClickClear={() => console.log('Clear clicked')}
        onClickCancel={() => console.log('Cancel clicked')}
      />
    </div>
  );
};