import React from 'react';
import GameDetailHeader from '../../component/GameDetail/GameDetailHeader';
import Breadcrumbs from '../../component/GameDetail/Breadcrumbs';
import MediaGallery from '../../component/GameDetail/MediaGallery';
import ProductInfo from '../../component/GameDetail/ProductInfo';
import ContentTabs from '../../component/GameDetail/ContentTabs';
import GameDescription from '../../component/GameDetail/GameDescription';
import SimilarGames from '../../component/GameDetail/SimilarGames';
import GameDetailFooter from '../../component/GameDetail/GameDetailFooter';

const GameDetail: React.FC = () => {
    return (
        <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
            <GameDetailHeader />
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Breadcrumbs />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    <MediaGallery />
                    <ProductInfo />
                </div>
                <div className="mb-16">
                    <ContentTabs />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <GameDescription />
                        <SimilarGames />
                    </div>
                </div>
            </main>
            <GameDetailFooter />
        </div>
    );
};

export default GameDetail;
