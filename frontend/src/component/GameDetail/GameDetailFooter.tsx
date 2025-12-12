import React from 'react';

const GameDetailFooter = () => {
    return (
        <footer className="border-t border-surface-highlight bg-background-dark py-12 px-4 sm:px-10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 text-white mb-4">
                        <div className="size-6 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">stadia_controller</span>
                        </div>
                        <h2 className="text-white text-lg font-bold">NeonGames</h2>
                    </div>
                    <p className="text-gray-500 text-sm">Nền tảng phân phối game kỹ thuật số hàng đầu với trải nghiệm người dùng hiện đại.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Khám phá</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Game Mới</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Bán chạy nhất</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Giảm giá</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Hỗ trợ</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Trung tâm trợ giúp</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Chính sách hoàn tiền</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Kết nối</h4>
                    <div className="flex gap-4">
                        <a className="size-8 rounded bg-surface-highlight flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">public</span>
                        </a>
                        <a className="size-8 rounded bg-surface-highlight flex items-center justify-center text-white hover:bg-primary hover:text-background-dark transition-colors" href="#">
                            <span className="material-symbols-outlined text-sm">alternate_email</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto border-t border-surface-highlight pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© 2024 NeonGames Inc. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a className="hover:text-white" href="#">Điều khoản</a>
                    <a className="hover:text-white" href="#">Bảo mật</a>
                    <a className="hover:text-white" href="#">Cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default GameDetailFooter;
