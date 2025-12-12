import React from 'react';

const GameDetailHeader = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-surface-highlight bg-background-dark/95 backdrop-blur-md px-4 sm:px-10 py-3">
            <div className="flex items-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3 text-white">
                    <div className="size-8 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">stadia_controller</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">NeonGames</h2>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Cửa hàng</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Thư viện</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Cộng đồng</a>
                    <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Hỗ trợ</a>
                </nav>
            </div>
            <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full group focus-within:ring-1 ring-primary/50 transition-all">
                        <div className="text-text-secondary flex border-none bg-surface-highlight items-center justify-center pl-4 rounded-l-lg border-r-0">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-surface-highlight focus:border-none h-full placeholder:text-text-secondary px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Tìm kiếm game..." value="" />
                    </div>
                </label>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-surface-highlight hover:bg-surface-highlight/80 text-white transition-colors relative">
                        <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                        <div className="absolute top-2 right-2 size-2 bg-primary rounded-full"></div>
                    </button>
                    <button className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-surface-highlight hover:bg-surface-highlight/80 text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">account_circle</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default GameDetailHeader;
