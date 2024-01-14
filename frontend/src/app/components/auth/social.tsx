import { FaGithub, FaFacebook } from 'react-icons/fa';

const Social = () => {
    return (
        <div className='flex items-center justify-center w-full gap-x-2'>
            <button onClick={()=>{}} className='outline-lg bg-gray-200 dark:bg-black p-2 rounded-full'>
                <FaGithub className='text-3xl' />
            </button>
            <button onClick={()=>{}} className='outline-lg bg-blue-500 p-2 rounded-full'>
                <FaFacebook className='text-3xl text-white' />
            </button>
        </div>
    );
};

export default Social;
