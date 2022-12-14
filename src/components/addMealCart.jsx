import { Card, CardContent, Typography, Button, Box, Badge, TextField, InputAdornment,CardMedia } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useButtonContext } from '../provider/buttonContext'
import { useEffect, useState } from 'react';
import { addFoodDataToFire } from '../firebase/foodMenu';
export const AddMealCart = () => {
    const { setIsAddMealClicked, isAddMealClicked } = useButtonContext();
    const [submitButton, setSubmitButton] = useState(false);
    const [foodImage, setFoodImage] = useState('');
    const [foodData, setFoodData] = useState({
        name: false,
        price: false,
        desc: false,
        category: false,
        portion: false,
        image: false,
    });
    useEffect(() => {
        if (foodData.name && foodData.price && foodData.desc && foodData.category && foodData.portion && foodData.image)
            setSubmitButton(true)
        else
            setSubmitButton(false)
    }, [foodData]);

    const sendData = () => {
        if (submitButton) {
            addFoodDataToFire({ ...foodData, image: '' }, foodData.image);
        }
    }
    return (
        <div id="addMeal">

            <Card sx={{ width: { xs: 350, sm: 550, md: 750 }, height: "80vh", overflow: 'scroll' }}>
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <IconButton onClick={() => setIsAddMealClicked(!isAddMealClicked)}>
                        <CloseIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <Typography sx={{ fontWeight: 700, fontSize: { sm: 24, xs: 18 }, lineHeight: '32px' }}>
                        Хоол нэмэх
                    </Typography>
                    <Button onClick={sendData} color='success' variant="contained" disabled={!submitButton} style={{ textTransform: 'none' }}>Хадгалах</Button>
                </CardContent>
                {/* ----------------- */}
                <CardContent sx={{ display: { sm: 'flex' }, justifyContent: 'space-evenly' }}>
                    <Box sx={{ m: '30px', display: { xs: 'flex', sm: 'block' }, justifyContent: { xs: 'center' } }}>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                // <IconButton sx={{ border: '2px solid #fff',backgroundColor:'#C4C4C4',"&:hover": { backgroundColor: "#C4C4C4" }}}>
                                //     <input type="file" hidden/>
                                //     <PhotoCameraIcon />
                                // </IconButton>
                                //     <span>
                                //     <input
                                //       color="primary"
                                //       accept="image/*"
                                //       type="file"

                                //       id="icon-button-file"
                                //       style={{ display: 'none', }}
                                //     />
                                //     <label htmlFor="icon-button-file">
                                //       <IconButton
                                //         component="span"
                                //         sx={{ border: '2px solid #fff',backgroundColor:'#C4C4C4',"&:hover": { backgroundColor: "#C4C4C4" }}}
                                //       >
                                //         <PhotoCameraIcon />
                                //       </IconButton>
                                //     </label>
                                //   </span>
                                <IconButton sx={{ border: '2px solid #fff', backgroundColor: '#C4C4C4', "&:hover": { backgroundColor: "#C4C4C4" } }} aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" onChange={(e) => {
                                        setFoodData({ ...foodData, image: e.target.files[0] })
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                            setFoodImage(event.target.result)
                                        };
                                        reader.readAsDataURL(e.target.files[0]);
                                    }} />
                                    <PhotoCameraIcon />
                                </IconButton>
                                // <Avatar sx={{ border: '2px solid #fff' }}><PhotoCameraIcon /></Avatar>
                            }
                        >
                            <Avatar sx={{ bgcolor: "#C4C4C4", width: { md: 200, sm: 150, xs: 150 }, height: { md: 200, sm: 150, xs: 150 } }} >
                                
                                <CardMedia
                                    src={foodImage}
                                    component='img'
                                    sx={foodImage === '' ? {display:'none'}:{ borderRadius: '50%' }}
                                />
                                {foodImage === '' && (
                                    <RestaurantIcon sx={{ fontSize: 70 }} />
                                )}
                            </Avatar>
                        </Badge>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '20px', sm: '30px' }, justifyContent: 'center', width: { xs: '100%', sm: '50%' } }}>

                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            label="Хоолны нэр"
                            placeholder="Энд бичнэ үү"
                            onChange={(event) => setFoodData({ ...foodData, name: event.target.value })}

                        />
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Дэлгэрэнгүй"
                            multiline
                            rows={4}
                            placeholder="Энд бичнэ үү"
                            onChange={(event) => setFoodData({ ...foodData, desc: event.target.value })}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <TextField
                                id="outlined-textarea"
                                label="Хоолны үнэ"
                                sx={{ width: '48%' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">₮</InputAdornment>
                                    ),
                                }}
                                placeholder="Энд бичнэ үү"
                                onChange={(event) => setFoodData({ ...foodData, price: event.target.value })}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Хоолны төрөл"
                                sx={{ width: '48%' }}
                                placeholder="Энд бичнэ үү"
                                onChange={(event) => setFoodData({ ...foodData, category: event.target.value })}
                            />
                        </Box>
                        <TextField
                            id="outlined-textarea"
                            label="Хоолны порц"
                            placeholder="Энд бичнэ үү"
                            onChange={(event) => setFoodData({ ...foodData, portion: event.target.value })}
                        />
                    </Box>
                </CardContent>
                {/* -------------- */}
                <CardContent>
                    <Typography variant="h5" component="div">
                        Coming soon...
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}