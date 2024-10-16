import React from 'react';
import styled from '@emotion/styled';

interface ScienceScheduleSettings {
  reserveDate: string;
  reason: string;
  masterDataFlag: boolean;
  yokenDataFlag: boolean;
  masterDataRadio: 'する' | 'しない';
  notifySchedule: string;
}

const Container = styled.div`
  font-family: "ＭＳ Ｐゴシック", sans-serif;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
`;

const ScienceScheduleSettings: React.FC<ScienceScheduleSettings> = ({
  reserveDate,
  reason,
  masterDataFlag,
  yokenDataFlag,
  masterDataRadio,
  notifySchedule,
}) => {
  return (
    <Container>
      <Title>料目別振替性質マスター括編集</Title>
      <Section>
        <Description>決算統計処理年度における料目別振替性質マスターを一括で更新する場合に実行します。紐づけ設定の変更を行わない場合は実行する必要はありません。</Description>
      </Section>

      <Section>
        <Description>
          「料目別振替性質紐づけツール」に取り込むマスターデータを出力します。
          振替性質紐づけ設定を出力「する」を選んだ場合、現在の紐づけ設定も併せてツールに取り込みます。
          現在の紐づけ設定を破棄して、すべての料目の紐づけ設定をし直す場合は「しない」を選択してください。
        </Description>
        <label>
          <RadioButton type="radio" checked={masterDataRadio === 'する'} />
          振替・性質分類マスタ
        </label>
        <label>
          <RadioButton type="radio" checked={yokenDataFlag} />
          予算・仕訳科目マスタ
        </label>
        <div>
          振替性質紐づけ設定を出力
          <label>
            <RadioButton type="radio" checked={masterDataRadio === 'する'} />
            する
          </label>
          <label>
            <RadioButton type="radio" checked={masterDataRadio === 'しない'} />
            しない
          </label>
        </div>
      </Section>

      <Section>
        <Description>
          「料目別振替性質紐づけツール」で作成した料目別振替性質紐づけマスターデータを取り込みます。
          現在の紐づけ設定はすべてクリアされ、取り込みファイルの設定内容で上書きされます。
        </Description>
        <Description>
          同一の料目コードについて、予算科目・仕訳科目で異なる紐づけ設定を取り込むことはできません。
          予算科目・仕訳科目で設定が異なる場合は「料目別振替性質紐づけマスタ」で入力してください。
        </Description>
        <Button>取込</Button>
      </Section>
      
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

export default ScienceScheduleSettings;

// 使用例
const Example: React.FC = () => {
  const sampleData: ScienceScheduleSettings = {
    reserveDate: '令和03年11月14日',
    reason: 'サンプルの処理',
    masterDataFlag: true,
    yokenDataFlag: true,
    masterDataRadio: 'する',
    notifySchedule: 'サンプルのスケジュール',
  };

  return <ScienceScheduleSettings {...sampleData} />;
};