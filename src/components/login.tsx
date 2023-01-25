import { Stack, TextField, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export const LoginPage = () => {
    const [value, setValue] = useState('')
    const [passValue, setPassValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack 
            direction='column' 
            spacing={3}
            alignItems='center'
            style={{
                transform: 'translate(0%, 50%)',
            }}
            >
                <Typography variant='h2'>Login</Typography>
                <TextField 
                    label = 'Email' 
                    required value={value}
                    onChange={e => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : ''}

                    style={{
                        width:"30%",    
                    }}
                    >
                </TextField>
                <TextField 
                    label = 'Password' 
                    type = 'password' 
                    required value={passValue} 
                    onChange={e => setPassValue(e.target.value)} 
                    error={!passValue} 
                    helperText={!passValue ? 'Required' : ''}
                    
                    style={{
                        width:"30%",
                    }}
                    >
                </TextField>
                <Button
                    variant='contained'
                    href='https://www.google.com/'
                    style={{
                        fontSize:20,
                    }}>
                        Login
                </Button>
            </Stack>
        </Stack>
    )
}