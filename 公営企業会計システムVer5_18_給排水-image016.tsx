import React from 'react';
import styled from '@emotion/styled';

type WaterMeterRegistrationProps = {
  meterNumber: string;
  meterType: string;
  usage: number;
  receiptNumber: string;
  registrationDate: string;
  constructionDate: string;
  remark: string;
  installationLocation: string;
  receptionNumber: string;
  workerName: string;
  phoneticName: string;
  phoneticNameConfirm: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LeftColumn = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const RightColumn = styled.div``;

const Label = styled.label`
  display: inline-block;
  width: 120px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const WaterMeterRegistration: React.FC<WaterMeterRegistrationProps> = ({
  meterNumber,
  meterType,
  usage,
  receiptNumber,
  registrationDate,
  constructionDate,
  remark,
  installationLocation,
  receptionNumber,
  workerName,
  phoneticName,
  phoneticNameConfirm,
  postalCode,
  address,
  phoneNumber,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <MainContainer>
      <LeftColumn>
        <div>
          <Label>Meter Number:</Label>
          <Input type="text" value={meterNumber} readOnly />
        </div>
        <div>
          <Label>Meter Type:</Label>
          <Select value={meterType}>
            <option value="">Select type</option>
            {/* Add meter type options */}
          </Select>
        </div>
        <div>
          <Label>Usage:</Label>
          <Input type="number" value={usage} readOnly />
        </div>
        <div>
          <Label>Receipt Number:</Label>
          <Input type="text" value={receiptNumber} readOnly />
        </div>
        <div>
          <Label>Registration Date:</Label>
          <Input type="date" value={registrationDate} />
        </div>
        <div>
          <Label>Construction Date:</Label>
          <Input type="date" value={constructionDate} />
        </div>
        <div>
          <Label>Remark:</Label>
          <Input type="text" value={remark} />
        </div>
      </LeftColumn>
      <RightColumn>
        <div>
          <Label>Installation Location:</Label>
          <Select value={installationLocation}>
            <option value="">Select location</option>
            {/* Add installation location options */}
          </Select>
        </div>
        <div>
          <Label>Reception Number:</Label>
          <Input type="text" value={receptionNumber} />
        </div>
        <div>
          <Label>Worker Name:</Label>
          <Input type="text" value={workerName} />
        </div>
        <div>
          <Label>Phonetic Name:</Label>
          <Input type="text" value={phoneticName} />
        </div>
        <div>
          <Label>Phonetic Name Confirm:</Label>
          <Input type="text" value={phoneticNameConfirm} />
        </div>
        <div>
          <Label>Postal Code:</Label>
          <Input type="text" value={postalCode} />
        </div>
        <div>
          <Label>Address:</Label>
          <Input type="text" value={address} />
        </div>
        <div>
          <Label>Phone Number:</Label>
          <Input type="tel" value={phoneNumber} />
        </div>
      </RightColumn>
      <ButtonContainer>
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onClear}>Clear</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

// Sample usage
const SampleWaterMeterRegistration: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation
  };

  const handleClear = () => {
    // Handle form clearing
  };

  return (
    <WaterMeterRegistration
      meterNumber="000-11"
      meterType="Type A"
      usage={1234}
      receiptNumber="abc123"
      registrationDate="2022-01-01"
      constructionDate="2022-01-01"
      remark="Sample remark"
      installationLocation="Location A"
      receptionNumber="1234-5678"
      workerName="John Doe"
      phoneticName="ジョン ドウ"
      phoneticNameConfirm="ジョン ドウ"
      postalCode="123-4567"
      address="Sample address"
      phoneNumber="123-456-7890"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default WaterMeterRegistration;