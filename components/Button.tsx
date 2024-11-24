import React from 'react';

interface ButtonProps {
    text?: string;
    outline?: boolean;
    icon?: React.ElementType;
    onClick?: () => void;
    fullyRounded?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, fullyRounded, outline, icon: Icon, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`px-6 py-2 ${!fullyRounded ? 'rounded-sm' : 'rounded-full'} ${
                outline ? 'bg-white' : 'bg-darkblue'
            } ${outline ? 'border-[0.5px]' : 'border-none'} ${
                outline ? 'border-darkblue' : ''
            } ${outline ? 'text-darkblue' : 'text-white'} font-semibold flex items-center gap-2 cursor-pointer`}
        >
            {text}
            {Icon && <Icon size={18} color={outline ? '#2f29c4' : '#fff'} />}
        </div>
    );
};

export default Button;
