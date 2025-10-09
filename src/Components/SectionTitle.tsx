import CustomButton from './CustomButton';

const SectionTitle = ({title, hasButton = false, buttonText}: {title: string; hasButton?: boolean; buttonText?: string}) => {
  return (
    <div className='flex items-end justify-between mb-5'>
      <div className='text-D-h4 font-semibold '>{title}</div>
      {hasButton && <CustomButton className=''>{buttonText}</CustomButton>}
    </div>
  );
};

export default SectionTitle;
