import React from 'react';
import styled from '@emotion/styled';

type AdjustmentType = {
  label: string;
  value: number;
};

type Props = {
  adjustments: AdjustmentType[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

const Input = styled.input`
  width: 100px;
`;

/**
 * 調整額入力コンポーネント
 * @param props.adjustments - 調整項目の配列
 */
const AdjustmentInputs: React.FC<Props> = ({ adjustments }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>範囲指定</th>
          <th></th>
          <th>施設</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {adjustments.map((adjustment, index) => (
          <tr key={index}>
            <td>{adjustment.label}</td>
            <td>
              <Input type="number" defaultValue={adjustment.value} />  
            </td>
            <td>～</td>
            <td>
              <Input type="number" defaultValue={adjustment.value} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: AdjustmentType[] = [
  { label: '施設', value: 0 },
  { label: '管理名称', value: 0 },
  { label: '管理規格', value: 0 },
];

/**
 * サンプル表示用コンポーネント 
 */
const SampleAdjustmentInputs: React.FC = () => {
  return (
    <div>
      <h3>施設別管種延長の調作成</h3>
      <AdjustmentInputs adjustments={sampleData} />
    </div>
  );
};

export default SampleAdjustmentInputs;