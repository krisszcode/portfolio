import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center space-x-2">
            <CheckCircledIcon className="h-4 w-4" />
            <span className="text-green-500">{message}</span>
        </div>
    );
};