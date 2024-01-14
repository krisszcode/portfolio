import { FaGithub  } from 'react-icons/fa';
import { FcGoogle  } from 'react-icons/fc';

const Social = () => {
    return (
        <div className='flex items-center justify-center w-full gap-x-2'>
            <button onClick={()=>{}} className='outline-lg p-2 rounded-full bg-gray-100 dark:bg-black'>
                <FcGoogle className='text-3xl text-white' />
            </button>
            <button onClick={()=>{}} className='outline-lg bg-gray-100 dark:bg-black p-2 rounded-full'>
                <FaGithub className='text-3xl' />
            </button>
        </div>
    );
};

export default Social;
