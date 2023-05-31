import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const ForgotPass = () => {

    const [newPass, setNewPass] = React.useState('')
    const [err, setErr] = React.useState(false)
    const [email, setEmail] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newPass, email }),
        })
        const data = await response.json()
        if (data.error) {
            setErr(data.error)
        } else {
            setErr(false)
            window.location.href = '/'
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box
                sx={{
                    width: '27%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: '-6rem'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Enter email assosciated with your account"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type='password'
                        id="newPass"
                        label="Enter new password"
                        name="newPass"
                        autoComplete="newPass"
                        autoFocus
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                    />

                    {err && <span className='err' style={{ color: 'red' }}>'Something went wrong!'</span>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ForgotPass