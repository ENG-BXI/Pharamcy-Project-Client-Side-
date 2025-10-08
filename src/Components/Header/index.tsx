const Header = () => {
  const PriceSalary = 450;
  return (
    <header className='min-h-10 flex justify-end items-center'>
      <h3 className='text-M-h4'>سعر الصرف للريال السعودي : {PriceSalary} </h3>
    </header>
  );
};

export default Header;
