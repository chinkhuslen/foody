import { Container } from '@mui/system';
import { Box } from '@mui/material';
import { useNavContext } from '../provider/navContext'
import { useRef } from 'react';
// ----------------------------------------------------------------
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import blackLogo from '../images/blackLogo.png'
//----------------------------------------------------------------
import {SignUpUser, LogInUser, SendEmailLink} from '../firebase/emailAuth'
const AdminLogIn = () => {
    const { setCurrentPage } = useNavContext();
    setCurrentPage('Гарах');
    const userEmail = useRef();
    const userPassword = useRef();
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ width: { xs: '150px', sm: '250px' } }}>
                    <img src={blackLogo} style={{ width: '100%', marginBottom: '70px' }} />
                </Box>
                <Avatar sx={{ m: 1, bgcolor: '#000723' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        placeholder='abc@email.com'
                        inputRef={userEmail}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        inputRef={userPassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#66B60F','&:hover': {
                            bgcolor: '#5fa315',
                        }, }}
                        onClick={()=> LogInUser(userEmail.current.value,userPassword.current.value)}
                    >
                        Log In
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3 }}
                        onClick={()=> SignUpUser(userEmail.current.value,userPassword.current.value)}
                    >
                        Sign Up
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{  mt:3,bgcolor: '#3a029c'}}
                        onClick={()=> SendEmailLink(userEmail.current.value)}
                    >
                        Send link to email
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
export default AdminLogIn