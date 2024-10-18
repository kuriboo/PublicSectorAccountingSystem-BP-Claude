import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

interface PropType {
  documentNumber: string;
  date: string;
  title: string;
  subtitle: string;
  pubYear: number;
  pageCount: number;
  size: 'A4' | 'A4縦';
  style: string;
  subtitle2: string;
  title2: string;
  memo: string;
  isSeal: boolean;
  isSign: boolean;
  openAccess: 1 | 2;
}

const DocInfoArea = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }  
`;

const RadioButton = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Subtitle = styled.div`
  margin-bottom: 10px;
  font-style: italic;
  color: #666;
`;

const InputText = styled.input`
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;

  @media screen and (max-width: 600px) {
    width: calc(100% - 10px);
    margin-top: 5px;
  }
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
`;

const PublicationInfo: React.FC<PropType> = ({
  documentNumber,
  date,
  title,
  subtitle,
  pubYear,
  pageCount,
  size,
  style,
  subtitle2,
  title2,
  memo,
  isSeal,
  isSign,
  openAccess
}) => {
  const [errors, setErrors] = useState<Partial<Record<keyof PropType, string>>>({});
  const [formData, setFormData] = useState<PropType>({
    documentNumber,
    date,
    title,
    subtitle,
    pubYear,
    pageCount,
    size,
    style,
    subtitle2,
    title2,
    memo,
    isSeal,
    isSign,
    openAccess
  });

  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof PropType, string>> = {};

    if (!formData.documentNumber.trim()) {
      newErrors.documentNumber = '資料番号は必須です。';
    }

    if (!formData.date.trim()) {
      newErrors.date = '日付は必須です。';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'タイトルは必須です。';
    }

    if (formData.pubYear < 1900 || formData.pubYear > new Date().getFullYear()) {
      newErrors.pubYear = '無効な年です。';
    }

    if (formData.pageCount < 1) {
      newErrors.pageCount = 'ページ数は1以上である必要があります。';
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

  const handleRadioChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <DocInfoArea>
      <FormGroup>
        <Label>資料番号：</Label>
        <InputText 
          type="text" 
          name="documentNumber"
          value={formData.documentNumber}
          onChange={handleInputChange}
        />
        {errors.documentNumber && <ErrorMessage>{errors.documentNumber}</ErrorMessage>}
        
        <Label style={{marginLeft: "20px"}}>予算・会計担当:</Label>
        <InputText 
          type="text" 
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
      </FormGroup>
      
      <Title>{formData.title}</Title>
      {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      
      <Subtitle>{formData.subtitle}</Subtitle>
      
      <FormGroup>
        <CheckboxContainer>
          <RadioButton 
            type="radio" 
            name="autoJournal" 
            value="estimate"
            onChange={handleRadioChange}
          />
          <span>見積要求額</span>
          <RadioButton 
            type="radio" 
            name="autoJournal" 
            value="invoice"
            onChange={handleRadioChange}
          />
          <span>請求額</span>
          <RadioButton 
            type="radio" 
            name="autoJournal" 
            value="figure"
            onChange={handleRadioChange}
          />
          <span>図</span>
        </CheckboxContainer>
      </FormGroup>
      
      <FormGroup>
        <Label>前年度繰越金：</Label>
        <InputText 
          type="number" 
          name="pubYear"
          value={formData.pubYear} 
          onChange={handleInputChange}
        /> 
        <span>(円)</span>
        {errors.pubYear && <ErrorMessage>{errors.pubYear}</ErrorMessage>}
        
        <Label style={{marginLeft: "10px"}}>前年度授権年計費</Label>
      </FormGroup>
      
      <FormGroup>
        <Label>サイズ：</Label>
        <RadioButton 
          type="radio" 
          name="size" 
          value="A4"
          checked={formData.size === 'A4'} 
          onChange={handleRadioChange}
        />
        <span>A4 横</span>
        <RadioButton 
          type="radio" 
          name="size" 
          value="A4縦"
          checked={formData.size === 'A4縦'} 
          onChange={handleRadioChange}
        />
        <span>A4 縦</span>
      </FormGroup>
      
      <FormGroup>
        <Label>タイトル：</Label>
        <InputText 
          type="text" 
          name="style"
          value={formData.style} 
          onChange={handleInputChange}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>サブタイトル：</Label>
        <InputText 
          type="text" 
          name="subtitle2"
          value={formData.subtitle2} 
          onChange={handleInputChange}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>柱タイトル：</Label>
        <InputText 
          type="text" 
          name="title2"
          value={formData.title2} 
          onChange={handleInputChange}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>頁付字：</Label>
        <RadioButton 
          type="radio" 
          name="isSeal" 
          value="true"
          checked={formData.isSeal} 
          onChange={handleRadioChange}
        />
        <span>する</span>
        <RadioButton 
          type="radio" 
          name="isSeal" 
          value="false"
          checked={!formData.isSeal} 
          onChange={handleRadioChange}
        />
        <span>しない</span>
      </FormGroup>
      
      <FormGroup>
        <Label>開始頁：</Label>
        <InputText 
          type="number" 
          name="openAccess"
          value={formData.openAccess} 
          onChange={handleInputChange}
        />
        {errors.openAccess && <ErrorMessage>{errors.openAccess}</ErrorMessage>}
      </FormGroup>
    </DocInfoArea>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: PropType = {
    documentNumber: "平成29第06号16日", 
    date: "平成29年06月16日",
    title: "〇〇に関する調書", 
    subtitle: "副題が入ります",
    pubYear: 2020,
    pageCount: 10,
    size: "A4",
    style: "タイトル",
    subtitle2: "サブタイトル",
    title2: "柱タイトル",
    memo: "1",
    isSeal: true,
    isSign: false,
    openAccess: 1
  };
  
  return (
    <PublicationInfo {...sampleData} />
  );
};

export default SampleUsage;