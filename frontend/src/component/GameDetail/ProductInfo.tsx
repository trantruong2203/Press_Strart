import React from 'react';

const ProductInfo: React.FC = () => {
    return (
        <div className="lg:col-span-1 flex flex-col h-full">
            <div className="sticky top-24 bg-surface-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-surface-highlight">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary text-background-dark">Mới ra mắt</span>
                    <div className="flex items-center text-yellow-400 gap-0.5 text-xs">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="material-symbols-outlined text-sm fill-1">star_half</span>
                        <span className="text-gray-400 ml-1">(1,240)</span>
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">Cyber Odyssey 2077</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-surface-highlight text-xs font-medium text-text-secondary hover:text-white transition-colors cursor-default">RPG</span>
                    <span className="px-3 py-1 rounded-full bg-surface-highlight text-xs font-medium text-text-secondary hover:text-white transition-colors cursor-default">Thế giới mở</span>
                    <span className="px-3 py-1 rounded-full bg-surface-highlight text-xs font-medium text-text-secondary hover:text-white transition-colors cursor-default">Sci-Fi</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    Đắm chìm trong một đô thị tương lai đen tối, nơi công nghệ tiên tiến và xã hội suy đồi cùng tồn tại. Trở thành lính đánh thuê ngoài vòng pháp luật và tìm kiếm chìa khóa của sự bất tử.
                </p>
                <div className="flex items-end gap-3 mb-6">
                    <span className="text-3xl font-bold text-primary">1.399.000₫</span>
                    <span className="text-sm text-gray-500 line-through mb-1.5">1.999.000₫</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-1.5">-30%</span>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                    <button className="w-full py-3.5 px-6 bg-primary hover:bg-primary-hover text-background-dark font-bold text-lg rounded-xl transition-all shadow-[0_0_15px_rgba(76,223,32,0.3)] hover:shadow-[0_0_25px_rgba(76,223,32,0.5)] flex items-center justify-center gap-2">
                        <span>Mua Ngay</span>
                        <span className="material-symbols-outlined">bolt</span>
                    </button>
                    <button className="w-full py-3.5 px-6 bg-surface-highlight hover:bg-[#3a5a30] text-white font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2">
                        <span>Thêm vào giỏ</span>
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                </div>
                <div className="pt-6 border-t border-surface-highlight flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1" title="Windows">
                            <span className="material-symbols-outlined">desktop_windows</span>
                        </div>
                        <div className="flex items-center gap-1" title="Mac OS">
                            <span className="material-symbols-outlined">laptop_mac</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="hover:text-white flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-lg">favorite</span> <span className="hidden sm:inline">Yêu thích</span></button>
                        <button className="hover:text-white flex items-center gap-1 transition-colors"><span className="material-symbols-outlined text-lg">share</span> <span className="hidden sm:inline">Chia sẻ</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
