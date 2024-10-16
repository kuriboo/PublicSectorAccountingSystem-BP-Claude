import React from 'react';
import styled from 'styled-components';

// 業務別見積要求書(当初)作成のプロパティ定義
type EstimateRequestFormProps = {
  fiscalYear?: number; // 年度
  printType?: 'estimate' | 'contract'; // 印字区分
  printNum?: number; // 通知額
  fromDate?: string; // 所属(開始日)
  toDate?: string; // 所属(終了日)
  companyName?: string; // 事業科目
};

// スタイル定義
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  width: 120px;
  margin-right: 8px;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormSelect = styled.select`
  flex: 1;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 業務別見積要求書(当初)作成コンポーネント
const EstimateRequestForm: React.FC<EstimateRequestFormProps> = ({
  fiscalYear = new Date().getFullYear(),
  printType = 'estimate',
  printNum = 1,
  fromDate = '',
  toDate = '',
  companyName = '',
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>年度:</FormLabel>
        <FormInput type="number" value={fiscalYear} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>印字区分:</FormLabel>
        <FormSelect value={printType}>
          <option value="estimate">見積要求額</option>
          <option value="contract">契約額</option>
        </FormSelect>
        <FormInput type="number" value={printNum} min={1} />
        <span>回</span>
      </FormRow>
      <FormRow>
        <FormLabel>所属期間:</FormLabel>
        <FormInput type="text" value={fromDate} placeholder="開始" />
        <span>〜</span>
        <FormInput type="text" value={toDate} placeholder="終了" />
      </FormRow>
      <FormRow>
        <FormLabel>事業科目:</FormLabel>
        <FormInput type="text" value={companyName} />
      </FormRow>
      <div>※消費税率ごとの要求（査定）額明細を表示する</div>
      <ButtonGroup>
        <Button>ＯＫ</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const ExampleUsage: React.FC = () => {
  return (
    <EstimateRequestForm
      fiscalYear={2023}
      printType="estimate"
      printNum={1}
      fromDate="20230401"
      toDate="20230930"
      companyName="事業A"
    />
  );
};

export default EstimateRequestForm;