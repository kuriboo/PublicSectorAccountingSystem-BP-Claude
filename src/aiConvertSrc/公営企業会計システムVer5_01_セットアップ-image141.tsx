import React from 'react';
import styled from '@emotion/styled';

type Props = {
  /**
   * コンボボックスに表示される選択肢
   */
  options: string[];
  /**
   * 画面に表示される説明文
   */
  description?: string;
  /**
   * コンボボックスの幅
   */
  width?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: ${({ width }) => width ?? '300px'};
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100%;
  padding: 4px;
  font-size: 16px;
`;

/**
 * 指定金融機関登録マスタリストのコンポーネント
 */
const FinancialInstitutionRegistration: React.FC<Props> = ({
  options,
  description,
  width,
}) => {
  return (
    <Container width={width}>
      {description && <Description>{description}</Description>}
      <Select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  );
};

// サンプルデータを使用した使用例
const SampleUsage: React.FC = () => {
  const sampleOptions = ['グループ1 & 2', 'グループ3', 'グループ4'];
  const sampleDescription = '適用開始年月日順で指定金融機関の種別を出力します。';

  return (
    <FinancialInstitutionRegistration
      options={sampleOptions}
      description={sampleDescription}
    />
  );
};

export default FinancialInstitutionRegistration;