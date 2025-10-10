import SectionTitle from '@/Components/SectionTitle';
import AllAccountBankForThisCompany from '../Components/AllAccountBankForThisCompany';
import AddNewAccountBankDialogContent from '../Components/AddNewAccountBankDialogContent';

const BankAccount = () => {
  return (
    <section>
      <SectionTitle title='حسابات بنوك شركة AbbVie' hasButton buttonText='اضافة حساب' isButtonOpenDialog dialogContent={<AddNewAccountBankDialogContent />} />
      <AllAccountBankForThisCompany />
    </section>
  );
};

export default BankAccount;
