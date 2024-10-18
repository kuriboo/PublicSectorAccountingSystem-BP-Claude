import React from 'react';
import styled from 'styled-components';

// 予約データの型定義
type Reservation = {
  division: string;
  name: string;
  phonetic: string;
  address: string;
};

// コンポーネントのプロパティの型定義
type ReservationMasterProps = {
  reservation?: Reservation;
  onSave?: () => void;
  onClear?: () => void;
  onClose?: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const Select = styled.select`
  flex: 1;
  padding: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネントの実装
const ReservationMaster: React.FC<ReservationMasterProps> = ({
  reservation = {
    division: '',
    name: '',
    phonetic: '',
    address: '',
  },
  onSave,
  onClear,
  onClose,
}) => {
  // コンポーネントの状態管理
  const [division, setDivision] = React.useState(reservation.division);
  const [name, setName] = React.useState(reservation.name);
  const [phonetic, setPhonetic] = React.useState(reservation.phonetic);
  const [address, setAddress] = React.useState(reservation.address);

  // 保存ボタンのクリックハンドラ
  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  // クリアボタンのクリックハンドラ
  const handleClear = () => {
    setDivision('');
    setName('');
    setPhonetic('');
    setAddress('');

    if (onClear) {
      onClear();
    }
  };

  // 閉じるボタンのクリックハンドラ
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Container>
      <Title>Public water and sewerage system agreement business registration</Title>
      <Row>
        <Label>Division:</Label>
        <Select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        >
          <option value="">Select</option>
          <option value="個人">Individual</option>
          <option value="法人">Corporation</option>
        </Select>
      </Row>
      <Row>
        <Label>Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Row>
      <Row>
        <Label>Phonetic:</Label>
        <Input
          type="text"
          value={phonetic}
          onChange={(e) => setPhonetic(e.target.value)}
        />
      </Row>
      <Row>
        <Label>Address:</Label>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Row>
      <ButtonGroup>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleClose}>Close</Button>
      </ButtonGroup>
    </Container>
  );
};



// サンプルデータを使用した表示用コンポーネント
const SampleReservation: React.FC = () => {
  const sampleData: Reservation = {
    division: '個人',
    name: '山田太郎',
    phonetic: 'やまだたろう',
    address: '東京都渋谷区',
  };

  return (
    <div>
      <h1>Reservation Master Sample</h1>
      <ReservationMaster reservation={sampleData} />
    </div>
  );
};

export default SampleReservation;