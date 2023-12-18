import './HeaderAndLines.css';

interface Props {
    header: React.ReactNode | string;
}

export default function HeaderAndLines({ header }: Props) {
    return (
        <>
            <h2 className="headerService  mt-5">{header}</h2>
            <div className="lines  position-relative">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        </>
    );
}
