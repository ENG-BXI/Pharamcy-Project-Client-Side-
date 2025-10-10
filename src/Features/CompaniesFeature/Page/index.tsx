import SectionTitle from '@/Components/SectionTitle';
import AddNewCompanyDialogContent from '../Components/AddNewCompanyDialogContent';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';

const CompaniesFeature = () => {
  return (
    <section>
      <SectionTitle title='الشركات' hasButton buttonText='اضافة شركة' isButtonOpenDialog dialogContent={<AddNewCompanyDialogContent />} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>اسم الشركة</TableHead>
            <TableHead>كمية الادوية</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default CompaniesFeature;
