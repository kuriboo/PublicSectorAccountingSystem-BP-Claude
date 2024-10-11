import React from 'react';
import styled from 'styled-components';

type WorkDetailProps = {
  company: string;
  period: string;
  documentNumber: string[];
  workContent: string;
  specialNotes: string;
  notes: string[];
};

const WorkDetail: React.FC<WorkDetailProps> = ({
  company,
  period,
  documentNumber,
  workContent,
  specialNotes,
  notes,
}) => {
  return (
    <Container>
      <Title>指名通知書</Title>
      <Row>
        <Label>会社</Label>
        <Value>{company}</Value>
      </Row>
      <Row>
        <Label>作業年月日</Label>
        <Value>{period}</Value>
      </Row>
      <Row>
        <Label>文書番号</Label>
        <Value>
          {documentNumber.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </Value>
      </Row>
      <Row>
        <Label>工事</Label>
        <Value>{workContent}</Value>
      </Row>
      <Row>
        <Label>注記</Label>
        <Value>{specialNotes}</Value>
      </Row>
      <NotesSection>
        <NotesTitle>備考</NotesTitle>
        <NotesList>
          {notes.map((note, index) => (
            <NotesItem key={index}>{note}</NotesItem>
          ))}
        </NotesList>
      </NotesSection>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
  width: 120px;
`;

const Value = styled.div`
  flex: 1;
`;

const NotesSection = styled.div`
  margin-top: 16px;
`;

const NotesTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NotesList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const NotesItem = styled.li`
  margin-bottom: 4px;
`;

// Usage example
const App: React.FC = () => {
  const workDetailData: WorkDetailProps = {
    company: '株式会社〇〇',
    period: '平成29年09月12日',
    documentNumber: [
      '429100013:2017-010-42910001-SM1',
      '429100023:2017-010-42910002-SM1',
      '429100063:月次注意事',
    ],
    workContent: '水槽第201 70058号',
    specialNotes: '市上下水道事業管理者',
    notes: [
      '「記」により、建設工事の指名競争入札を行いますから、書類を通知します。',
      '「記」',
      '文章マスタ位置No.1通知文4',
      '文章マスタ位置No.4通知文5',
      '文章マスタ位置No.4通知文6',
      '文章マスタ位置No.4通知文7',
      '① 契約保証金の納付 ② 契約保証金に代わる担保の',
      '③ 金銭保証人 ④ 履行保証保険 ⑤ 公共工事履行',
      'ついては、法律の定定に遵守していただくことになります。',
    ],
  };

  return (
    <div>
      <WorkDetail {...workDetailData} />
    </div>
  );
};

export default App;