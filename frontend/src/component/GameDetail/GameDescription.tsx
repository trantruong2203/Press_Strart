import React from 'react';

const GameDescription: React.FC = () => {
    return (
        <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Cốt truyện
                </h3>
                <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>Cyber Odyssey 2077 là một câu chuyện phiêu lưu hành động thế giới mở, lấy bối cảnh tại Night City, một siêu đô thị bị ám ảnh bởi quyền lực, sự hào nhoáng và sửa đổi cơ thể. Bạn vào vai V, một lính đánh thuê ngoài vòng pháp luật đang theo đuổi một bộ phận cấy ghép độc nhất vô nhị: chìa khóa của sự bất tử.</p>
                    <p>Bạn có thể tùy chỉnh phần mềm mạng, bộ kỹ năng và lối chơi của nhân vật, và khám phá một thành phố rộng lớn nơi những lựa chọn bạn đưa ra sẽ định hình câu chuyện và thế giới xung quanh bạn.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="bg-surface-dark p-4 rounded-lg border border-surface-highlight">
                            <h4 className="font-bold text-white mb-2">Trở thành huyền thoại</h4>
                            <p className="text-sm text-gray-400">Tùy biến nhân vật sâu sắc với hệ thống kỹ năng đa dạng và vũ khí công nghệ cao.</p>
                        </div>
                        <div className="bg-surface-dark p-4 rounded-lg border border-surface-highlight">
                            <h4 className="font-bold text-white mb-2">Thành phố tương lai</h4>
                            <p className="text-sm text-gray-400">Khám phá Night City rộng lớn, sống động với đồ họa Ray Tracing đỉnh cao.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* System Requirements */}
            <section>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Cấu hình yêu cầu
                </h3>
                <div className="bg-surface-dark rounded-xl border border-surface-highlight overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-highlight">
                        <div className="p-6">
                            <h4 className="text-primary font-bold mb-4 uppercase text-sm tracking-wider">Tối thiểu</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">OS:</span> <span className="col-span-2 text-gray-300">Windows 10 64-bit</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Processor:</span> <span className="col-span-2 text-gray-300">Intel Core i5-3570K or AMD FX-8310</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Memory:</span> <span className="col-span-2 text-gray-300">8 GB RAM</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Graphics:</span> <span className="col-span-2 text-gray-300">NVIDIA GeForce GTX 780 or AMD Radeon RX 470</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Storage:</span> <span className="col-span-2 text-gray-300">70 GB available space</span></li>
                            </ul>
                        </div>
                        <div className="p-6">
                            <h4 className="text-primary font-bold mb-4 uppercase text-sm tracking-wider">Khuyến nghị</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">OS:</span> <span className="col-span-2 text-gray-300">Windows 10 64-bit</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Processor:</span> <span className="col-span-2 text-gray-300">Intel Core i7-4790 or AMD Ryzen 3 3200G</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Memory:</span> <span className="col-span-2 text-gray-300">12 GB RAM</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Graphics:</span> <span className="col-span-2 text-gray-300">GTX 1060 6GB / GTX 1660 Super or Radeon RX 590</span></li>
                                <li className="grid grid-cols-3 gap-2"><span className="text-gray-500">Storage:</span> <span className="col-span-2 text-gray-300">70 GB SSD</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Reviews */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Đánh giá người dùng
                    </h3>
                    <button className="text-primary text-sm font-bold hover:underline">Viết đánh giá</button>
                </div>
                <div className="grid gap-4">
                    {/* Review Card 1 */}
                    <div className="bg-surface-dark p-4 sm:p-6 rounded-xl border border-surface-highlight">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">A</div>
                                <div>
                                    <p className="text-white font-medium text-sm">Alex Gamer</p>
                                    <p className="text-gray-500 text-xs">Đã chơi 120 giờ</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 text-xs">
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm">Game tuyệt vời! Cốt truyện sâu sắc, đồ họa đẹp mê hồn. Mặc dù còn vài bug nhỏ nhưng không ảnh hưởng nhiều đến trải nghiệm. Xứng đáng đồng tiền bát gạo.</p>
                    </div>
                    {/* Review Card 2 */}
                    <div className="bg-surface-dark p-4 sm:p-6 rounded-xl border border-surface-highlight">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-surface-highlight flex items-center justify-center text-white font-bold overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJkZrg3HJBj5BkHDXPE-LifRhaPSjLueh6B1WNZpTUk2kUROw0a4js-jzTRAkyCbZ-5taKIunO1TMhjCCVsOHet9XoO-OxdbMbwelHvco5hGhyoBoOOuGVR5seDfjOnfNq8eWeoD0biLGfynU1hK0f5gMSnMkAgANFvK3oUBLRHlkMkF_DCtZY_ZopJ-97XTk7rI-a1bD-B0sIisYld9RItoQq1ix749VhF_YmIWajrJKZBgTB5x7h1JSs_vaADqr10bGFVOzvHSR" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Minh Tuấn</p>
                                    <p className="text-gray-500 text-xs">Đã chơi 45 giờ</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 text-xs">
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="material-symbols-outlined text-sm text-gray-600">star</span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm">Gameplay ổn, thế giới rộng lớn nhưng hệ thống lái xe cần cải thiện thêm. Âm nhạc trong game là một điểm cộng cực lớn.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GameDescription;
