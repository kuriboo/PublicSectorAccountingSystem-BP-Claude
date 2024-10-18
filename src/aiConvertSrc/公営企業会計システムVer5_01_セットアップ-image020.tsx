import React from 'react';
import styled from 'styled-components';

// 予算科目のデータ型定義
type SubjectItem = {
  code: string;
  name: string;
};

// 予算科目のプロパティ型定義
type SubjectsProps = {
  subjects: SubjectItem[];
  onSubjectClick: (code: string) => void;
};

// 予算科目のコンポーネント
const Subjects: React.FC<SubjectsProps> = ({ subjects, onSubjectClick }) => {
  return (
    <SubjectsWrapper>
      {subjects.map((subject) => (
        <SubjectButton key={subject.code} onClick={() => onSubjectClick(subject.code)}>
          {subject.name}
        </SubjectButton>
      ))}
    </SubjectsWrapper>
  );
};

// スタイリング
const SubjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SubjectButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// サンプルデータ
const sampleSubjects: SubjectItem[] = [
  { code: '01', name: '議会費' },
  { code: '02', name: '総務費' },
  { code: '03', name: '民生費' },
  { code: '04', name: '衛生費' },
  // ...その他の科目データ
];

// 使用例
const App: React.FC = () => {
  const handleSubjectClick = (code: string) => {
    console.log(`Clicked subject code: ${code}`);
    // 科目がクリックされた時の処理を実装
  };

  return (
    <div>
      <h2>予算科目</h2>
      <Subjects subjects={sampleSubjects} onSubjectClick={handleSubjectClick} />
    </div>
  );
};

export default App;