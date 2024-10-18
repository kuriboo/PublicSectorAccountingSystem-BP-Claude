import React from 'react';
import styled from '@emotion/styled';

// 業者情報の型定義
type VendorInfo = {
  name: string;
  jobTitle: string;
  workplace: number;
  internalProcess: number;
  outsourcing: number;
  iso: number;
};

// 注記情報の型定義
type NoteInfo = {
  note001: string;
  noteTestEquipment: string;
  isoSeries: string;
};

// コンポーネントのプロパティの型定義
type VendorInfoProps = {
  vendorCode: string;
  vendorInfo: VendorInfo;
  noteInfo: NoteInfo;
};

// 業者情報のコンポーネント
const VendorInfoComponent: React.FC<VendorInfoProps> = ({ vendorCode, vendorInfo, noteInfo }) => {
  return (
    <Container>
      <Title>審査員記/注記コード</Title>
      <VendorCodeArea>
        <VendorCodeLabel>業者名</VendorCodeLabel>
        <VendorCode>{vendorCode}</VendorCode>
        <VendorName>{vendorInfo.name}</VendorName>
      </VendorCodeArea>
      <JobArea>
        <JobTitle>職員数</JobTitle>
        <JobContent>
          <JobItem>
            <JobLabel>一般継手記水管技能者</JobLabel>
            <JobValue>{vendorInfo.workplace}</JobValue>
          </JobItem>
          <JobItem>
            <JobLabel>耐震継手記水管技能者</JobLabel>
            <JobValue>{vendorInfo.internalProcess}</JobValue>
          </JobItem>
          <JobItem>
            <JobLabel>工事長・ISO</JobLabel>
            <JobValue>{vendorInfo.outsourcing}</JobValue>
          </JobItem>
        </JobContent>
      </JobArea>
      <NoteArea>
        <NoteTitle>業者ｶﾅ ｷﾞｮｳｾｲ(ｱﾝﾅｲ)</NoteTitle>
        <NoteContent>
          <NoteLabel>注記001</NoteLabel>
          <NoteValue>{noteInfo.note001}</NoteValue>
        </NoteContent>
        <NoteContent>
          <NoteLabel>注記名称</NoteLabel>
          <NoteValue>{noteInfo.noteTestEquipment}</NoteValue>
        </NoteContent>
        <NoteContent>
          <NoteLabel>注記テスト××縁</NoteLabel>
          <NoteValue>{noteInfo.isoSeries}</NoteValue>
        </NoteContent>
      </NoteArea>
      <ButtonArea>
        <CancelButton>キャンセル</CancelButton>
      </ButtonArea>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const VendorCodeArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const VendorCodeLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const VendorCode = styled.span`
  margin-right: 8px;
`;

const VendorName = styled.span`
  color: #888;
`;

const JobArea = styled.div`
  margin-bottom: 16px;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const JobContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const JobLabel = styled.span`
  flex: 1;
`;

const JobValue = styled.span`
  font-weight: bold;
`;

const NoteArea = styled.div`
  margin-bottom: 16px;
`;

const NoteTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NoteContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const NoteLabel = styled.span`
  flex: 1;
`;

const NoteValue = styled.span`
  font-weight: bold;
`;

const ButtonArea = styled.div`
  text-align: right;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleVendorInfo: VendorInfo = {
    name: 'ぎょうせい 理解',
    jobTitle: '',
    workplace: 10,
    internalProcess: 8,
    outsourcing: 2,
    iso: 0,
  };

  const sampleNoteInfo: NoteInfo = {
    note001: '注記001',
    noteTestEquipment: '注記名称テスト××縁',
    isoSeries: 'ISO9000series',
  };

  return (
    <VendorInfoComponent
      vendorCode="00000100003"
      vendorInfo={sampleVendorInfo}
      noteInfo={sampleNoteInfo}
    />
  );
};

export default App;