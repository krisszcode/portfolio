interface CardHeaderProps {
    label: string;
}

const CardHeader = ({label}: CardHeaderProps) => {
    return (
        <div className="p-5 text-center">
            <h2 className="text-2xl font-bold">{label}</h2>
        </div>
    );
};

export default CardHeader;
