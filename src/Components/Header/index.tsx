const Header = () => {
  const PriceSalary = 450;
  const userName = 'محمد سالم';
  const Avatar = userName.split(' ').length > 1 ? userName.split(' ')[0][0] + ' ' + userName.split(' ')[1][0] : userName[0];
  return (
    <header className='min-h-10 flex justify-between items-center'>
      <div>
        <span className='bg-gray-300 rounded-full p-0.5 text-sm '>{Avatar}</span> {userName}
      </div>
      <h3 className='text-M-h4'>سعر الصرف للريال السعودي : {PriceSalary} </h3>
    </header>
  );
};

export default Header;
