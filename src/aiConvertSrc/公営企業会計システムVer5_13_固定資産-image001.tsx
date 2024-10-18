import React from 'react';
import styled from '@emotion/styled';

type WaterBillFormProps = {
  /** 登録区分 */
  registrationCategory: '登録' | '訂正' | '削除';
  /** 管理者番号 */
  managerNumber?: string;
  /** 納期 */
  paymentDueDate?: string;
  /** 検針年月日 */
  meterReadingDate?: string;
  /** 取得年月日 */
  acquisitionDate?: string;
  /** 金額区分 */
  amountCategory: string;
  /** 施工年度 */
  constructionYear?: string;
  /** 竣工年月日 */
  completionDate?: string;
  /** 取得金額 */
  acquisitionAmount?: number;
  /** 債権者 */
  creditor?: string;
  /** 債務者 */
  debtor?: string;
  /** 明細データ */
  statementData?: {
    branch: string;
    detailNumber: string;
    usage: string;
    numberOfUse: string;
    unitPrice: number;
    amount: number;
  }[];
  /** 所在地 */
  location: '定額法' | '定額法(月割)' | '定率法' | '定率法(月割)';
  /** 明細区分 */
  statementCategory: '管理(金額有)' | '構造' | '管理(金額無)' | '明細無';
  /** 明細番号 */
  statementNumber?: string;
  /** 年間償却額 */
  annualDepreciation?: number;
  /** 限度率 */
  limitRate?: number;
  /** 償却限度額 */
  depreciationLimit?: number;
  /** 年間償却率 */
  annualDepreciationRate?: number;
  /** 限度年 */
  limitYear?: number;
  /** 償却限度率 */
  depreciationLimitRate?: number;
  /** 耐用年数 */
  usefulLife?: number;
};

const WaterBillForm: React.FC<WaterBillFormProps> = ({
  registrationCategory,
  managerNumber,
  paymentDueDate,
  meterReadingDate,
  acquisitionDate,
  amountCategory,
  constructionYear,
  completionDate,
  acquisitionAmount,
  creditor,
  debtor,
  statementData,
  location,
  statementCategory,
  statementNumber,
  annualDepreciation,
  limitRate,
  depreciationLimit,
  annualDepreciationRate,
  limitYear,
  depreciationLimitRate,
  usefulLife,
}) => {
  return (
    <Container>
      <Title>取得資産対象登録</Title>
      <RegistrationCategoryRadio>
        <input type="radio" id="register" name="registrationCategory" value="登録" checked={registrationCategory === '登録'} readOnly />
        <label htmlFor="register">登録</label>
        <input type="radio" id="correct" name="registrationCategory" value="訂正" checked={registrationCategory === '訂正'} readOnly />
        <label htmlFor="correct">訂正</label>
        <input type="radio" id="delete" name="registrationCategory" value="削除" checked={registrationCategory === '削除'} readOnly />
        <label htmlFor="delete">削除</label>
      </RegistrationCategoryRadio>
      <ManagerNumber>
        <Label>管理番号</Label>
        <Input type="text" value={managerNumber} readOnly />
      </ManagerNumber>
      <PaymentDueDate>
        <Label>納期</Label>
        <Input type="text" value={paymentDueDate} readOnly />
      </PaymentDueDate>
      <MeterReadingDate>
        <Label>検針年月日</Label>
        <Input type="text" value={meterReadingDate} readOnly />
      </MeterReadingDate>
      <AcquisitionDate>
        <Label>取得年月日</Label>
        <Input type="text" value={acquisitionDate} readOnly />
      </AcquisitionDate>
      <AmountCategory>
        <Label>金額区分</Label>
        <Select value={amountCategory} readOnly>
          <option></option>
          {/* amountCategoryの選択肢を記述 */}
        </Select>
      </AmountCategory>
      <ConstructionYear>
        <Label>施工年度</Label>
        <Input type="text" value={constructionYear} readOnly />
      </ConstructionYear>
      <CompletionDate>
        <Label>竣工年月日</Label>
        <Input type="text" value={completionDate} readOnly />
      </CompletionDate>
      <AcquisitionAmount>
        <Label>取得金額</Label>
        <Input type="number" value={acquisitionAmount} readOnly />
      </AcquisitionAmount>
      <Creditor>
        <Label>債権者</Label>
        <Input type="text" value={creditor} readOnly />
      </Creditor>
      <Debtor>
        <Label>債務者</Label>
        <Input type="text" value={debtor} readOnly />
      </Debtor>
      <Location>
        <Label>所在地</Label>
        <LocationRadio>
          <input type="radio" id="fixedAmount" name="location" value="定額法" checked={location === '定額法'} readOnly />
          <label htmlFor="fixedAmount">定額法</label>
          <input type="radio" id="fixedAmountMonthly" name="location" value="定額法(月割)" checked={location === '定額法(月割)'} readOnly />
          <label htmlFor="fixedAmountMonthly">定額法(月割)</label>
          <input type="radio" id="fixedRate" name="location" value="定率法" checked={location === '定率法'} readOnly />
          <label htmlFor="fixedRate">定率法</label>
          <input type="radio" id="fixedRateMonthly" name="location" value="定率法(月割)" checked={location === '定率法(月割)'} readOnly />
          <label htmlFor="fixedRateMonthly">定率法(月割)</label>
        </LocationRadio>
      </Location>
      <StatementCategory>
        <Label>明細区分</Label>
        <StatementCategoryRadio>
          <input type="radio" id="managementWithAmount" name="statementCategory" value="管理(金額有)" checked={statementCategory === '管理(金額有)'} readOnly />
          <label htmlFor="managementWithAmount">管理(金額有)</label>
          <input type="radio" id="structure" name="statementCategory" value="構造" checked={statementCategory === '構造'} readOnly />
          <label htmlFor="structure">構造</label>
          <input type="radio" id="managementWithoutAmount" name="statementCategory" value="管理(金額無)" checked={statementCategory === '管理(金額無)'} readOnly />
          <label htmlFor="managementWithoutAmount">管理(金額無)</label>
          <input type="radio" id="noStatement" name="statementCategory" value="明細無" checked={statementCategory === '明細無'} readOnly />
          <label htmlFor="noStatement">明細無</label>
        </StatementCategoryRadio>
      </StatementCategory>
      <StatementData>
        <thead>
          <tr>
            <th>明細番号</th>
            <th>用途</th>
            <th>使用量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {statementData?.map((data, index) => (
            <tr key={index}>
              <td>{data.branch}-{data.detailNumber}</td>
              <td>{data.usage}</td>
              <td>{data.numberOfUse}</td>
              <td>{data.unitPrice}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </StatementData>
      <AnnualDepreciation>
        <Label>年間償却額</Label>
        <Input type="number" value={annualDepreciation} readOnly />
      </AnnualDepreciation>
      <LimitRate>
        <Label>限度率</Label>
        <Input type="number" value={limitRate} readOnly />
      </LimitRate>
      <DepreciationLimit>
        <Label>償却限度額</Label>
        <Input type="number" value={depreciationLimit} readOnly />
      </DepreciationLimit>
      <AnnualDepreciationRate>
        <Label>年間償却率</Label>
        <Input type="number" value={annualDepreciationRate} readOnly />
      </AnnualDepreciationRate>
      <LimitYear>
        <Label>限度年</Label>
        <Input type="number" value={limitYear} readOnly />
      </LimitYear>
      <DepreciationLimitRate>
        <Label>償却限度率</Label>
        <Input type="number" value={depreciationLimitRate} readOnly />
      </DepreciationLimitRate>
      <UsefulLife>
        <Label>耐用年数</Label>
        <Input type="number" value={usefulLife} readOnly />
      </UsefulLife>
    </Container>
  );
};

export default WaterBillForm;

// サンプルデータを使用した表示用コンポーネント
const SampleWaterBillForm = () => {
  const sampleData: WaterBillFormProps = {
    registrationCategory: '登録',
    managerNumber: '051103001',
    paymentDueDate: '令和03年11月01日',
    meterReadingDate: '99999999',
    acquisitionDate: '令和03年06月30日',
    amountCategory: '',
    constructionYear: '令和02',
    completionDate: '令和02年10月31日',
    acquisitionAmount: 10000000,
    creditor: '令和建設',
    debtor: '',
    statementData: [
      {
        branch: '001',
        detailNumber: '1001',
        usage: '冷水管',
        numberOfUse: '取得',
        unitPrice: 100,
        amount: 1000,
      },
    ],
    location: '定額法',
    statementCategory: '管理(金額有)',
    statementNumber: '040',
    annualDepreciation: 225000,
    limitRate: 9600,
    depreciationLimit: 9600000,
    annualDepreciationRate: 2.50,
    limitYear: 10,
    depreciationLimitRate: 95.00,
    usefulLife: 40,
  };

  return <WaterBillForm {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  /* コンテナのスタイル */
`;

const Title = styled.h2`
  /* タイトルのスタイル */
`;

const RegistrationCategoryRadio = styled.div`
  /* 登録区分のラジオボタンのスタイル */
`;

const ManagerNumber = styled.div`
  /* 管理番号のスタイル */
`;

const PaymentDueDate = styled.div`
  /* 納期のスタイル */
`;

const MeterReadingDate = styled.div`
  /* 検針年月日のスタイル */
`;

const AcquisitionDate = styled.div`
  /* 取得年月日のスタイル */
`;

const AmountCategory = styled.div`
  /* 金額区分のスタイル */
`;

const ConstructionYear = styled.div`
  /* 施工年度のスタイル */
`;

const CompletionDate = styled.div`
  /* 竣工年月日のスタイル */  
`;

const AcquisitionAmount = styled.div`
  /* 取得金額のスタイル */
`;

const Creditor = styled.div`
  /* 債権者のスタイル */
`;

const Debtor = styled.div`
  /* 債務者のスタイル */
`;

const Location = styled.div`
  /* 所在地のスタイル */
`;

const LocationRadio = styled.div`
  /* 所在地のラジオボタンのスタイル */
`;

const StatementCategory = styled.div`
  /* 明細区分のスタイル */
`;

const StatementCategoryRadio = styled.div`
  /* 明細区分のラジオボタンのスタイル */  
`;

const StatementData = styled.table`
  /* 明細データのテーブルのスタイル */
`;

const AnnualDepreciation = styled.div`
  /* 年間償却額のスタイル */
`;

const LimitRate = styled.div`
  /* 限度率のスタイル */
`;

const DepreciationLimit = styled.div`
  /* 償却限度額のスタイル */
`;

const AnnualDepreciationRate = styled.div`
  /* 年間償却率のスタイル */
`;

const LimitYear = styled.div`
  /* 限度年のスタイル */  
`;

const DepreciationLimitRate = styled.div`
  /* 償却限度率のスタイル */
`;

const UsefulLife = styled.div`
  /* 耐用年数のスタイル */
`;

const Label = styled.label`
  /* ラベルのスタイル */
`;

const Input = styled.input`
  /* インプット要素のスタイル */
`;

const Select = styled.select`
  /* セレクト要素のスタイル */
`;