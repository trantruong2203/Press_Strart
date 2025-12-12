import React from 'react';

const Breadcrumbs: React.FC = () => {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <a className="hover:text-primary transition-colors" href="#">Trang chủ</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="#">RPG</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-white">Cyber Odyssey 2077</span>
        </div>
    );
};

export default Breadcrumbs;
