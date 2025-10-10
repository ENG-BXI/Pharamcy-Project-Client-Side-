import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import {Link} from 'react-router';
import type {ICompany} from '../Types/Company';

const AllOfCompanies = () => {
  const companies: ICompany[] = [
    {
      name: 'فايزر',
      numberOfDrugs: 25
    },
    {
      name: 'جلاكسو سميث كلاين',
      numberOfDrugs: 18
    },
    {
      name: 'أسترازينيكا',
      numberOfDrugs: 14
    },
    {
      name: 'نوفارتس',
      numberOfDrugs: 20
    },
    {
      name: 'سانوفي',
      numberOfDrugs: 16
    },
    {
      name: 'باير',
      numberOfDrugs: 10
    },
    {
      name: 'سيبلا',
      numberOfDrugs: 12
    },
    {
      name: 'سن فارما',
      numberOfDrugs: 8
    },
    {
      name: 'نيتشرز باونتي',
      numberOfDrugs: 9
    },
    {
      name: 'د. ريدي',
      numberOfDrugs: 11
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم الشركة</TableHead>
          <TableHead className='text-start!'>كمية الادوية</TableHead>
          <TableHead className='text-start!'></TableHead>
          <TableHead className='text-start!'></TableHead>
          <TableHead className='text-start!'></TableHead>
          <TableHead className='text-start!'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.length === 0 && <div>No Companies</div>}
        {companies.length > 0 &&
          companies.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.numberOfDrugs}</TableCell>
              <TableCell>
                <Link to={`/companies/${index}/drugs`}>ادوية الشركة</Link>
              </TableCell>
              <TableCell>
                <Link to={`/companies/${index}/bank-account`}>حسابات بنوك الشركة</Link>
              </TableCell>
              <TableCell>
                <Link to={`/companies/${index}/contact`}>ارقام التواصل</Link>
              </TableCell>
              <TableCell>X X </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default AllOfCompanies;
