import React from 'react';
import styled from 'styled-components';

interface CollectionFeeInputProps {
  title: string;
  value: number;
  onChange: (value: number) => void;
}

const CollectionFeeInput: React.FC<CollectionFeeInputProps> = ({ title, value, onChange }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Container>
  );
};

interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => {
  return (
    <DateInputContainer>
      <DateLabel>{label}</DateLabel>
      <DateInputField
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={8}
      />
    </DateInputContainer>
  );
};

interface CollectionFeeDialogProps {
  startDate: string;
  endDate: string;
  collectionFee: number;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onCollectionFeeChange: (value: number) => void;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const CollectionFeeDialog: React.FC<CollectionFeeDialogProps> = ({
  startDate,
  endDate,
  collectionFee,
  onStartDateChange,
  onEndDateChange,
  onCollectionFeeChange,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <DialogContainer>
      <DateInput label="未収金計日" value={startDate} onChange={onStartDateChange} />
      <DateInput label="対応予算計日" value={endDate} onChange={onEndDateChange} />
      <CollectionFeeInput title="対象" value={collectionFee} onChange={onCollectionFeeChange} />
      
      <ButtonContainer>
        <Button onClick={onOkClick}>OK</Button>
        <Button onClick={onCancelClick}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState(''); 
  const [collectionFee, setCollectionFee] = React.useState(0);

  const handleOkClick = () => {
    console.log('OK clicked');
    // Perform actions on OK click
  };

  const handleCancelClick = () => {
    console.log('Cancel clicked');
    // Clear values or close dialog
    setStartDate('');
    setEndDate('');
    setCollectionFee(0);
  };

  return (
    <CollectionFeeDialog
      startDate={startDate}
      endDate={endDate}
      collectionFee={collectionFee}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      onCollectionFeeChange={setCollectionFee}
      onOkClick={handleOkClick}
      onCancelClick={handleCancelClick}
    />
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateLabel = styled.div`
  margin-right: 10px;
`;

const DateInputField = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default SampleUsage;