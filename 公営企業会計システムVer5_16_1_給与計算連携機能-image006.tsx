import React from 'react';
import styled from 'styled-components';

type DataEntryFormProps = {
  companyName: string;
  startDate: string;
  endDate: string;
  onSubmit: (data: { companyName: string; startDate: string; endDate: string }) => void;
};

const DataEntryForm: React.FC<DataEntryFormProps> = ({ companyName, startDate, endDate, onSubmit }) => {
  return (
    <StyledForm>
      <StyledHeading>給与データ取込</StyledHeading>
      <StyledCompanyName>{companyName || '行政市水道事業会計'}</StyledCompanyName>
      <StyledLabel>
        会計区分 <StyledSpan>or. 行政市水道事業会計</StyledSpan>
      </StyledLabel>
      <StyledLabel>
        支給日 <StyledInput type="text" defaultValue={startDate || '平成28年09月25日'} />
      </StyledLabel>
      <StyledLabel>
        起算日 <StyledInput type="text" defaultValue={endDate || '平成28年09月19日'} />
      </StyledLabel>
      <StyledNote>
        支給日とファイル日付が同じ給与支給データを対象にして、
        <br />
        給与データの取込みをします。
        <br />
        決定データの起算日は、画面で登録した起算日となります。
      </StyledNote>
      <StyledButtonContainer>
        <StyledButton type="button">エラー確認</StyledButton>
        <StyledSubmitButton
          type="button"
          onClick={() => onSubmit({ companyName, startDate, endDate })}
        >
          取込み
        </StyledSubmitButton>
        <StyledButton type="button">終了</StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
};

// Styled components
const StyledForm = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const StyledHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledCompanyName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledSpan = styled.span`
  margin-left: 10px;
`;

const StyledInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const StyledNote = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.5;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  margin-left: 10px;
  cursor: pointer;
`;

const StyledSubmitButton = styled(StyledButton)`
  background-color: #007bff;
  color: #fff;
`;

// Sample usage
const SampleDataEntryForm: React.FC = () => {
  const handleSubmit = (data: { companyName: string; startDate: string; endDate: string }) => {
    console.log('Submitted data:', data);
  };

  return (
    <DataEntryForm
      companyName="Sample Company"
      startDate="2023-06-01"
      endDate="2023-06-30"
      onSubmit={handleSubmit}
    />
  );
};

export default SampleDataEntryForm;