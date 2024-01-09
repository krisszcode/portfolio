const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white p-8 rounded-lg w-1/3 mx-auto my-auto shadow-lg">
            {children}
        </div>
    );
};

export default AuthLayout;