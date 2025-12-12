import React from 'react';

const SimilarGames: React.FC = () => {
    return (
        <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Game tương tự</h3>
            <div className="grid gap-4">
                {/* Card 1 */}
                <a className="group flex gap-4 bg-surface-dark p-3 rounded-lg border border-transparent hover:border-surface-highlight hover:bg-surface-highlight/30 transition-all" href="#">
                    <div className="w-20 h-24 shrink-0 rounded overflow-hidden bg-black">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6VrtcTDLe1wzYn33_Scgn76pMPugTBlujsIjiZ39vL6nt5uMaN9H5jgT8QHnM9qqsl9iHSw1WdrPBDkwKrZ76sAVuA4ZV26vKsbqugJkadKuf-RsrTL5aBzzTjq8a55KnpnfJE2zvI9EAWMOqTnR2HEFDsYYDp7X2Ua1BWKXovOmQukn1kdOO9ZOlRJBVBBUjvy4ADPdhIoO-FN_wLMDQb3B46oY-Z6BWOsFy4vIzQpqHp6UmUBtXBGgFSjLWYw3Wq4n1fNTU0UIA" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                        <div>
                            <h4 className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">Neon Horizon Zero</h4>
                            <p className="text-xs text-gray-500 mt-1">Action, RPG</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-primary">890.000₫</span>
                            <span className="text-xs bg-primary/20 text-primary px-1.5 rounded">-15%</span>
                        </div>
                    </div>
                </a>
                {/* Card 2 */}
                <a className="group flex gap-4 bg-surface-dark p-3 rounded-lg border border-transparent hover:border-surface-highlight hover:bg-surface-highlight/30 transition-all" href="#">
                    <div className="w-20 h-24 shrink-0 rounded overflow-hidden bg-black">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQMhn40VDVi11SUjleNOIF0v5SSf8McyE5_rVKtCClh8nsguUicglgQwdlLbXlS5PtRSjgFWzNqJBAwFr-lUgaGv9o4cwdZUU8GTLzsl0twMK8udLWTbvX-cI-KgPB1GbXplPtjwdQUEEvdphNuSC9d-MBU6UDX3Xg5PmoWLCZuNh33gE-Pl4pwrTCbOK8qa2TyqTh0YbHF4QK1SOPlFaaSyPPGyoRzAHTzUTxExIOG0fDSK-L952MvQbKO9I_2geN90E964VxMP3" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                        <div>
                            <h4 className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">Starfield Raiders</h4>
                            <p className="text-xs text-gray-500 mt-1">Space, Simulation</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">1.150.000₫</span>
                        </div>
                    </div>
                </a>
                {/* Card 3 */}
                <a className="group flex gap-4 bg-surface-dark p-3 rounded-lg border border-transparent hover:border-surface-highlight hover:bg-surface-highlight/30 transition-all" href="#">
                    <div className="w-20 h-24 shrink-0 rounded overflow-hidden bg-black">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZbEh3HvzqrTDBVFhd2gT-lEjxoT7-u2BtOkHd6IrvL-wsvTONHEYpyXMVWb_vUhR6fK_22e5jmIKuwxMkmh9dqXRXGnO4_XEl-MJHLR4gU6adfD3Cd5esWkFGaCUo6dwSzzc8iuGoX6CbdCj6V1KgMq_hyM0CGAZrdy9dMfNi7Q1uNCHV8dPMR2MXpqHo1JUhsqt5kNVEf5nLeiuQSKUtaOlDRlF3COt_fV0uIarM_zAj7LGcD-nnyOwCytw_B-daAcHp23-AN2B5" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                        <div>
                            <h4 className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">Shadows of Aethel</h4>
                            <p className="text-xs text-gray-500 mt-1">Dark Fantasy</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-primary">450.000₫</span>
                            <span className="text-xs bg-primary/20 text-primary px-1.5 rounded">-50%</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SimilarGames;
