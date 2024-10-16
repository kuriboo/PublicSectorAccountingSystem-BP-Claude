以下は、画像を元にNext.js + TypeScriptでコンポーネントを生成したコードです。

import React from 'react';
import styled from '@emotion/styled';

type MonthlyReportFormProps = {
  onSubmit: (data: MonthlyReportData) => void;
};

type MonthlyReportData = {
  targetYear: number;
  targetMonth: number;
  submissionStatus: '前年度当月決算' | '当月予算';
  supportFund: '貸付額' | '補助額';
  managementFund: '自己資金' | '借入金';
  fundUsage: '税抜' | '税込';
  segment: string;
};

const MonthlyReportForm: React.FC<MonthlyReportFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [formData, setFormData] = React.useState<MonthlyReportData>({
    targetYear: currentYear,
    targetMonth: currentMonth,
    submissionStatus: '前年度当月決算',
    supportFund: '貸付額',
    managementFund: '自己資金',
    fundUsage: '税抜',
    segment: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label>集計年月</label>
        <div>
          <input
            type="number"
            name="targetYear"
            min={currentYear}
            value={formData.targetYear}
            onChange={handleChange}
            required
          />
          年
          <input
            type="number"
            name="targetMonth"
            min={1}
            max={12}
            value={formData.targetMonth}
            onChange={handleChange}
            required
          />
          月
        </div>
      </FormGroup>
      <FormGroup>
        <label>比較対象</label>
        <div>
          <label>
            <input
              type="radio"
              name="submissionStatus"
              value="前年度当月決算"
              checked={formData.submissionStatus === '前年度当月決算'}
              onChange={handleChange}
            />
            前年度当月決算
          </label>
          <label>
            <input
              type="radio"
              name="submissionStatus"
              value="当月予算"
              checked={formData.submissionStatus === '当月予算'}
              onChange={handleChange}
            />
            当月予算
          </label>
        </div>
      </FormGroup>
      <FormGroup>
        <label>支払科目</label>
        <div>
          <label>
            <input
              type="radio"
              name="supportFund"
              value="貸付額"
              checked={formData.supportFund === '貸付額'}
              onChange={handleChange}
            />
            貸付額
          </label>
          <label>
            <input
              type="radio"
              name="supportFund"
              value="補助額"
              checked={formData.supportFund === '補助額'}
              onChange={handleChange}
            />
            補助額
          </label>
        </div>
      </FormGroup>
      <FormGroup>
        <label>金額区分</label>
        <div>
          <label>
            <input
              type="radio"
              name="managementFund"
              value="自己資金"
              checked={formData.managementFund === '自己資金'}
              onChange={handleChange}
            />
            自己資金
          </label>
          <label>
            <input
              type="radio"
              name="managementFund"
              value="借入金"
              checked={formData.managementFund === '借入金'}
              onChange={handleChange}
            />
            借入金
          </label>
        </div>
      </FormGroup>
      <FormGroup>
        <label>税区分</label>
        <div>
          <label>
            <input
              type="radio"
              name="fundUsage"
              value="税抜"
              checked={formData.fundUsage === '税抜'}
              onChange={handleChange}
            />
            税抜
          </label>
          <label>
            <input
              type="radio"
              name="fundUsage"
              value="税込"
              checked={formData.fundUsage === '税込'}
              onChange={handleChange}
            />
            税込
          </label>
        </div>
      </FormGroup>
      <FormGroup>
        <label>セグメント</label>
        <select name="segment" value={formData.segment} onChange={handleChange}>
          <option value="">選択してください</option>
          {/* セグメントのオプションを追加 */}
        </select>
      </FormGroup>
      <ButtonGroup>
        <button type="button">クリア</button>
        <button type="submit">検索</button>
        <button type="button">終了</button>
      </ButtonGroup>
    </Form>
  );
};

// Usage example
const SampleMonthlyReportForm: React.FC = () => {
  const handleSubmit = (data: MonthlyReportData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>月別損益計算書集計処理</h1>
      <MonthlyReportForm onSubmit={handleSubmit} />
    </div>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  label {
    flex-shrink: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export default SampleMonthlyReportForm;