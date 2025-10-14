import {BrowserRouter, Route, Routes} from 'react-router';
import NotFount from '../Pages/NotFount';
import Dashboard from '../Pages/Dashboard';
import PurchaseFeature from '../Features/PurchaseFeature/Page';
import InventoryFeature from '../Features/InventoryFeature/Page';
import CompaniesFeature from '../Features/CompaniesFeature/Page';
import OneDrugPage from '@/Features/InventoryFeature/Page/OneDrugPage';
import OneCompany from '@/Features/CompaniesFeature/Page/OneCompany';
import Contact from '@/Features/CompaniesFeature/Page/Contact';
import BankAccount from '@/Features/CompaniesFeature/Page/BankAccount';
import DeptForCompanies from '@/Features/DeptForCompaniesFeature/Pages';
import DeptDetails from '@/Features/DeptForCompaniesFeature/Pages/DeptDetails';
import DeptOfClientsFeature from '@/Features/DeptOFClientsFeature/Pages';
import ClientDeptDetails from '@/Features/DeptOFClientsFeature/Pages/ClientDeptDetails';
import ClientPaymentDetailsOfDept from '@/Features/DeptOFClientsFeature/Pages/ClientPaymentDetailsOfDept';
import Users from '@/Features/Users/Pages';
const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<PurchaseFeature />} />
          <Route path='/inventory' element={<InventoryFeature />} />
          <Route path='/inventory/drugs/:id' element={<OneDrugPage />} />

          <Route path='/users' element={<Users />} />
          {/* Companies */}
          <Route path='/companies' element={<CompaniesFeature />} />
          <Route path='/companies/:id/drugs' element={<OneCompany />} />
          <Route path='/companies/:id/contact' element={<Contact />} />
          <Route path='/companies/:id/bank-account' element={<BankAccount />} />
          {/* Dept For Companies */}
          <Route path='/dept-for-companies' element={<DeptForCompanies />} />
          <Route path='/dept-for-companies/:id/details' element={<DeptDetails />} />
          {/* Dept OF Clients */}
          <Route path='/dept-of-clients' element={<DeptOfClientsFeature />} />
          <Route path='/dept-of-clients/:id/details' element={<ClientDeptDetails />} />
          <Route path='/dept-of-clients/:id/payment-details/:id_p' element={<ClientPaymentDetailsOfDept />} />
        </Route>
        <Route path='*' element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoute;
