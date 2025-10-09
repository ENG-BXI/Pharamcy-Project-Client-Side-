import type { IDrugList } from '@/Types/DrugList';
import PopUpAddBuyDrug from './PopUpAddBuyDrug';

function Welcome({setListDrug}: {setListDrug: React.Dispatch<React.SetStateAction<IDrugList[]>>}) {
  return (
    <div className='h-5/6 flex flex-col gap-y-3 justify-center items-center'>
      <h1 className='text-D-h4 font-semibold text-center'>اهلا بك في صيدلية النور</h1>
      <PopUpAddBuyDrug setListDrug={setListDrug} />
    </div>
  );
}

export default Welcome;
