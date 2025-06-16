import React from 'react';

interface ButtonProps {
    text?: string;
    outline?: boolean;
    icon?: React.ElementType;
    onClick?: () => void;
    fullyRounded?: boolean;
    isWhiteOnHover?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, fullyRounded, outline, icon: Icon, onClick, isWhiteOnHover }) => {
    return (
        <div
            onClick={onClick}
            className={`relative px-6 py-2 ${
                fullyRounded ? 'rounded-full' : 'rounded-sm'
            } font-semibold cursor-pointer overflow-hidden ${
                outline
                    ? `border-2 border-darkblue text-darkblue bg-white
                        transition-colors before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-darkblue 
                        before:transition-all before:duration-200 before:origin-bottom before:z-[-1] 
                        hover:before:h-full ${isWhiteOnHover ? 'hover:text-white' : 'hover:text-darkblue'}`
                    : 'bg-gradient-to-br from-darkblue to-lightblue text-white'
            } flex items-center justify-center gap-1`}
        >
            {text}
            {Icon && <Icon size={18} color={outline ? '#2f29c4' : '#fff'} />}
        </div>
    );
};

export default Button;
