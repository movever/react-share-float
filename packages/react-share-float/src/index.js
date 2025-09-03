"use client"
import {useState, useEffect} from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    MailruShareButton,
    LivejournalShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,
    HatenaShareButton,
    EmailShareButton,
    FacebookIcon,
    XIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    WeiboIcon,
    PocketIcon,
    InstapaperIcon,
    HatenaIcon,
    EmailIcon, FacebookMessengerShareButton, FacebookMessengerIcon
} from 'react-share';
import {ChevronsRight, MoreHorizontal, X} from 'lucide-react';
import {cn} from "@utils/index";


export default function FloatingShareButton() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [canNativeShare, setCanNativeShare] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    // 检测移动端
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 检测是否支持原生分享（仅在客户端执行）
    useEffect(() => {
        try {
            setCanNativeShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function');
        } catch (_) {
            setCanNativeShare(false);
        }
    }, []);

    // 分享配置
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://puzzlepave.com';
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://puzzlepave.com';
    const mediaUrl = `${origin}/puzzlepave-screenshot1.jpg`;
    const shareTitle = 'PuzzlePave - Master the Art of Spatial Logic';
    const shareDescription = 'PuzzlePave is an addictive logic puzzle game that challenges your spatial reasoning and problem-solving skills. Perfect for polyomino puzzles and packing puzzles enthusiasts.';

    // 移动端使用原生分享API
    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareDescription,
                    url: shareUrl,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // 降级到展开分享按钮
            setIsExpanded(!isExpanded);
        }
    };

    // 桌面端展开/收起
    const handleToggle = () => {
        console.log('Toggle clicked, current state:', isExpanded);
        setIsExpanded(!isExpanded);
    };


    return (
        <>
            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
                {/* 展开的分享按钮 - 使用绝对定位与变换，默认在屏幕外，点击滑入 */}
                <div
                    className={cn(
                        "left-12 top-0 bg-white border border-gray-200 p-2 transition-all duration-300 transform",
                        isExpanded ? "rounded-tr border-b-0" : "rounded-r"
                    )}
                    style={{
                        transform: `translateX(${isExpanded ? '0' : '-120%'})`,
                        opacity: isExpanded ? 1 : 0,
                        pointerEvents: isExpanded ? 'auto' : 'none',
                        zIndex: 51,
                    }}
                >
                    <div className="flex flex-col gap-2">
                        {/* 优先显示：Twitter / Facebook / Reddit */}
                        <TwitterShareButton url={shareUrl} title={shareTitle}>
                            <XIcon size={32} round/>
                        </TwitterShareButton>
                        <FacebookShareButton url={shareUrl} quote={shareDescription}>
                            <FacebookIcon size={32} round/>
                        </FacebookShareButton>
                        <RedditShareButton url={shareUrl} title={shareTitle}>
                            <RedditIcon size={32} round/>
                        </RedditShareButton>

                        {/* 其它平台：通过 Other 展开 */}
                        {showMore && (
                            <>
                                <LinkedinShareButton url={shareUrl} title={shareTitle} summary={shareDescription}>
                                    <LinkedinIcon size={32} round/>
                                </LinkedinShareButton>
                                <WhatsappShareButton url={shareUrl} title={shareTitle}>
                                    <WhatsappIcon size={32} round/>
                                </WhatsappShareButton>
                                <EmailShareButton url={shareUrl} subject={shareTitle} body={shareDescription}>
                                    <EmailIcon size={32} round/>
                                </EmailShareButton>
                            </>
                        )}

                        {/* 原生分享 - 靠底部显示（如果支持） */}
                        {canNativeShare && (
                            <button
                                onClick={handleNativeShare}
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200 flex items-center justify-center"
                                aria-label="Native Share"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                </svg>
                            </button>
                        )}

                        {/* Other 开关按钮 - 放在最下方 */}
                        <button
                            onClick={() => setShowDialog(true)}
                            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-full p-2 transition-colors flex items-center justify-center"
                            aria-label="Other share options"
                        >
                            <MoreHorizontal className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                {/* 主分享按钮 */}
                <button
                    onClick={handleToggle}
                    className={cn("bg-white hover:bg-gray-50 text-gray-700 rounded-r border border-l-0 transition-all duration-300",
                        isExpanded ? "rounded-tr-none px-4" : "rounded-r px-1"
                    )}
                    aria-label="Share"
                    aria-expanded={isExpanded}
                >
                    <ChevronsRight
                        className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                        size={20}/>
                </button>
            </div>
            {showDialog && (
                <div
                    className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setShowDialog(false)}
                >
                    <div
                        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowDialog(false)}
                            aria-label="Close"
                        >
                            <X className="w-4 h-4"/>
                        </button>
                        <div className="grid grid-cols-4 gap-3">
                            <TwitterShareButton url={shareUrl} title={shareTitle}>
                                <XIcon size={48} round/>
                            </TwitterShareButton>
                            <FacebookShareButton url={shareUrl} quote={shareDescription}>
                                <FacebookIcon size={48} round/>
                            </FacebookShareButton>
                            <RedditShareButton url={shareUrl} title={shareTitle}>
                                <RedditIcon size={48} round/>
                            </RedditShareButton>
                            <FacebookMessengerShareButton url={shareUrl}>
                                <FacebookMessengerIcon size={48} round/>
                            </FacebookMessengerShareButton>
                            <TelegramShareButton url={shareUrl} title={shareTitle}>
                                <TelegramIcon size={48} round/>
                            </TelegramShareButton>
                            <WhatsappShareButton url={shareUrl} title={shareTitle}>
                                <WhatsappIcon size={48} round/>
                            </WhatsappShareButton>
                            <LinkedinShareButton url={shareUrl} title={shareTitle} summary={shareDescription}>
                                <LinkedinIcon size={48} round/>
                            </LinkedinShareButton>
                            <PinterestShareButton url={shareUrl} media={mediaUrl} description={shareDescription}>
                                <PinterestIcon size={48} round/>
                            </PinterestShareButton>
                            <VKShareButton url={shareUrl}>
                                <VKIcon size={48} round/>
                            </VKShareButton>
                            <OKShareButton url={shareUrl} title={shareTitle} description={shareDescription}>
                                <OKIcon size={48} round/>
                            </OKShareButton>
                            <TumblrShareButton url={shareUrl} title={shareTitle}>
                                <TumblrIcon size={48} round/>
                            </TumblrShareButton>
                            <MailruShareButton url={shareUrl} title={shareTitle} description={shareDescription}>
                                <MailruIcon size={48} round/>
                            </MailruShareButton>
                            <LivejournalShareButton url={shareUrl} title={shareTitle} description={shareDescription}>
                                <LivejournalIcon size={48} round/>
                            </LivejournalShareButton>
                            <ViberShareButton url={shareUrl} title={shareTitle}>
                                <ViberIcon size={48} round/>
                            </ViberShareButton>
                            <WorkplaceShareButton url={shareUrl} quote={shareDescription}>
                                <WorkplaceIcon size={48} round/>
                            </WorkplaceShareButton>
                            <LineShareButton url={shareUrl} title={shareTitle}>
                                <LineIcon size={48} round/>
                            </LineShareButton>
                            <WeiboShareButton url={shareUrl} title={shareTitle} image={mediaUrl}>
                                <WeiboIcon size={48} round/>
                            </WeiboShareButton>
                            <PocketShareButton url={shareUrl} title={shareTitle}>
                                <PocketIcon size={48} round/>
                            </PocketShareButton>
                            <InstapaperShareButton url={shareUrl} title={shareTitle}>
                                <InstapaperIcon size={48} round/>
                            </InstapaperShareButton>
                            <HatenaShareButton url={shareUrl} title={shareTitle}>
                                <HatenaIcon size={48} round/>
                            </HatenaShareButton>
                            <EmailShareButton url={shareUrl} subject={shareTitle} body={shareDescription}>
                                <EmailIcon size={48} round/>
                            </EmailShareButton>
                            {canNativeShare && (
                                <button
                                    onClick={handleNativeShare}
                                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center"
                                    aria-label="Native Share"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
