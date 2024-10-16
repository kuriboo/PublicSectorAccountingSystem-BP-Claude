import React from 'react';
import styled from 'styled-components';

interface CompanyFormProps {
  period?: {
    start: string;
    end: string;
  };
  number?: string;
  conductType?: '指定しない' | '指定する';
  orderType?: '連携する' | '連携しない';
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  period = { start: '', end: '' },
  number = '',
  conductType = '指定しない',
  orderType = '連携する',
}) => {
  return (
    <FormContainer>
      <FormTitle>範囲指定</FormTitle>
      <FormRow>
        <FormLabel>支払日</FormLabel>
        <InputWrapper>
          <FormInput type="text" defaultValue={period.start} /> ～{' '}
          <FormInput type="text" defaultValue={period.end} />
        </InputWrapper>
      </FormRow>
      <FormRow>
        <FormLabel>伝票番号</FormLabel>
        <RadioButtonsWrapper>
          <RadioButton
            type="radio"
            id="conductType1"
            name="conductType"
            value="指定しない"
            defaultChecked={conductType === '指定しない'}
          />
          <RadioButtonLabel htmlFor="conductType1">指定しない</RadioButtonLabel>
          <RadioButton
            type="radio"
            id="conductType2"
            name="conductType" 
            value="指定する"
            defaultChecked={conductType === '指定する'}
          />
          <RadioButtonLabel htmlFor="conductType2">指定する</RadioButtonLabel>
          <FormInput type="text" defaultValue={number} disabled={conductType === '指定しない'} />
        </RadioButtonsWrapper>
      </FormRow>
      <FormRow>
        <FormLabel>電子決裁</FormLabel>
        <RadioButton
          type="radio"
          id="orderType1"
          name="orderType"
          value="連携する" 
          defaultChecked={orderType === '連携する'}
        />
        <RadioButtonLabel htmlFor="orderType1">連携する</RadioButtonLabel>
        <RadioButton
          type="radio"
          id="orderType2"  
          name="orderType"
          value="連携しない"
          defaultChecked={orderType === '連携しない'}
        />
        <RadioButtonLabel htmlFor="orderType2">連携しない</RadioButtonLabel>
      </FormRow>
      <Notes>
        ※ 連携<br />
        連携済み(決裁中) ・ 決裁完了<br />
        ※ 連携する場合、「未連携」のみ出力対象となります。<br />
        「未連携」には、連携先システムで削除された伝票も含まれます。
      </Notes>
    </FormContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <h1>支払伝票(単票)作成</h1>
      <CompanyForm
        period={{ start: '令和05年08月14日', end: '令和05年09月14日' }}
        number="999999"
        conductType="指定する"
        orderType="連携する"
      />
    </div>
  );
};

export default App;

// Styles
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  margin-bottom: 10px;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: inline-block;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
`;

const RadioButtonsWrapper = styled.div`
  display: inline-block;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioButtonLabel = styled.label`
  margin-right: 10px;
`;

const Notes = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  line-height: 1.4;
`;