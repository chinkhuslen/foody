import { Card, CardActions, CardContent, Typography, Button, Box, Badge, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, MenuItem, Select } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react';
import {useButtonContext} from '../provider/buttonContext'
export const AddMealCart = () => {
    const [age, setAge] = useState('');
    const { setIsAddMealClicked,isAddMealClicked } = useButtonContext();
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div id="addMeal">

            <Card sx={{ width: { xs: 350, sm: 550, md: 750 }, height: "80vh",overflow:'scroll' }}>
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <IconButton onClick={()=>setIsAddMealClicked(!isAddMealClicked)}>
                        <CloseIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <Typography sx={{ fontWeight: 700, fontSize: { sm: 24, xs: 18 }, lineHeight: '32px' }}>
                        Хоол нэмэх
                    </Typography>
                    <Button variant="outlined" style={{ textTransform: 'none', backgroundColor: '#A0A2A8', color: '#fff', border: 'none' }} >Хадгалах</Button>
                </CardContent>
                {/* ----------------- */}
                <CardContent sx={{ display: { sm: 'flex' }, justifyContent: 'space-evenly' }}>
                    <Box sx={{ m: '30px', display: { xs: 'flex', sm: 'block' }, justifyContent: { xs: 'center' } }}>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                <Avatar sx={{ border: '2px solid #fff' }}><PhotoCameraIcon /></Avatar>
                            }
                        >
                            <Avatar sx={{ bgcolor: "#C4C4C4", width: { md: 200, sm: 150, xs: 150 }, height: { md: 200, sm: 150, xs: 150 } }} ><RestaurantIcon sx={{ fontSize: 70 }} /></Avatar>
                        </Badge>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '20px', sm: '30px' }, justifyContent: 'center', width: { xs: '100%', sm: '50%' } }}>

                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            label="Хоолны нэр"
                            placeholder="Энд бичнэ үү"

                        />
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Дэлгэрэнгүй"
                            multiline
                            rows={4}
                            placeholder="Энд бичнэ үү"
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
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Хоолны төрөл"
                                sx={{ width: '48%' }}
                                placeholder="Энд бичнэ үү"
                            />
                        </Box>
                        {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
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