import React from 'react';
import styled from '@emotion/styled';

// 調定と賦課一覧表作成のプロパティ型定義
type AdjustmentAndLevyListProps = {
  years: number;
  fromValue: string;
  toValue: string;
  directorName: string;
  fromDate: string;
  toDate: string;
  isPublicationPeriodUncertain: boolean;
};

// コンポーネントのスタイリング
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 300px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 調定と賦課一覧表作成コンポーネント
const AdjustmentAndLevyList: React.FC<AdjustmentAndLevyListProps> = ({
  years = 0,
  fromValue = '',
  toValue = '',
  directorName = '',
  fromDate = '',
  toDate = '',
  isPublicationPeriodUncertain = false,
}) => {
  return (
    <Container>
      <Title>調定と賦課一覧表作成</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <span>平成{years}年度</span>
      </FormGroup>
      <FormGroup>
        <Label>調定額</Label>
        <Input type="text" value={fromValue} readOnly /> ～ <Input type="text" value={toValue} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>賦課年</Label>
        <Input type="text" value={directorName} readOnly /> ～ <Input type="text" value={directorName} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>調定日</Label>
        <Input type="text" value={fromDate} readOnly /> ～ <Input type="text" value={toDate} readOnly />
        <div>
          <Checkbox type="checkbox" checked={isPublicationPeriodUncertain} readOnly />
          <span>調定期間無もるむ</span>
        </div>
      </FormGroup>
      <ButtonGroup>
        <Button>ＯＫ</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};



// 使用例
const UsageExample = () => {
  return (
    <AdjustmentAndLevyList
      years={28}
      fromValue="000000"
      toValue="999999"
      directorName="0000000000"
      fromDate="平成29年08月01日"
      toDate="平成30年08月31日"
      isPublicationPeriodUncertain={false}
    />
  );
};

export default UsageExample;