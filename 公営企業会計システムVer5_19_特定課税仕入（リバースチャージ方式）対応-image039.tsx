import React from 'react';

// 賃借区分コンポーネント
type LeaseDivisionProps = {
  boroughDivision?: string;
  districtDivision?: string;
}

const LeaseDivision: React.FC<LeaseDivisionProps> = ({
  boroughDivision = '',
  districtDivision = '',
}) => {
  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="boroughDivision">貸借区分</label>
        <input type="text" id="boroughDivision" value={boroughDivision} className="border rounded px-2 py-1" readOnly />
      </div>
      <div>
        <label htmlFor="districtDivision">勤定区分</label>
        <input type="text" id="districtDivision" value={districtDivision} className="border rounded px-2 py-1" readOnly />
      </div>
    </div>
  );
};

// 最終納品日コンポーネント
type FinalDeliveryDateProps = {
  date?: string;
}

const FinalDeliveryDate: React.FC<FinalDeliveryDateProps> = ({ date = '' }) => {
  return (
    <div>
      <label htmlFor="finalDeliveryDate">仕訳科目区分</label>
      <input type="text" id="finalDeliveryDate" value={date} className="border rounded px-2 py-1" readOnly />
    </div>
  );
};

// 未払計上コンポーネント
type UnpaidProps = {
  journalVoucherDivision?: string;
  subAccountDivision?: string;
}

const Unpaid: React.FC<UnpaidProps> = ({
  journalVoucherDivision = '',
  subAccountDivision = '',
}) => {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor="journalVoucherDivision">伝票仕訳区分</label>
        <input type="text" id="journalVoucherDivision" value={journalVoucherDivision} className="border rounded px-2 py-1" readOnly />
      </div>
      <div>
        <label htmlFor="subAccountDivision">補助決裁区分</label>
        <input type="text" id="subAccountDivision" value={subAccountDivision} className="border rounded px-2 py-1" readOnly />
      </div>
    </div>
  );
};

// 未払計上サンプルコンポーネント
const UnpaidSample: React.FC = () => {
  return (
    <Unpaid
      journalVoucherDivision="ABC"
      subAccountDivision="XYZ"
    />
  );
};

// その他項目コンポーネント
type OtherItemsProps = {
  acquisitionDate?: string;
  usefulLife?: number;
  depreciationStartDate?: string;
  BSDailyDepreciation?: number;
}

const OtherItems: React.FC<OtherItemsProps> = ({
  acquisitionDate = '',
  usefulLife = 0,
  depreciationStartDate = '',
  BSDailyDepreciation = 0,
}) => {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor="acquisitionDate">取得日</label>
        <input type="text" id="acquisitionDate" value={acquisitionDate} className="border rounded px-2 py-1" readOnly />
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="usefulLife">耐用年数</label>
          <input type="number" id="usefulLife" value={usefulLife} className="border rounded px-2 py-1 w-20" readOnly />
        </div>
        <div>
          <label htmlFor="BSDailyDepreciation">BS科目稼働額</label>
          <input type="number" id="BSDailyDepreciation" value={BSDailyDepreciation} className="border rounded px-2 py-1 w-20" readOnly />
        </div>
      </div>
      <div>
        <label htmlFor="depreciationStartDate">償却開始日</label>
        <input type="text" id="depreciationStartDate" value={depreciationStartDate} className="border rounded px-2 py-1" readOnly />
      </div>
    </div>
  );
};