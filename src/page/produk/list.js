import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArchLayout from 'components/general/ArchLayout'
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from 'react-redux'
import { getAllDataProduk } from 'actions';

export default function MediaCard() {
    const dispatch = useDispatch()
    const { produk: { dataList } } = useSelector(state => state)

    function fetchData() {
        dispatch(getAllDataProduk())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ArchLayout>
            <Grid container>
                {
                    dataList?.map((value, index) => (
                        <Grid xs={3.8} margin={1} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={value.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Populixs are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Typography gutterBottom marginTop={5} variant="h6" component="div">
                                        Rp {value.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </ArchLayout>
    );
}