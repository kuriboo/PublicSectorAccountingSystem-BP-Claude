import React from 'react';
import styled from 'styled-components';

// 作成日と会計区分のプロパティ型定義
type DateAccountTypeProps = {
  date: string;
  accountType: '総務課' | '予算・会計担当' | 'ぎょうせい太郎';
};

// ラジオボタンのプロパティ型定義
type RadioProps = {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

// 会計別固定資産明細表作成コンポーネント
const AssetDetailForm: React.FC<DateAccountTypeProps> = ({ date, accountType }) => {
  // 作表区分の状態管理
  const [reportType, setReportType] = React.useState('前');

  // 書式区分の状態管理 
  const [formatType, setFormatType] = React.useState('有形');

  // 範囲指定の状態管理
  const [rangeType, setRangeType] = React.useState('予測用');

  // ラジオボタンコンポーネント
  const RadioButton: React.FC<RadioProps> = ({ name, options, value, onChange }) => (
    <>
      {options.map((option) => (
        <Label key={option}>
          <Input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          {option}
        </Label>
      ))}
    </>
  );

  return (
    <Wrapper>
      <Title>会計別固定資産産明細表作成</Title>
      <DateText>作成年月日：{date}</DateText>
      <AccountTypeText>行政市水道事業会計：{accountType}</AccountTypeText>

      <SectionTitle>作表区分</SectionTitle>
      <RadioButton
        name="reportType"
        options={['前', '細節', '明細']}
        value={reportType}
        onChange={setReportType}
      />

      <SectionTitle>書式区分</SectionTitle>
      <RadioButton name="formatType" options={['有形', '無形']} value={formatType} onChange={setFormatType} />

      <SectionTitle>範囲指定</SectionTitle>
      <RangeWrapper>
        <div>会計区分コード</div>
        <div>
          <RangeInput defaultValue="00" /> ～ <RangeInput defaultValue="00" />
        </div>
      </RangeWrapper>
      <RadioButton
        name="rangeType"
        options={['予測用', '予測用']}
        value={rangeType}
        onChange={setRangeType}
      />

      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

// サンプルデータを使った使用例
const App: React.FC = () => {
  return (
    <AssetDetailForm
      date="平成29年09月12日"
      accountType="総務課"
    />
  );
};

export default App;

// スタイリング
const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateText = styled.div`
  margin-bottom: 4px;
`;

const AccountTypeText = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 16px;
`;

const Input = styled.input`
  margin-right: 4px;
`;

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > div {
    margin-right: 8px;
  }
`;

const RangeInput = styled.input`
  width: 40px;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
`;