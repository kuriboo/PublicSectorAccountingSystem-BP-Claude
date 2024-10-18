import React from 'react';
import styled from '@emotion/styled';

interface MasterListProps {
  savedFrom: string;
  savedTo: string;
  dateFrom: string;
  dateTo: string;
  isPrintDetail: boolean;
  isConsolidated: boolean;
  isModified: boolean;
  isCancelled: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FieldLabel = styled.label`
  margin-right: 10px;
`;

const FieldInput = styled.input`
  padding: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MasterList: React.FC<MasterListProps> = ({
  savedFrom = '',
  savedTo = '',
  dateFrom = '',
  dateTo = '',
  isPrintDetail = false,
  isConsolidated = false,
  isModified = false,
  isCancelled = false,
}) => {
  return (
    <Container>
      <Title>貯蔵単価金額マスタリスト</Title>
      <Form>
        <FieldContainer>
          <FieldLabel>保管場所</FieldLabel>
          <FieldInput type="text" defaultValue={savedFrom} />
          <span>~</span>
          <FieldInput type="text" defaultValue={savedTo} />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>年月コード</FieldLabel>
          <FieldInput type="text" defaultValue={dateFrom} />
          <span>~</span>  
          <FieldInput type="text" defaultValue={dateTo} />
        </FieldContainer>
        <CheckboxContainer>
          <input type="checkbox" defaultChecked={isPrintDetail} />
          <CheckboxLabel>詳細印字</CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" defaultChecked={isConsolidated} />
          <CheckboxLabel>売却単価</CheckboxLabel>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" defaultChecked={isModified} />
          <CheckboxLabel>修経単価</CheckboxLabel>  
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" defaultChecked={isCancelled} />
          <CheckboxLabel>修経単価</CheckboxLabel>
        </CheckboxContainer>
        <ButtonContainer>
          <Button type="button">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default MasterList;

// Usage example
const MasterListExample: React.FC = () => {
  return (
    <MasterList
      savedFrom="000000"
      savedTo="999999"  
      dateFrom="0000000000"
      dateTo="9999999999"
    />
  );
};