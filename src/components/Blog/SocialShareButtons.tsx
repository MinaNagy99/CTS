import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa';

interface porpsType {
    url: string;
    title: string | number | boolean;
}
function shareOnFacebook() {
    const urlToShare = window.location.href;
    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`,
        'Share on Facebook',
        'width=600,height=400'
    );
}

const SocialShareButtons: React.FC<porpsType> = ({ url, title }) => {
    return (
        <div className="  d-flex justify-content-around w-50 m-auto mt-4" onClick={shareOnFacebook}>
            <a
                target="_blank"
                rel="noreferrer"
                className="mx-2"
                href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
            >
                <FaFacebookSquare className="text-facebook fs-1 w-12 h-auto" />
            </a>
            <a target="_blank" className="mx-2" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}`}>
                <FaTwitterSquare className="text-twitter fs-1 w-12 h-auto" />
            </a>
            <a
                target="_blank"
                className="mx-2"
                rel="noreferrer"
                href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
            >
                <FaRedditSquare className="text-reddit fs-1 w-12 h-auto" />
            </a>
            <a target="_blank" className="mx-2" rel="noreferrer" href={`https://api.whatsapp.com/send/?text=${url}`}>
                <FaWhatsappSquare className="text-whatsapp fs-1 w-12 h-auto" />
            </a>
        </div>
    );
};

export default SocialShareButtons;
