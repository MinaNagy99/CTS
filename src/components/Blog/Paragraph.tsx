export default function Paragraph({ paragraph }: { paragraph: string }) {
    return (
        <div className="mt-2">
            <p className="article-p text">{paragraph}</p>
        </div>
    );
}
