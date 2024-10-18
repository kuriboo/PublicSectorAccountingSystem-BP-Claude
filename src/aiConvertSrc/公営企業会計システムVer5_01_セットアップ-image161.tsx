import React from 'react';
import styled from '@emotion/styled';

type MasterData = {
  label: string;
  value: string;
};

type FormProps = {
  onSubmit: () => void;
  onCancel: () => void;
  onConfirm: () => void;
};

type FormData = {
  accountType: MasterData;
  transferTitle: string;
  transferTitlePronunciation: string;
  transferPurpose: MasterData;
  transferMethod: MasterData;
  mobileNumber: string;
  noticeFromBank: string;
  transferLimit: string;
  destination: string;
  address: string;
  paymentNotice: MasterData;
  paymentNoticeDetail: string;
  barcode: boolean;
  eNotice: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaroMasterForm: React.FC<FormProps> = ({ onSubmit, onCancel, onConfirm }) => {
  // サンプルデータ
  const accountTypes: MasterData[] = [
    { label: '通常', value: 'normal' },
    { label: '総合口座', value: 'general' },
  ];
  const transferPurposes: MasterData[] = [
    { label: 'お買い物', value: 'shopping' },
    { label: 'ご請求', value: 'billing' },
  ];
  const transferMethods: MasterData[] = [
    { label: '収納機能', value: 'payment' },
    { label: '総振', value: 'transfer' },
  ];
  const paymentNotices: MasterData[] = [
    { label: '前回振替続行', value: 'continue' },
    { label: '都度口座自由', value: 'eachTime' },
  ];

  const [formData, setFormData] = React.useState<FormData>({
    accountType: accountTypes[0],
    transferTitle: '',
    transferTitlePronunciation: '',
    transferPurpose: transferPurposes[0], 
    transferMethod: transferMethods[0],
    mobileNumber: '',
    noticeFromBank: '',  
    transferLimit: '',
    destination: '',
    address: '',
    paymentNotice: paymentNotices[0],
    paymentNoticeDetail: '',
    barcode: false,
    eNotice: false,
  });

  // フォーム入力の変更を処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  // 送信ボタン押下時の処理
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  // キャンセルボタン押下時の処理 
  const handleCancel = () => {
    onCancel();
  };

  // 確認ボタン押下時の処理
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <Container>
      <Title>納入通知書マスタ</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>帳票種別</Label>
          <Select
            name="accountType"
            value={formData.accountType.value}
            onChange={handleChange}
          >
            {accountTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>納入通知書タイトル</Label>
          <Input
            type="text"
            name="transferTitle"
            value={formData.transferTitle}
            onChange={handleChange}
          />
          <Label>納入通知書タイトル読み仮名</Label>
          <Input
            type="text"
            name="transferTitlePronunciation"
            value={formData.transferTitlePronunciation}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>分納時金額</Label>
          <Select
            name="transferPurpose"
            value={formData.transferPurpose.value}
            onChange={handleChange}
          >
            {transferPurposes.map((purpose) => (
              <option key={purpose.value} value={purpose.value}>
                {purpose.label}  
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>帳票タイトル</Label>
          <Select 
            name="transferMethod"
            value={formData.transferMethod.value}
            onChange={handleChange}
          >
            {transferMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>  
            ))}
          </Select>
          <Label>納入通知書返戻先電話番号</Label>
          <Input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />  
        </FormGroup>
        <FormGroup>
          <Label>会計名</Label>
          <Input
            type="text"
            name="noticeFromBank"
            value={formData.noticeFromBank}
            onChange={handleChange}
          />
          <Label>管理番号1</Label>
          <Input
            type="text"  
            name="transferLimit"
            value={formData.transferLimit}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>管理番号2</Label>
          <Input
            type="text"
            name="destination"  
            value={formData.destination}
            onChange={handleChange}
          />
          <Label>管理番号3</Label>
          <Input 
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}  
          />
        </FormGroup>
        <FormGroup>
          <Label>通帳請求書登録番号</Label>
          <Input
            type="text"
            name="paymentNoticeDetail"  
            value={formData.paymentNoticeDetail}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>起案所属項目名</Label>
          <Select
            name="paymentNotice"
            value={formData.paymentNotice.value} 
            onChange={handleChange}
          >
            {paymentNotices.map((notice) => (
              <option key={notice.value} value={notice.value}>
                {notice.label}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox
              type="checkbox"
              name="barcode"
              checked={formData.barcode}
              onChange={handleChange}
            />
            バーコード印字
          </Label>
          <Label>
            <Checkbox 
              type="checkbox"
              name="eNotice"
              checked={formData.eNotice}
              onChange={handleChange} 
            />
            再発行日付印字  
          </Label>
        </FormGroup>
        <ButtonGroup>
          <Button type="button" onClick={handleCancel}>
            キャンセル
          </Button>
          <Button type="submit">終了</Button>
          <Button type="button" onClick={handleConfirm}>
            確認
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  const handleConfirm = () => {
    console.log('Form confirmed');
  };

  return (
    <div>
      <TaroMasterForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App;