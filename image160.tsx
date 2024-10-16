以下は、Next.js + TypeScriptで実装した画像のコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface TitleMasterProps {
  titleCode: string;
  titleName: string;
  titleKana: string;
  printName: string;
  firstNameCode: string;
  lastNameCode: string;
  deceasedFlg: boolean;
  editorFlg1: boolean;
  editorFlg2: string;
  editorFlg3: string;
  titleChangeType: '改姓様式' | string;
  printingSchedule: string;
  printingScheduleDate1: string;
  printingScheduleDate2: string;
  titleChangeOfficialDate: string;
  titleChangeDate1: string;
  titleChangeDate2: string;
  sealImprintFile1: string;
  sealImprintFile2: string;
  comment: string;
}

// スタイル定義
const Container = styled.div`
  font-family: 'メイリオ', 'Meiryo', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 16px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

// コンポーネントの実装
const TitleMaster: React.FC<TitleMasterProps> = ({
  titleCode,
  titleName,
  titleKana,
  printName,
  firstNameCode,
  lastNameCode,
  deceasedFlg,
  editorFlg1,
  editorFlg2,
  editorFlg3,
  titleChangeType,
  printingSchedule,
  printingScheduleDate1,
  printingScheduleDate2,
  titleChangeOfficialDate,
  titleChangeDate1,
  titleChangeDate2,
  sealImprintFile1,
  sealImprintFile2,
  comment,
}) => {
  return (
    <Container>
      <Title>帳票タイトルマスタ</Title>
      <FormGroup>
        <Label>タイトル</Label>
        <Input type="text" value={titleCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>帳票タイトル</Label>
        <Input type="text" value={titleName} />
      </FormGroup>
      <FormGroup>
        <Label>管理者氏名</Label>
        <Input type="text" value={titleKana} />
      </FormGroup>
      <FormGroup>
        <Label>領収者</Label>
        <Input type="text" value={printName} />
      </FormGroup>
      <FormGroup>
        <Label>領収日印字名称</Label>
        <Input type="text" value={firstNameCode} />
      </FormGroup>
      <FormGroup>
        <Label>検収者</Label>
        <Input type="text" value={lastNameCode} />
      </FormGroup>
      <FormGroup>
        <Label>決裁コード</Label>
        <Select defaultValue={titleChangeType}>
          <option value="改姓様式">改姓様式</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>編集内容1</Label>
        <Checkbox checked={editorFlg1} />
        <span>印字する</span>
      </FormGroup>
      <FormGroup>
        <Label>編集設定日1</Label>
        <Input type="text" value={printingScheduleDate1} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定日1印字名称</Label>
        <Input type="text" value={titleChangeOfficialDate} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定金額印字名称</Label>
        <Input type="text" value={titleChangeDate1} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定金額印字名称2</Label>
        <Input type="text" value={sealImprintFile1} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定金額印字名称3</Label>
        <Input type="text" value={titleChangeDate2} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定サブタイトル1</Label>
        <Input type="text" value={sealImprintFile2} />
      </FormGroup>
      <FormGroup>
        <Label>編集設定サブタイトル2</Label>
        <Input type="text" value={comment} />
      </FormGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const TitleMasterExample: React.FC = () => {
  const sampleData: TitleMasterProps = {
    titleCode: 'MAP0060',
    titleName: '関連帳票見出し（一般）',
    titleKana: '',
    printName: '',
    firstNameCode: '確収日',
    lastNameCode: '検収者',
    deceasedFlg: false,
    editorFlg1: true,
    editorFlg2: '',
    editorFlg3: '',
    titleChangeType: '改姓様式',
    printingSchedule: '',
    printingScheduleDate1: '決定処理日',
    printingScheduleDate2: '',
    titleChangeOfficialDate: '上記のとおり確収いたしました。',
    titleChangeDate1: '',
    titleChangeDate2: '',
    sealImprintFile1: '確収金額',
    sealImprintFile2: '本社会計',
    comment: '',
  };

  return <TitleMaster {...sampleData} />;
};

export default TitleMaster;