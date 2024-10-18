import React from 'react';
import styled from 'styled-components';

type CopyrightProps = {
  title: string;
  year: number;
  company: string;
  address: string;
};

const Copyright: React.FC<CopyrightProps> = ({ title, year, company, address }) => {
  return (
    <CopyrightContainer>
      <CopyrightTitle>{title}</CopyrightTitle>
      <CopyrightMessage>
        {`決算統計で必要なマスタについて、前年度の情報を引き継ぎ当年度用に作成します。
        科目情報を持つマスタは、前年度科目から今年度科目を参照し引き継ぎます。`}
      </CopyrightMessage>
      <CopyrightMessage>
        {`何度でも実行できますが、実行するたびに当年度に集計、分析した情報はすべてクリアされます。
        当年度に取り込んだ改正情報もクリアれるため、改正情報がある場合は再度取り込んでください。`}
      </CopyrightMessage>
      <CopyrightFooter>
        {`${company} ${address}`}
        <br />
        {`令和${year - 2018}年${year}年度会計 予算管理 予算科目登録権限者 全権限`}
        <br />
        {`令和0${year - 2018}年0${year - 2017}月1${year - 2000}日`}
      </CopyrightFooter>
    </CopyrightContainer>
  );
};

const CopyrightContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
`;

const CopyrightTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CopyrightMessage = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const CopyrightFooter = styled.div`
  font-size: 12px;
  text-align: right;
  color: #666;
`;

// サンプルデータを使用した使用例
const App: React.FC = () => {
  return (
    <div>
      <Copyright
        title="決算統計マスタ作成"
        year={2023}
        company="行政市下水道事業会計"
        address="令和02年度"
      />
    </div>
  );
};

export default App;