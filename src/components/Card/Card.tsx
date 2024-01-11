import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PortfolioContext, PortfolioContextValue, SiteType } from '../Context/WebsiteContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

interface MediaCardProps {
    site: SiteType;
}

const MediaCard: React.FC<MediaCardProps> = ({ site }) => {
    const { handleDelete } = useContext(PortfolioContext) as PortfolioContextValue;

    return (
        <>
            <div className="p-5 shadow-lg shadow-orange-300 ">
                <Card sx={{ maxWidth: 500 }}>
                    {site.link && site.logo && site.previewImgs && (
                        <Link to={`/view/${site._id}`}>
                            {site?.mainImg && (
                                <CardMedia sx={{ height: 400 }} image={site?.mainImg?.url} title="green iguana" />
                            )}
                        </Link>
                    )}
                    {!site.link && <CardMedia sx={{ height: 400 }} image={site?.mainImg?.url} title="green iguana" />}

                    <CardContent>
                        <Typography className="text-center" gutterBottom variant="h5" component="div">
                            {site.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={() => {
                                if (site._id) {
                                    handleDelete(site._id);
                                }
                            }}
                            variant="outlined"
                            color="secondary"
                        >
                            Delete
                        </Button>
                        <Link to={`/update/${site._id}`}>
                            <Button size="small">Update</Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default MediaCard;
