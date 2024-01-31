import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa';

interface porpsType {
    url: string;
    title: string;
}

const SocialShareButtons: React.FC<porpsType> = ({ url, title }) => {
    return (
        <div className="w-full  ">
            <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}
            >
                <FaFacebookSquare className="text-[#3b5998] fs-1 w-12 h-auto" />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}`}>
                <FaTwitterSquare className="text-[#00acee] fs-1 w-12 h-auto" />
            </a>
            <a target="_blank" rel="noreferrer" href={`http://www.reddit.com/submit?url=${url}&title=${title}`}>
                <FaRedditSquare className="text-[#ff4500] fs-1 w-12 h-auto" />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send/?text=${url}`}>
                <FaWhatsappSquare className="text-[#25D366] fs-1 w-12 h-auto" />
            </a>
        </div>
    );
};

export default SocialShareButtons;
