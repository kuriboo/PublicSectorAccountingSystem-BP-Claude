import React from 'react';
import styled from 'styled-components';

type ReservationInfoProps = {
  scheduleCode: string;
  reservationYear: string;
  reservationBranch: string;
  reservationCode: string;
  reservationAmount: string;
  reservationType: '会議' | '訂正' | '削除';
  yoyakuKubun: string;
  selectedPrefecture: string;
};

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  scheduleCode,
  reservationYear,
  reservationBranch,
  reservationCode,
  reservationAmount,
  reservationType,
  yoyakuKubun,
  selectedPrefecture,
}) => {
  // 予約情報区分のオプション
  const yoyakuKubunOptions = [
    { value: '01', label: 'S未収益還付用還税科目' },
    { value: '02', label: 'S未費用支払用還税科目' },
    { value: '03', label: 'S未予備還科目' },
    { value: '04', label: '4番予備還科目' },
  ];

  return (
    <Container>
      <Title>予算明細性質</Title>
      <ButtonGroup>
        <Button active={reservationType === '会議'}>会議</Button>
        <Button active={reservationType === '訂正'}>訂正</Button>
        <Button active={reservationType === '削除'}>削除</Button>
      </ButtonGroup>
      <FormGroup>
        <Label>会計年度</Label>
        <Input value={reservationYear} readOnly />
        <Label>年度</Label>
      </FormGroup>
      <FormGroup>
        <Label>予算性質区分</Label>
        <Select value={yoyakuKubun}>
          {yoyakuKubunOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>予算節</Label>
        <Input value={reservationBranch} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>予算細節コード</Label>
        <Input value={reservationCode} readOnly />
        <Label>予算細節名称</Label>
        <Input value={reservationAmount} readOnly />
      </FormGroup>
      <PrefectureText>
        科目検索：<strong>{selectedPrefecture}</strong>
      </PrefectureText>
      <ButtonContainer>
        <SubmitButton>OK</SubmitButton>
        <SubmitButton>クリア</SubmitButton>
        <SubmitButton>終了</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <ReservationInfo
      scheduleCode="01"
      reservationYear="0001"
      reservationBranch="0001"
      reservationCode="0001"  
      reservationAmount="消費税還付金"
      reservationType="会議"
      yoyakuKubun="01"
      selectedPrefecture="S未収益還付用還税科目"
    />
  );
};

// スタイリング用のStyled Componentsを定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: none;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const PrefectureText = styled.p`
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default SampleUsage;