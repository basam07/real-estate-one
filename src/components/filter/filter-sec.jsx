


export default function FilterSec (){
    const options = ['Location','Price','Bedrooms','Status'];

    return (
        <div className='flex flex-row flex-wrap gap-5 my-8 items-center justify-center text-center'>
            {
               options.map((_) => <div className='p-3 w-[230px] bg-[#ECE3D7] h-[52px]'>
                    <select
                        className='filter-dropdown text-left max-w-[230px] w-full bg-[#ECE3D7] cursor-pointer'>
                        <option>{_}</option>
                    </select>
                </div>
                )}
        </div>
    )
}