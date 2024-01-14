import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-emerald-100 text-emerald-500 flex items-center text-sm rounded-md gap-x-2 p-3">
            <CheckCircledIcon className="h-4 w-4" />
            <span className="">{message}</span>
        </div>
    );
};