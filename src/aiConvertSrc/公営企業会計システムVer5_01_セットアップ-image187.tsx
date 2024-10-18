import React from 'react';
import styled from '@emotion/styled';

type DistrictMaster = {
  code: number;
  name: string;
}

type Props = {
  districtCode: number;
  districtName: string;
  districts: DistrictMaster[];
  onDistrictChange: (district: DistrictMaster) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DistrictCodeInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const DistrictNameInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const DistrictList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DistrictItem = styled.li<{ selected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#ddd' : 'transparent')};

  &:hover {
    background-color: #eee;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const DistrictMaster: React.FC<Props> = ({
  districtCode,
  districtName,
  districts,
  onDistrictChange,
  onCancel,
  onSubmit,
}) => {
  const selectedDistrict = districts.find((district) => district.code === districtCode);

  return (
    <Container>
      <Title>区分マスタ</Title>
      <DistrictCodeInput type="text" value={districtCode} readOnly />
      <DistrictNameInput
        type="text"
        value={districtName}
        onChange={(e) => onDistrictChange({ code: districtCode, name: e.target.value })}
      />
      <DistrictList>
        {districts.map((district) => (
          <DistrictItem
            key={district.code}
            selected={district.code === selectedDistrict?.code}
            onClick={() => onDistrictChange(district)}
          >
            {district.name}
          </DistrictItem>
        ))}
      </DistrictList>
      <ButtonContainer>
        <Button onClick={onSubmit}>登録</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};



// Usage example:
const districts: DistrictMaster[] = [
  { code: 0, name: '職員給与費以外' },
  { code: 1, name: '3条人件費' },
  { code: 2, name: '3条人件費以外' },
  { code: 3, name: '4条人件費' },
  { code: 4, name: '4条人件費以外' },
  { code: 5, name: '予備費' },
  { code: 6, name: '交際費' },
];

const App: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = React.useState<DistrictMaster | null>(null);

  const handleDistrictChange = (district: DistrictMaster) => {
    setSelectedDistrict(district);
  };

  const handleCancel = () => {
    setSelectedDistrict(null);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Selected district:', selectedDistrict);
  };

  return (
    <DistrictMaster
      districtCode={selectedDistrict?.code ?? 5}
      districtName={selectedDistrict?.name ?? '流用不可'}
      districts={districts}
      onDistrictChange={handleDistrictChange}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};

export default App;