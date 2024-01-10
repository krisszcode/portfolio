import { FaGithub, FaFacebook } from 'react-icons/fa';

const Social = () => {
    return (
        <div>
            <button>
                <FaGithub />
                Login with GitHub
            </button>
            <button>
                <FaFacebook />
                Login with Facebook
            </button>
        </div>
    );
};

export default Social;
