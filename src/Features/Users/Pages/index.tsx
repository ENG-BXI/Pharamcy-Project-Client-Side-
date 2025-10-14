import SectionTitle from '@/Components/SectionTitle';
import AllUsersTable from '../Components/AllUsersTable';
import AddNewUserDialogContent from '../Components/AddNewUserDialogContent';

const Users = () => {
  return (
    <section>
      <SectionTitle title='المستخدمين' hasButton buttonText='اضافة مستخدم' isButtonOpenDialog dialogContent={<AddNewUserDialogContent />} />
      <AllUsersTable />
    </section>
  );
};

export default Users;
