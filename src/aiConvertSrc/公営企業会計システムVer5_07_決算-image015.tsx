import React from 'react';
import styled from '@emotion/styled';

interface CopyConfirmationDialogProps {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onCopy: () => void;
}

const CopyConfirmationDialog: React.FC<CopyConfirmationDialogProps> = ({
  title,
  message,
  isOpen,
  onClose,
  onCopy,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <DialogContainer>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonContainer>
          <Button onClick={onCopy}>コピー</Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ButtonContainer>
      </DialogContainer>
    </Overlay>
  );
};

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCopy = () => {
    // Perform copy operation
    console.log('Copied!');
    closeDialog();
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      <CopyConfirmationDialog
        title="収益費用明細書各種コピー"
        message="指定した処理年度の収益費用明細書の名称を複写処理します。"
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onCopy={handleCopy}
      />
    </div>
  );
};

export default App;