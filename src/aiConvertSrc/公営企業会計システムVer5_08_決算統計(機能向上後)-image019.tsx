import React from 'react';
import styled from '@emotion/styled';

interface SegmentInfo {
  industry: string;
  industryCode: string;
  name: string;
  segmentCode: string;
}

interface SegmentMasterData {
  [key: string]: SegmentInfo;
}

interface SegmentFormProps {
  segments: SegmentInfo[];
  onSegmentChange: (segment: SegmentInfo) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CodeInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  width: 200px;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SegmentForm: React.FC<SegmentFormProps> = ({ segments, onSegmentChange }) => {
  // Handle segment code input change
  const handleSegmentCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const segmentCode = e.target.value;
    const segment = segmentMasterData[segmentCode];

    if (segment) {
      onSegmentChange(segment);
    }
  };

  return (
    <Container>
      <h2>施設決統セグメントマスタ</h2>
      <Table>
        <thead>
          <tr>
            <th>業種・事業コード</th>
            <th>名称</th>
            <th>決統セグメントコード</th>
            <th>施設決統セグメントコード</th>
            <th>名称</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment) => (
            <tr key={segment.segmentCode}>
              <td>{segment.industryCode}</td>
              <td>{segment.industry}</td>
              <td>{segment.industryCode.slice(0, 2)}</td>
              <td>{segment.segmentCode}</td>
              <td>{segment.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CodeInput
        type="text"
        placeholder="施設決統セグメントコード"
        onChange={handleSegmentCodeChange}
      />
    </Container>
  );
};

// Sample segment master data
const segmentMasterData: SegmentMasterData = {
  '17100011': {
    industry: '下水道事業(公共下水道 なし)',
    industryCode: '171',
    name: '汚水',
    segmentCode: '17100011',
  },
  '17100012': {
    industry: '下水道事業(公共下水道 なし)',
    industryCode: '171',
    name: '雨水',
    segmentCode: '17100012',
  },
  '17100099': {
    industry: '下水道事業(公共下水道 なし)',
    industryCode: '171',
    name: 'その他',
    segmentCode: '17100099',
  },
  '17500011': {
    industry: '下水道事業(農業集落排 なし)',
    industryCode: '175',
    name: '汚水',
    segmentCode: '17500011',
  },
  '17500012': {
    industry: '下水道事業(農業集落排 なし)',
    industryCode: '175',
    name: '雨水', 
    segmentCode: '17500012',
  },
  '17500099': {  
    industry: '下水道事業(農業集落排 なし)',
    industryCode: '175',
    name: 'その他',
    segmentCode: '17500099',
  },
};

// Sample usage
const SampleSegmentForm = () => {
  const handleSegmentChange = (segment: SegmentInfo) => {
    console.log('Selected Segment:', segment);
  };

  return (
    <SegmentForm
      segments={Object.values(segmentMasterData)}
      onSegmentChange={handleSegmentChange}
    />
  );
};

export default SampleSegmentForm;