

import { Badge, Box, Image, Icon, Grid, Container, Button, Text, SimpleGrid } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';

import { formatCurrency } from '../utilities/formatCurrency';


//* redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseCartQuantity } from '../Context/CartContext/action';


const Home = () => {
    const [ products, setProducts ] = useState([]);
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);

    let storeData = useSelector(store => store.storeData);
    let cartItems = useSelector(store => store.cartData);


    const handleCart = (item) => {
        const { id } = item;
        let newItem = { ...item };

        let find = cartItems.find(item => item.id === id);
        if (!find) {
            newItem.quantity = 1;
            dispatch(addToCart(newItem));
        } else {
            dispatch(increaseCartQuantity(id));
        }
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 300);
        setProducts(storeData)
    }, []);

    return (
        <Container maxW='container.xl'>

            <Text fontSize={ '6xl' }>Store </Text>

            { !loading ?
                <SimpleGrid columns={ [ 1, 2, 3, 4 ] } spacing='40px' pt='10' >
                    { products && products.map((item) => (
                        <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden'>

                            <Image src={ item.image } alt={ item.category } h='200px' w='full' p='2'
                                objectFit='contain' />

                            <Box p='6'>

                                <Box display='flex' alignItems='baseline'>

                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        Category
                                    </Badge>

                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        { item.category }
                                    </Box>
                                </Box>

                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={ 1 }
                                >
                                    { item.title }
                                </Box>

                                <Box as='h1' color='gray.600' fontWeight='bold'>
                                    { formatCurrency(item.price) }
                                </Box>

                              

                                <Box w='full' as='button' mt={ 10 } onClick={ () => handleCart(item) }>
                                    <Button w='full' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid skyblue' } } >+ADD TO CART</Button>
                                </Box>

                            </Box>
                        </Box>
                    ))

                    }</SimpleGrid>

                : < h1>wait</h1>
            }
        </Container>
    );

};

export default Home;