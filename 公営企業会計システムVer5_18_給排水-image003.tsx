import React from 'react';
import styled from '@emotion/styled';

type Company = {
  name: string;
  location: string;
};

type Employee = {
  number: string;
  name: string;
  department: string;
  position: string;
};

type RegisterInfo = {
  orderNumber: string;
  receiptNumber: string;
  orderDate: string;
  issueDate: string;
  paymentDate: string;
};

type PaymentInfo = {
  subtotal: number;
  tax: number;
  totalAmount: number;
};

type CustomerInfo = {
  companyName: string;
  address: string;
  companyCode: string;
  phoneNumber: string;
};

type Props = {
  company: Company;
  employee: Employee;
  registerInfo: RegisterInfo;
  paymentInfo: PaymentInfo;
  customerInfo: CustomerInfo;
};

const InvoiceForm: React.FC<Props> = ({
  company,
  employee,
  registerInfo,
  paymentInfo,
  customerInfo,
}) => {
  return (
    <Container>
      <CompanyInfo>
        <div>{company.name}</div>
        <div>{company.location}</div>
      </CompanyInfo>
      <EmployeeInfo>
        <div>担当者</div>
        <div>{employee.number}</div>
        <div>{employee.name}</div>
        <div>
          {employee.department} {employee.position}
        </div>
      </EmployeeInfo>
      <RegisterInfo>
        <div>
          <span>注文番号</span>
          <span>{registerInfo.orderNumber}</span>
        </div>
        <div>
          <span>受付番号</span>
          <span>{registerInfo.receiptNumber}</span>
        </div>
        <div>
          <span>受注年月日</span>
          <span>{registerInfo.orderDate}</span>
        </div>
        <div>
          <span>発行年月日</span>
          <span>{registerInfo.issueDate}</span>
        </div>
        <div>
          <span>支払期限</span>
          <span>{registerInfo.paymentDate}</span>
        </div>
      </RegisterInfo>
      <PaymentInfo>
        <div>
          <span>商品代金</span>
          <span>{paymentInfo.subtotal}</span>
        </div>
        <div>
          <span>消費税</span>
          <span>{paymentInfo.tax}</span>
        </div>
        <div>
          <span>合計金額</span>
          <span>{paymentInfo.totalAmount}</span>
        </div>
      </PaymentInfo>
      <CustomerInfo>
        <div>{customerInfo.companyName}</div>
        <div>{customerInfo.address}</div>
        <div>
          <span>取引先コード</span>
          <span>{customerInfo.companyCode}</span>
        </div>
        <div>
          <span>電話番号</span>
          <span>{customerInfo.phoneNumber}</span>
        </div>
      </CustomerInfo>
      <Buttons>
        <button>クリア</button>
        <button>終了</button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const EmployeeInfo = styled.div`
  margin-bottom: 20px;
`;

const RegisterInfo = styled.div`
  margin-bottom: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;

const PaymentInfo = styled.div`
  margin-bottom: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;

const CustomerInfo = styled.div`
  margin-bottom: 20px;

  > div {
    margin-bottom: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin-left: 10px;
  }
`;

// Usage example
const sampleCompany = {
  name: '東村山郡山辺町大字に読解がない場合',
  location: '東村山郡山辺町大字に読解がない場合',
};

const sampleEmployee = {
  number: '02',
  name: '山田太郎',
  department: '02 営業部',
  position: '主任',
};

const sampleRegisterInfo = {
  orderNumber: '01',
  receiptNumber: '1 新設',
  orderDate: '平成 30年 2月27日',
  issueDate: '平成 30年 2月27日',
  paymentDate: '平成 30年 2月27日',
};

const samplePaymentInfo = {
  subtotal: 999999,
  tax: 99999,
  totalAmount: 999999999,
};

const sampleCustomerInfo = {
  companyName: '○○○○工事',
  address: '東町15-',
  companyCode: '00000000002',
  phoneNumber: '○○○○',
};

const InvoiceFormExample: React.FC = () => {
  return (
    <InvoiceForm
      company={sampleCompany}
      employee={sampleEmployee}
      registerInfo={sampleRegisterInfo}
      paymentInfo={samplePaymentInfo}
      customerInfo={sampleCustomerInfo}
    />
  );
};

export default InvoiceFormExample;