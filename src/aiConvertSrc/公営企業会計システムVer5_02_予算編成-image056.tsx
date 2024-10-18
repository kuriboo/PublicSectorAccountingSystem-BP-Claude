import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

type ReservationSearchFormProps = {
  onSubmit: (params: SearchParams) => void;
};

type SearchParams = {
  fiscalYear: number;
  budgetType: string;
  count: number;
  includeLastYearResults: boolean;
  startYear: number;
  endYear: number;
  departmentStart: string;
  departmentEnd: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  taxRate: number;
};

const ReservationSearchForm: React.FC<ReservationSearchFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<SearchParams>({
    fiscalYear: 30,
    budgetType: '当初予算',
    count: 1,
    includeLastYearResults: true,
    startYear: 26,
    endYear: 28,
    departmentStart: '0000000',
    departmentEnd: '9999999',
    budgetItemStart: '00000000000000000',
    budgetItemEnd: '99999999999999999',
    taxRate: 1.00,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SearchParams, string>>>({});

  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof SearchParams, string>> = {};

    if (formData.fiscalYear < 1) {
      newErrors.fiscalYear = '年度は1以上の値を入力してください。';
    }

    if (formData.count < 1) {
      newErrors.count = '回数は1以上の値を入力してください。';
    }

    if (formData.startYear > formData.endYear) {
      newErrors.startYear = '開始年度は終了年度以前の値を入力してください。';
    }

    if (formData.departmentStart > formData.departmentEnd) {
      newErrors.departmentStart = '開始所属は終了所属以前の値を入力してください。';
    }

    if (formData.budgetItemStart > formData.budgetItemEnd) {
      newErrors.budgetItemStart = '開始予算科目は終了予算科目以前の値を入力してください。';
    }

    if (formData.taxRate < 0 || formData.taxRate > 100) {
      newErrors.taxRate = '税率は0%から100%の間で入力してください。';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (validateForm()) {
      onSubmit(formData);
    }
  }, [formData, onSubmit, validateForm]);

  const handleClear = useCallback(() => {
    setFormData({
      fiscalYear: 30,
      budgetType: '当初予算',
      count: 1,
      includeLastYearResults: true,
      startYear: 26,
      endYear: 28,
      departmentStart: '0000000',
      departmentEnd: '9999999',
      budgetItemStart: '00000000000000000',
      budgetItemEnd: '99999999999999999',
      taxRate: 1.00,
    });
    setErrors({});
  }, []);

  return (
    <Container>
      <Title>科目別執行計画額一覧作成</Title>
      
      <FieldContainer>        
        <FieldLabel>対象予算</FieldLabel>
        <div>
          <Select name="fiscalYear" value={formData.fiscalYear} onChange={handleInputChange}>
            <option value={30}>30年</option>
          </Select>
          年度
        </div>
        {errors.fiscalYear && <ErrorMessage>{errors.fiscalYear}</ErrorMessage>}

        <FieldLabel>予算編成区分</FieldLabel>
        <Select name="budgetType" value={formData.budgetType} onChange={handleInputChange}>
          <option value="当初予算">当初予算</option>
        </Select>

        <FieldLabel>回数</FieldLabel>
        <Input type="number" name="count" value={formData.count} onChange={handleInputChange} />
        {errors.count && <ErrorMessage>{errors.count}</ErrorMessage>}

        <CheckField>
          <input 
            type="checkbox" 
            name="includeLastYearResults" 
            checked={formData.includeLastYearResults} 
            onChange={handleInputChange} 
          />
          <label htmlFor="includeLastYearResults">過年度実績</label>
        </CheckField>
      </FieldContainer>

      <FieldContainer>
        <FieldLabel>対象実績</FieldLabel>
        <div>  
          <Select name="startYear" value={formData.startYear} onChange={handleInputChange}>
            <option value={26}>26年</option>
          </Select>
          年度
          〜
          <Select name="endYear" value={formData.endYear} onChange={handleInputChange}>
            <option value={28}>28年</option>
          </Select>
          年度
        </div>
        {errors.startYear && <ErrorMessage>{errors.startYear}</ErrorMessage>}
      </FieldContainer>

      <FieldContainer>
        <FieldLabel>作成範囲</FieldLabel>
        <div>
          所属:
          <Input type="text" name="departmentStart" value={formData.departmentStart} onChange={handleInputChange} />
          〜  
          <Input type="text" name="departmentEnd" value={formData.departmentEnd} onChange={handleInputChange} />
        </div>
        {errors.departmentStart && <ErrorMessage>{errors.departmentStart}</ErrorMessage>}
        <div>
          予算科目: 
          <Input type="text" name="budgetItemStart" value={formData.budgetItemStart} onChange={handleInputChange} />
          〜
          <Input type="text" name="budgetItemEnd" value={formData.budgetItemEnd} onChange={handleInputChange} />  
        </div>
        {errors.budgetItemStart && <ErrorMessage>{errors.budgetItemStart}</ErrorMessage>}
      </FieldContainer>
        
      <FieldContainer>
        <FieldLabel>税金率</FieldLabel>
        <TaxRateInput 
          type="number" 
          name="taxRate" 
          value={formData.taxRate} 
          onChange={handleInputChange} 
          step="0.01"
        />%  
        {errors.taxRate && <ErrorMessage>{errors.taxRate}</ErrorMessage>}
      </FieldContainer>

      <ButtonContainer>
        <Button type="button" onClick={handleSubmit}>OK</Button>  
        <Button type="button" onClick={handleClear}>クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
      
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  & > *:not(:last-child) {
    margin-right: 8px;  
  }
`;

const FieldLabel = styled.div`
  font-weight: bold;
  white-space: nowrap;
  margin-right: 16px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Input = styled.input`
  padding: 4px;
  width: 100px;
`;

const CheckField = styled.label`
  display: flex;
  align-items: center;  
`;

const TaxRateInput = styled(Input)`
  width: 60px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;  
  
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  min-width: 100px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (params: SearchParams) => {
    console.log(params);
    // 検索処理を実装する  
  };

  return (
    <div>  
      <h1>科目別執行計画額一覧作成</h1>
      <ReservationSearchForm onSubmit={handleSubmit} />
    </div>
  );  
};

export default App;