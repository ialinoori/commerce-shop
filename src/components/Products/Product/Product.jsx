import React from 'react';
//MUI
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
//Styles
import useStyles from "./styles"
//Icon
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Product = ({product,onAddToCart,}) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.name} 
                        </Typography>
                        <Typography variant='h5' >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography style={{color:"white"}} dangerouslySetInnerHTML={{__html:product.description}} variant='body2' color="textSecondary"/>
                </CardContent>
                
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton onClick={()=>onAddToCart(product.id,1)} aria-label='Add to Cart'>
                        <AddShoppingCartIcon style={{color:"white"}}/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Product;