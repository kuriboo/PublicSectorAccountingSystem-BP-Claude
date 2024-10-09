import React from 'react';

interface Course {
  name: string;
  dayOfWeek: string;
  instructor: string;
  startTime: string;
  endTime: string;
  absenceDates: string;
  lateDates: string;
  note: string;
}

interface CourseTableProps {
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">科目</th>
          <th className="border border-gray-400 px-4 py-2">曜日</th>
          <th className="border border-gray-400 px-4 py-2">講師</th>
          <th className="border border-gray-400 px-4 py-2">開始時間</th>
          <th className="border border-gray-400 px-4 py-2">終了時間</th>
          <th className="border border-gray-400 px-4 py-2">欠席日</th>
          <th className="border border-gray-400 px-4 py-2">遅刻日</th>
          <th className="border border-gray-400 px-4 py-2">備考</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2">{course.name || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.dayOfWeek || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.instructor || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.startTime || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.endTime || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.absenceDates || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.lateDates || '-'}</td>
            <td className="border border-gray-400 px-4 py-2">{course.note || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Usage example
const courses: Course[] = [
  {
    name: '英語',
    dayOfWeek: '月曜日',
    instructor: '鈴木先生',
    startTime: '10:00',
    endTime: '12:00',
    absenceDates: '2010/03/27',
    lateDates: '',
    note: '教科書持参',
  },
  // Add more courses as needed
];

const CourseTableExample: React.FC = () => {
  return (
    <div>
      <h2>Course Table Example</h2>
      <CourseTable courses={courses} />
    </div>
  );
};

export default CourseTableExample;