import CustomLabelAndInput from "@/Components/CustomLabelAndInput";

function SearchAndFilter() {
  return (
    <div className='flex justify-between items-center mb-3'>
      <CustomLabelAndInput label='بحث' isAutofocus />
      <div className='border border-black/50 rounded-md ps-2 pe-20'>فلتر</div>
    </div>
  );
}
export default SearchAndFilter;
