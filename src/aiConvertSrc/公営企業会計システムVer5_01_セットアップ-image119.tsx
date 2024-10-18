import React from 'react';
import styled from '@emotion/styled';

type FileListProps = {
  files: Array<'行リスト' | '列リスト'>;
  onFileSelect: (file: ' 行リスト' | '列リスト') => void;
};

const FileList: React.FC<FileListProps> = ({ files, onFileSelect }) => {
  return (
    <Container>
      <Title>費用構成表ファイルリスト作成</Title>
      <Label>平成29年09月04日</Label>
      <RadioGroup>
        {files.map((file) => (
          <Radio key={file}>
            <input
              type="radio"
              id={file}
              name="file"
              value={file}
              onChange={() => onFileSelect(file)}
            />
            <RadioLabel htmlFor={file}>{file}</RadioLabel>
          </Radio>
        ))}
      </RadioGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Label = styled.p`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-left: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  min-width: 80px;
`;

// Usage example
const App: React.FC = () => {
  const handleFileSelect = (file: ' 行リスト' | '列リスト') => {
    console.log('Selected file:', file);
  };

  return (
    <FileList 
      files={['行リスト', '列リスト']} 
      onFileSelect={handleFileSelect}
    />
  );
};

export default App;