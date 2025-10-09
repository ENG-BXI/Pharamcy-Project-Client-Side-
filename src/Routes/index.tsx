import {BrowserRouter, Route, Routes} from 'react-router';
import NotFount from '../Pages/NotFount';
import Dashboard from '../Pages/Dashboard';
import PurchaseFeature from '../Features/PurchaseFeature/Page';
import InventoryFeature from '../Features/InventoryFeature/Page';
import CompaniesFeature from '../Features/CompaniesFeature/Page';
import OneDrugPage from '@/Features/InventoryFeature/Page/OneDrugPage';
const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<PurchaseFeature />} />
          <Route path='/inventory' element={<InventoryFeature />} />

          <Route path='/inventory/drugs/:id' element={<OneDrugPage />} />
          <Route path='/companies' element={<CompaniesFeature />} />
        </Route>
        <Route path='*' element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoute;
