import React from 'react';
import styled from 'styled-components';

// 貯蓄単価金額マスタ保守画面のプロパティ型定義
type MasterMaintenanceProps = {
  productCode: string;
  productName: string;
  unitPrice: number;
  startDate: string;
};

// 貯蓄単価金額マスタ保守画面のコンポーネント
const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({
  productCode,
  productName,
  unitPrice,
  startDate,
}) => {
  return (
    <Container>
      <Title>貯蓄単価金額マスタ保守</Title>
      <Form>
        <Label>
          <input type="radio" name="searchType" />
          登録
        </Label>
        <Label>
          <input type="radio" name="searchType" />
          訂正
        </Label>
        <Label>
          <input type="radio" name="searchType" />
          削除
        </Label>

        <FieldSet>
          <legend>単価分類</legend>
          <Label>
            <input type="radio" name="priceType" defaultChecked />
            契約単価
          </Label>
          <Label>
            <input type="radio" name="priceType" />
            売却単価
          </Label>
          <Label>
            <input type="radio" name="priceType" />
            修繕単価
          </Label>
        </FieldSet>

        <Label>
          保管場所
          <input type="text" defaultValue="000010" />
        </Label>
        <Label>
          単価コード
          <input type="text" defaultValue="00000040" />
        </Label>

        <div>
          <Label>単価名称</Label>
          <div>{productName}</div>
        </div>
        <div>
          <Label>単価規格</Label>
          <div>φ13mm</div>
        </div>
        <div>
          <Label>適用開始年月日</Label>
          <input type="text" defaultValue={startDate} />
        </div>
        <div>
          <Label>単価</Label>
          <input type="text" defaultValue={unitPrice} />
        </div>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>適用開始年月日</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022/04/01</td>
            <td>9,000.00</td>
          </tr>
          <tr>
            <td>2021/04/01</td>
            <td>9,000.00</td>
          </tr>
        </tbody>
      </Table>

      <ButtonContainer>
        <Button type="button">前データ</Button>
        <Button type="button">次データ</Button>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いたMasterMaintenanceコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const sampleData: MasterMaintenanceProps = {
    productCode: '00000040',
    productName: '単水器 電磁式',
    unitPrice: 9500,
    startDate: '令和8年02月20日',
  };

  return (
    <div>
      <h2>貯蓄単価金額マスタ保守画面</h2>
      <MasterMaintenance {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const FieldSet = styled.fieldset`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export default MasterMaintenance;