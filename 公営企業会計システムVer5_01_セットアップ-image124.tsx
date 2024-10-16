import React from 'react';
import styled from '@emotion/styled';

type Unit = '登録' | '訂正' | '削除';

interface MasterMaintenanceProps {
  units: Unit[];
  onUnitClick: (unit: Unit) => void;
  onCodeChange: (code: string) => void;
  onNameChange: (name: string) => void;
  onClear: () => void;
  onDelete: () => void;
  onSubmit: () => void;
  onCancel: () => void;
  onEnd: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UnitButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const UnitButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({
  units,
  onUnitClick,
  onCodeChange,
  onNameChange,
  onClear,
  onDelete,
  onSubmit,
  onCancel,
  onEnd,
}) => {
  const [selectedUnit, setSelectedUnit] = React.useState<Unit | null>(null);

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(unit);
    onUnitClick(unit);
  };

  return (
    <Container>
      <UnitButtons>
        {units.map((unit) => (
          <UnitButton
            key={unit}
            active={selectedUnit === unit}
            onClick={() => handleUnitClick(unit)}
          >
            {unit}
          </UnitButton>
        ))}
      </UnitButtons>
      <InfoContainer>
        <InfoGroup>
          <Label>コード</Label>
          <Input type="text" onChange={(e) => onCodeChange(e.target.value)} />
        </InfoGroup>
        <InfoGroup>
          <Label>名称</Label>
          <Input type="text" onChange={(e) => onNameChange(e.target.value)} />
        </InfoGroup>
      </InfoContainer>
      <ButtonsContainer>
        <Button onClick={onClear}>明細編集</Button>
        <Button onClick={onDelete}>削除</Button>
        <Button onClick={onSubmit}>実行</Button>
        <Button onClick={onCancel}>次データ</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonsContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const units: Unit[] = ['登録', '訂正', '削除'];

  const handleUnitClick = (unit: Unit) => {
    console.log('Selected unit:', unit);
  };

  const handleCodeChange = (code: string) => {
    console.log('Code:', code);
  };

  const handleNameChange = (name: string) => {
    console.log('Name:', name);
  };

  const handleClear = () => {
    console.log('明細編集 clicked');
  };

  const handleDelete = () => {
    console.log('削除 clicked');
  };

  const handleSubmit = () => {
    console.log('実行 clicked');
  };

  const handleCancel = () => {
    console.log('次データ clicked');
  };

  const handleEnd = () => {
    console.log('終了 clicked');
  };

  return (
    <MasterMaintenance
      units={units}
      onUnitClick={handleUnitClick}
      onCodeChange={handleCodeChange}
      onNameChange={handleNameChange}
      onClear={handleClear}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onEnd={handleEnd}
    />
  );
};

export default App;