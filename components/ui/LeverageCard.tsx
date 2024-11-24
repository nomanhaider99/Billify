import React from 'react';

interface LeverageCardProps {
    title: string;
    count: string;
    icon: React.ElementType;
}

const LeverageCard: React.FC<LeverageCardProps> = ({
    count,
    icon: Icon,
    title
}) => {
  return (
    <div className="md:w-[22vw] w-full bg-white shadow-lg rounded-xl p-6 flex flex-col gap-6 transition-transform transform hover:scale-105">
        <div className="w-full flex justify-between items-center">
            <div className="text-4xl font-semibold text-darkblue">{count}</div>
            <div className="text-darkblue">
                <Icon size={40} color="#2f29c4" />
            </div>
        </div>
        <div className="text-lg font-medium text-lightblue">{title}</div>
    </div>
  );
};

export default LeverageCard;
