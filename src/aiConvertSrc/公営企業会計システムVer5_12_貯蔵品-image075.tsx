import React from 'react';
import styled from '@emotion/styled';

type PublicProcessingProps = {
  processingFee: number;
  processingFeeNote: string;
};

const PublicProcessing: React.FC<PublicProcessingProps> = ({
  processingFee,
  processingFeeNote,
}) => {
  return (
    <Container>
      <Title>棚卸準備処理</Title>
      <InfoText>
        前回棚卸時の棚卸高数をクリアします。
        <br />
        (注)本処理は必ず棚卸結果入力の前に行ってください。
      </InfoText>
      <ProcessingFeeContainer>
        <ProcessingFeeLabel>保管場所</ProcessingFeeLabel>
        <ProcessingFee>{processingFee.toLocaleString()}</ProcessingFee>
        <ProcessingFeeNoteLabel>保管場所A</ProcessingFeeNoteLabel>
      </ProcessingFeeContainer>
      <ButtonContainer>
        <CancelButton>キャンセル</CancelButton>
        <ConfirmButton>OK</ConfirmButton>
      </ButtonContainer>
    </Container>
  );
};

// Sample data for displaying the component
const sampleData: PublicProcessingProps = {
  processingFee: 100000,
  processingFeeNote: '保管場所A',
};

const SampleUsage: React.FC = () => {
  return (
    <PublicProcessing
      processingFee={sampleData.processingFee}
      processingFeeNote={sampleData.processingFeeNote}
    />
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

const InfoText = styled.p`
  margin-bottom: 20px;
`;

const ProcessingFeeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProcessingFeeLabel = styled.span`
  margin-right: 10px;
`;

const ProcessingFee = styled.span`
  font-weight: bold;
`;

const ProcessingFeeNoteLabel = styled.span`
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  margin-right: 10px;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

export default PublicProcessing;