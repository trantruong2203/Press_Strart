import React from 'react';

const ContentTabs: React.FC = () => {
    return (
        <div className="border-b border-surface-highlight mb-8">
            <div className="flex gap-8 overflow-x-auto pb-1 scrollbar-hide">
                <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm sm:text-base whitespace-nowrap px-1">Giới thiệu</button>
                <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm sm:text-base whitespace-nowrap transition-colors px-1">Yêu cầu hệ thống</button>
                <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm sm:text-base whitespace-nowrap transition-colors px-1">Đánh giá (1.2k)</button>
                <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm sm:text-base whitespace-nowrap transition-colors px-1">DLC &amp; Bonus</button>
            </div>
        </div>
    );
};

export default ContentTabs;
