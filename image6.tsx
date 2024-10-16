import React from 'react';
import styled from 'styled-components';

type ConsignmentFormProps = {
  consignmentCode: string;
  year: string;
  taxRate: number;
  paymentDate: string;
  disposalDate: string;
  entryDate: string;
  dscCode: string;
  forecast: boolean;
  expenseCode: string;
  mfbCode: string;
  remark: string;
  fare: string;
};

const ConsignmentForm: React.FC<ConsignmentFormProps> = ({
  consignmentCode = '0020101',
  year = '13',
  taxRate = 8,
  paymentDate = '062060101',
  disposalDate = '2',
  entryDate = '000000',
  dscCode = '',
  forecast = false,
  expenseCode = '',
  mfbCode = '',
  remark = '',
  fare = '',
}) => {
  return (
    <FormWrapper>
      <Row>
        <LabeledInput label="予算科目コード">
          <Input value={consignmentCode} readOnly />
        </LabeledInput>
        <LabeledInput label="年度">
          <Input value={year} readOnly />
        </LabeledInput>
      </Row>
      <Row>
        <LabeledInput label="税区分">
          <Select value={taxRate}>
            <option value={8}>課税1</option>
          </Select>
          <Input value="%" readOnly />
        </LabeledInput>
        <LabeledInput label="予算科目区分">
          <Input value="2" readOnly />
        </LabeledInput>
        <LabeledInput label="予算科目区分">
          <Input value="" readOnly />
        </LabeledInput>
        <LabeledInput label="エントリー区分">
          <Input value="" readOnly />
        </LabeledInput>
      </Row>
      <Row>
        <LabeledInput label="監督区分">
          <Select value="2">
            <option value="2">経常</option>
          </Select>
        </LabeledInput>
        <LabeledInput label="積算基礎税込フラグ">
          <RadioGroup>
            <label>
              <input type="radio" checked={forecast} />
              積技
            </label>
            <label>
              <input type="radio" checked={!forecast} />
              積込 
            </label>
          </RadioGroup>
        </LabeledInput>
      </Row>
      <LabeledInput label="旅費">
        <Input value="0000001" readOnly />
      </LabeledInput>
      <LabeledInput label="対応手仏金">
        <Input value={paymentDate} readOnly />
      </LabeledInput>
      <LabeledInput label="事業">
        <Input value={mfbCode} />
      </LabeledInput>
      <LabeledInput label="施策">
        <Input value={expenseCode} />
      </LabeledInput>
      <LabeledInput label="施策内訳">
        <Input value="" readOnly />
      </LabeledInput>
      <LabeledInput label="所属">
        <Input value={dscCode} />
      </LabeledInput>
      <Row>
        <LabeledInput label="事業科目">
          <Input value="" readOnly />
        </LabeledInput>
        <LabeledInput label="処理年月日">
          <Input value={disposalDate} readOnly />
        </LabeledInput>
      </Row>
      <LabeledInput label="備考">
        <Input value={remark} />
      </LabeledInput>
      <LabeledInput label="運賃">
        <Input value={fare} />
      </LabeledInput>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonRow>
    </FormWrapper>
  );
};

// Styles
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LabeledInput = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

// Example usage
const ExampleConsignmentForm = () => {
  return (
    <ConsignmentForm
      consignmentCode="0020101"
      year="13"
      taxRate={8}
      paymentDate="062060101"
      disposalDate="2"
      entryDate="000000"
      dscCode="00"
      forecast={false}
      expenseCode="11"
      mfbCode="22"
      remark="Sample remark"
      fare="10000"
    />
  );
};

export default ExampleConsignmentForm;