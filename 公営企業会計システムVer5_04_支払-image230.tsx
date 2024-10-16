import React from 'react';
import styled from '@emotion/styled';

type DivisionData = {
  id: string;
  name: string;
};

type Props = {
  divisions: DivisionData[];
  onChange: (selectedDivision: DivisionData) => void;
};

const DivisionSelect: React.FC<Props> = ({ divisions, onChange }) => {
  // 選択された部署の状態を管理
  const [selectedDivision, setSelectedDivision] = React.useState<DivisionData | null>(null);

  // 部署が選択された時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const divisionId = event.target.value;
    const division = divisions.find((d) => d.id === divisionId);
    if (division) {
      setSelectedDivision(division);
      onChange(division);
    }
  };

  return (
    <SelectContainer>
      <Select value={selectedDivision?.id ?? ''} onChange={handleChange}>
        <Option value="" disabled>
          決裁区分名称
        </Option>
        {divisions.map((division) => (
          <Option key={division.id} value={division.id}>
            {division.name}
          </Option>
        ))}
      </Select>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: '▼';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const Select = styled.select`
  appearance: none;
  width: 100%;
  padding: 8px 32px 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgb(0 112 243 / 20%);
  }
`;

const Option = styled.option`
  color: #333;
`;

// Usage example
const divisions: DivisionData[] = [
  { id: '01', name: '管理部 予物' },
  { id: '02', name: '部長 予物' },
  { id: '03', name: '経理課長予物' },
  { id: '04', name: '所管課長予物' },
  { id: '06', name: '管理部長 負物' },
  { id: '08', name: '部長 負物' },
];

const ExampleUsage: React.FC = () => {
  const handleDivisionChange = (selectedDivision: DivisionData) => {
    console.log('Selected division:', selectedDivision);
  };

  return (
    <div>
      <h2>決裁区分検索</h2>
      <DivisionSelect divisions={divisions} onChange={handleDivisionChange} />
    </div>
  );
};

export default ExampleUsage;