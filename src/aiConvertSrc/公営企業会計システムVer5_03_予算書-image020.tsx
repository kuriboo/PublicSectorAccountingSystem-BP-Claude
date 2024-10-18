import React from 'react';
import styled from '@emotion/styled';

type PaperSize = 'A4' | 'A4_landscape';
type Orientation = 'portrait' | 'landscape';

interface CashBookCreationFormProps {
  year: number;
  autofillRecommended: boolean;
  beforeCorrection: boolean;
  beforeCorrectionFront: number;
  beforeCorrectionBack: number;
  inAdvance: number;
  size: PaperSize;
  title: string;
  subtitle: string;
  printDate: boolean;
  copies: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const CashBookCreationForm: React.FC<CashBookCreationFormProps> = ({
  year = new Date().getFullYear(),
  autofillRecommended = false,
  beforeCorrection = false,
  beforeCorrectionFront = 0,
  beforeCorrectionBack = 0, 
  inAdvance = 0,
  size = 'A4',
  title = '',
  subtitle = '',
  printDate = false,
  copies = 1,
}) => {
  return (
    <Container>
      <FormGroup>
        <Label htmlFor="year">年度</Label>
        <Input type="number" id="year" name="year" defaultValue={year} />
      </FormGroup>
      <FormGroup>
        <Label>自動仕訳情報</Label>
        <label>
          <Input type="checkbox" checked={autofillRecommended} readOnly /> 見積要求額
        </label>
        <label>
          <Input type="checkbox" checked={beforeCorrection} readOnly /> 前年度
        </label>
      </FormGroup>
      <FormGroup>
        <Label>前年度繰越金</Label>
        <div>
          <Label htmlFor="beforeCorrectionFront">決算見込(千円)</Label>
          <Input type="number" id="beforeCorrectionFront" value={beforeCorrectionFront} readOnly />
        </div>
        <div>
          <Label htmlFor="beforeCorrectionBack">前年度(円)</Label>
          <Input type="number" id="beforeCorrectionBack" value={beforeCorrectionBack} readOnly />
        </div>
      </FormGroup>
      <FormGroup>        
        <Label htmlFor="inAdvance">決算見込(円)</Label>
        <Input type="number" id="inAdvance" value={inAdvance} readOnly />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="size">サイズ</Label>
        <Select id="size" defaultValue={size}>
          <option value="A4">A4 横</option>
          <option value="A4_landscape">A4 縦</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="title">タイトル</Label>
        <Input type="text" id="title" name="title" defaultValue={title} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subtitle">サブタイトル</Label>
        <Input type="text" id="subtitle" name="subtitle" defaultValue={subtitle} />
      </FormGroup>
      <FormGroup>  
        <Label htmlFor="printDate">頁タイトル</Label>
        <label>
          <Input type="radio" id="printDate" name="printDate" value="true" defaultChecked={printDate} /> する
        </label>
        <label>
          <Input type="radio" name="printDate" value="false" defaultChecked={!printDate} /> しない  
        </label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="copies">部数</Label>
        <Input type="number" id="copies" name="copies" min={1} defaultValue={copies} />
      </FormGroup>
    </Container>
  );
};

// Sample usage
const SampleCashBookCreationForm = () => {
  const props = {
    year: 2023,
    autofillRecommended: true,
    beforeCorrection: true,
    beforeCorrectionFront: 1000,
    beforeCorrectionBack: 500000, 
    inAdvance: 0,
    size: 'A4',
    title: '令和29年06月16日',
    subtitle: '上外道',
    printDate: false,
    copies: 1,
  };

  return <CashBookCreationForm {...props} />;
}

export default SampleCashBookCreationForm;