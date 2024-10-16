import React from 'react';
import styled from '@emotion/styled';

type DecisionTreeProps = {
  title: string;
  condition: string;
  trueLabel: string;
  falseLabel: string;
  trueBranch?: DecisionTreeProps;
  falseBranch?: DecisionTreeProps;
};

const TreeNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NodeLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const BranchLabel = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DecisionTree: React.FC<DecisionTreeProps> = ({
  title,
  condition,
  trueLabel,
  falseLabel,
  trueBranch,
  falseBranch,
}) => {
  return (
    <TreeNode>
      <NodeLabel>{title}</NodeLabel>
      <div>
        <BranchLabel>{condition}</BranchLabel>
        <div>
          {trueBranch ? (
            <>
              <BranchLabel>{trueLabel}</BranchLabel>
              <DecisionTree {...trueBranch} />
            </>
          ) : (
            <NodeLabel>{trueLabel}</NodeLabel>
          )}
          {falseBranch ? (
            <>
              <BranchLabel>{falseLabel}</BranchLabel>
              <DecisionTree {...falseBranch} />
            </>
          ) : (
            <NodeLabel>{falseLabel}</NodeLabel>
          )}
        </div>
      </div>
    </TreeNode>
  );
};

// Sample usage
const sampleData: DecisionTreeProps = {
  title: '決算統計',
  condition: '費用精算を集計処理',
  trueLabel: '決算統計',
  falseLabel: '費用精算表',
  trueBranch: {
    title: '決算的把握に関する調べ',
    condition: '',
    trueLabel: '',
    falseLabel: '',
  },
};

const SampleDecisionTree: React.FC = () => {
  return <DecisionTree {...sampleData} />;
};

export default SampleDecisionTree;