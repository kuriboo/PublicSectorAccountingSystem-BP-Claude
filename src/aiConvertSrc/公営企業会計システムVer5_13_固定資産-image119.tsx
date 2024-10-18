import React from 'react';
import styled from '@emotion/styled';

type LegalApplicationFormProps = {
  applicationDate: string;
  department: string;
  section: string;
  applicationAmount: number;
  productName: string;
  purpose: string;
  paymentMethod: string;
  currentYear: string;
  estimatedAmount: number;
  lastYearResult: number;
  accountTitle: string;
  accountTitleCode: string;
  subAccountTitle: string;
  subAccountTitleCode: string;
  client: string;
  orderNumber: string;
  deliveryDate: string;
  orderFrom: string;
  businessPartner: string;
  quotationNumber: string;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f0f0f0;
  }
`;

const LegalApplicationForm: React.FC<LegalApplicationFormProps> = ({
  applicationDate,
  department,
  section,
  applicationAmount,
  productName,
  purpose,
  paymentMethod,
  currentYear,
  estimatedAmount,
  lastYearResult,
  accountTitle,
  accountTitleCode,
  subAccountTitle,
  subAccountTitleCode,
  client,
  orderNumber,
  deliveryDate,
  orderFrom,
  businessPartner,
  quotationNumber,
}) => {
  return (
    <Container>
      <Title>法改正対応耐用年数更正</Title>
      <Table>
        <tbody>
          <tr>
            <th>更正年月日</th>
            <td>{applicationDate}</td>
          </tr>
          <tr>
            <th>部</th>
            <td>{department}</td>
          </tr>
          <tr>
            <th>課</th>
            <td>{section}</td>
          </tr>
          <tr>
            <th>明細</th>
            <td>{purpose}</td>
          </tr>
          <tr>
            <th>科目検索</th>
            <td>{accountTitle}</td>
          </tr>
          <tr>
            <th>資産番号</th>
            <td>{applicationAmount}</td>
          </tr>
          <tr>
            <th>資産名称</th>
            <td>{productName}</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>{paymentMethod}</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td>{purpose}</td>
          </tr>
          <tr>
            <th>計上前</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th>耐用年数</th>
                    <td>{currentYear}</td>
                  </tr>
                  <tr>    
                    <th>償却率</th>
                    <td>{estimatedAmount}</td>
                  </tr>
                  <tr>
                    <th>経過年数</th>
                    <td>{lastYearResult}</td>
                  </tr>
                  <tr>
                    <th>年間償却額</th>
                    <td>{estimatedAmount / currentYear}</td>
                  </tr>
                  <tr>
                    <th>過年度修正損益</th>
                    <td>0</td>
                  </tr>
                </tbody>  
              </table>
            </td>
          </tr>
          <tr>
            <th>訂正後</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th>耐用年数</th>
                    <td>{currentYear}</td>
                  </tr>
                  <tr>
                    <th>償却率</th>
                    <td>{estimatedAmount}</td>
                  </tr>
                  <tr>
                    <th>経過年数</th>
                    <td>{lastYearResult}</td>
                  </tr>
                  <tr>
                    <th>年間償却額</th>
                    <td>{estimatedAmount / currentYear}</td>
                  </tr>
                  <tr>
                    <th>過年度修正益</th>
                    <td>{lastYearResult * (estimatedAmount / currentYear)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th>施設</th>
            <td>{client}</td>
          </tr>
          <tr>
            <th>部門</th>
            <td>{department}</td>
          </tr>
          <tr>
            <th>所属</th>
            <td>{businessPartner}</td>
          </tr>
          <tr>
            <th>地区</th>
            <td>{paymentMethod}</td>
          </tr>
          <tr>  
            <th>取得年月日</th>
            <td>{deliveryDate}</td>
          </tr>
          <tr>
            <th>償却方法</th>
            <td>定額法</td>
          </tr>
          <tr>
            <th>明細区分</th>
            <td>管理全部費</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  return (
    <LegalApplicationForm
      applicationDate="平成29年09月14日"
      department="0001"
      section="0001"
      applicationAmount={7468000}
      productName="平成29年度設置分椅子脚部水盤"
      purpose="耐震補強"
      paymentMethod="市内一円"
      currentYear="006"
      estimatedAmount={206165}
      lastYearResult={11}
      accountTitle="器具備品"
      accountTitleCode="006"
      subAccountTitle="情報機器類"
      subAccountTitleCode="11"
      client="上水道"
      orderNumber="水道メータ"
      deliveryDate="平成24年09月6日"
      orderFrom="営繕全部費"
      businessPartner="管理全部費"
      quotationNumber="見積金額書"
    />
  );
};

export default App;