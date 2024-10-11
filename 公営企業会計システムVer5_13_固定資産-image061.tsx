import React from 'react';
import styled from 'styled-components';

// 予測管理明細表作成コンポーネントの型定義
interface PredictionDetailFormProps {
  actionDate?: string;
  managementCodeOptions?: { label: string; value: string }[];
  managementCode?: string;
  detailCode?: string;
  managementValue?: number;
  detailValue?: number;
  managementRate?: number;
  detailRate?: number;
  onSubmit?: () => void;
  onCancel?: () => void;
}

// スタイル定義
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 予測管理明細表作成コンポーネント
const PredictionDetailForm: React.FC<PredictionDetailFormProps> = ({
  actionDate = '',
  managementCodeOptions = [],
  managementCode = '',
  detailCode = '',
  managementValue = 0,
  detailValue = 0,
  managementRate = 0,
  detailRate = 0,
  onSubmit,
  onCancel,
}) => {
  return (
    <FormWrapper>
      <FormTitle>会計別予測管理明細表作成</FormTitle>
      <FormGroup>
        <Label>作業年月日</Label>
        <Input type="text" value={actionDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <Select value={managementCode}>
          <option value="">予測用</option>
          {managementCodeOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <span>～</span>
        <Select value={detailCode}>
          <option value="">予測用</option>
          {managementCodeOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>管理名称</Label>
        <Input type="number" value={managementValue} readOnly />
        <span>～</span>
        <Input type="number" value={detailValue} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>管理規格</Label>
        <Input type="number" value={managementRate} readOnly />
        <span>～</span>
        <Input type="number" value={detailRate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>取得年度</Label>
        <Input type="text" value="平成29年度" readOnly />
        <span>～</span>
        <Input type="text" value="平成29年度" readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button type="submit">OK</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData = {
  actionDate: '平成29年09月12日',
  managementCodeOptions: [
    { label: '00 予測用', value: '00' },
    { label: '01 実績用', value: '01' },
  ],
  managementCode: '00',
  detailCode: '00',
  managementValue: 999999,
  detailValue: 999999,
  managementRate: 999999,
  detailRate: 999999,
};

// 使用例
const UsageExample: React.FC = () => {
  return (
    <PredictionDetailForm
      actionDate={sampleData.actionDate}
      managementCodeOptions={sampleData.managementCodeOptions}
      managementCode={sampleData.managementCode}
      detailCode={sampleData.detailCode}
      managementValue={sampleData.managementValue}
      detailValue={sampleData.detailValue}
      managementRate={sampleData.managementRate}
      detailRate={sampleData.detailRate}
    />
  );
};

export default PredictionDetailForm;