import React from 'react';

const MediaGallery: React.FC = () => {
    return (
        <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black group border border-surface-highlight shadow-lg shadow-black/50">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_jnmystm17nONb0wOdpRR5c_Ttfe3kL6TVpFn7lkw5y4TOaOucsslBG_mfUHnROyLzXzBbRgQ9gdWNlLjtZhlYZniZMO0b6VyWeREB2dNvychFFkRg6o5qs-kPmqIVWtSrE2BRL8YU7FNI_gp-Euv-I0R61FRvjKKBU_b-gu8YATowvXTJCoa2fXtlcCfotxvq-e-HuOBb-Jav18Q0o8do0Kf2vZKkXkXwsdLoM8__mqaDcLtNHHcONnS8YoJpeLOwIFvO3htYC_l")' }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="size-16 rounded-full bg-primary/90 text-background-dark flex items-center justify-center shadow-[0_0_20px_rgba(76,223,32,0.4)] group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                    </div>
                </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button className="relative w-24 sm:w-32 aspect-video shrink-0 rounded-lg overflow-hidden border-2 border-primary ring-2 ring-primary/20">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqRTKaSM3u8N_hRuQYqBUdgBjuPaAF0FCn0mZp1SY2yAqWmoEUzUyrpTVW32ZbFFnf9tMhGfll1uqJt2zrbyahN5wFahUKh4BqVUNmOLUSKLKAtEEEDd801WZLIvRuJR3OWA4AxE6k31gnd9WDxdC17I-80HhgHrHtX4I4UYzLYNAxWpmBqqwRo23c6zjkfrriVcVlUuf4k7KVmU2JmLeXyxA9BXJA9P6MuaD37jV4BiShQO-q4GkTyWHZrQ4SMVDG-apAu7ahK71_" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <span className="material-symbols-outlined text-white">play_circle</span>
                    </div>
                </button>
                <button className="w-24 sm:w-32 aspect-video shrink-0 rounded-lg overflow-hidden border border-transparent hover:border-white/50 transition-colors opacity-70 hover:opacity-100">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWk0gLNABX2ruSjW3WnPvvni6xv4kn5k2yAQPr0t8rn715z2RSf46b1S4gCYwGK_L_M8zh0WnHFW8OKlEkuJDnHyOcqOiDKkio_raHK4U0602Q4n45Ao4uK4lUbZAwiKAkVbe3n7-Wk8Xh9iqPskhiqYtRuieDUjfYgwbmD6sc07N4_dUmN99r5_hHK1DeKivKdaATyzTAJzBbPSf5Qc-PiB_EJjMU6V2IVv5eotw00O5XeiwdKUh2E9q5FkVphdyNdzRJeKBZyDdj" />
                </button>
                <button className="w-24 sm:w-32 aspect-video shrink-0 rounded-lg overflow-hidden border border-transparent hover:border-white/50 transition-colors opacity-70 hover:opacity-100">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4aJgC9VlN4zQm03PZyepu0TX0MKSp7C6kh0TqRGspaOYmPe-uQ49AbTnjJc873XPLjgwkRFZaZP1iUb37aLsd-DkSb_cWMprenOdsfApcxfAE3r6XFGsmeF5AmAkKnz9ZaOjcmdl2UvffccHUJhSvwvzqF5MvsHf07VDfKgCOy97gwVVgJOxdNE-IdFpCEQLVuavY2vTRPTUkeZngDQS-mR37Ndns0Da1CZ9W4fGjazmKdyuqQ-fFzKjI9Ny51Lj5VgyiDccewapP" />
                </button>
                <button className="w-24 sm:w-32 aspect-video shrink-0 rounded-lg overflow-hidden border border-transparent hover:border-white/50 transition-colors opacity-70 hover:opacity-100">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXGHP8dDahvQ1rMoJWE0bXh4ZnNCFd-OlO193wEG6D0frxXW4AMd6zzW81-lQkzcT2BvY2RKQYzaqhBYJTq3iMn5xnFocMarPTYRcIgfJquZ1VLk2ylYJxy1lTCZnVZFoxgoZYPK0iZVt-hcUIwau63lHtCmxsoaMra8jbItlnntqmrQU-K9vUjSwzgTXCYydz1UZ8H82-zOsjjmTemlAmSy3DcwuFU4e7ov_pecs4JYHXJpvi4d-NXabqCKaWakMPeGfSHKj2oFQJ" />
                </button>
            </div>
        </div>
    );
};

export default MediaGallery;
