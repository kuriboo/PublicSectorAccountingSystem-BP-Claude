import React from 'react';
import styled from '@emotion/styled';

type CodeType = 'department' | 'person';

interface Code {
  code: string;
  name: string;
}

interface CodeSelectorProps {
  title: string;
  codes: Code[];
  type: CodeType;
}

const CodeSelector: React.FC<CodeSelectorProps> = ({ title, codes, type }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <RadioGroup>
        {codes.map((code) => (
          <Label key={code.code}>
            <Radio type="radio" name={type} value={code.code} />
            {code.name}
          </Label>
        ))}
      </RadioGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Radio = styled.input`
  margin-right: 8px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const departmentCodes: Code[] = [
    { code: '001', name: '取水部門' },
    { code: '005', name: '送水部門' },
  ];

  const personCodes: Code[] = [
    { code: '01', name: '部門' },
    { code: '02', name: '所属' },
  ];

  return (
    <div>
      <CodeSelector
        title="対象コード"
        codes={departmentCodes}
        type="department"
      />
      <CodeSelector title="変換前" codes={personCodes} type="person" />
    </div>
  );
};

export default CodeSelector;