import { useContext, useEffect, useState } from 'react';
import MediaCard from '../Card/Card';
import { PortfolioContext, PortfolioContextValue, SiteType } from '../Context/WebsiteContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Loading } from '../Loading/Loading';

export default function Portfolio() {
    const { websites } = useContext(PortfolioContext) as PortfolioContextValue;
    const [IsLoading, setIsLoading] = useState(true);
    const [sites, setsites] = useState<SiteType[]>([
        {
            title: '',
            titleInArabic: '',
            link: '',
            mainImg: { url: '', public_id: '' },
            logo: { url: '', public_id: '' },
            previewImgs: [{ url: '', public_id: '' }],
            _id: '',
        },
    ]);
    // useEffect(() => {
    //   (async () => {
    //     try {
    //      const result =  await getData();
    //      console.log(result);

    //     } catch (error) {
    //       console.log(error);

    //       navigator("/");
    //     }
    //   })();
    // }, []);

    useEffect(() => {
        setsites(websites);
        if (websites) {
            setIsLoading(false);
        }
    }, [websites]);

    return (
        <>
            {' '}
            {IsLoading && <Loading />}
            <div className="container min-h-screen  p-20">
                <div className="flex justify-end ">
                    <Link className="mb-5" to="/addWebsite">
                        <Button variant="contained" color="success">
                            Add Website
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-3  gap-10">
                    {sites?.map((site: SiteType, index: number) => <MediaCard key={index} site={site} />)}
                </div>
            </div>
        </>
    );
}
