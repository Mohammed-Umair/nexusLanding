import Container from '../utility-components/container/Container'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Flex from '../utility-components/flex/Flex'
import Input from '../utility-components/input/Input'
import TextField from '../utility-components/input/TextField'
import ButtonWithIcon from '../utility-components/buttons/ButtonWithIcon'
import IconButton from '../utility-components/buttons/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material'
import Text from '../utility-components/text/Text'
import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [done, setDone] = useState('')
    const handleSubmit = () => {
        setDone('')
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setDone('Please fill the form')
            setTimeout(() => { setDone('') }, 10000)
            return false
        }

        axios.post('https://kirby-test-api.vercel.app/sendConfirmationEmail', {
            email,
            name,
            message // Sending form data to the server
        }).then((response) => {
            console.log(response.data);
            setDone('Message Sent Successfully')
            setTimeout(() => { setDone('') }, 10000)
            setName(''); setEmail(''); setMessage('');
            // Handle success response from the server
        }).catch((error) => {
            console.error('Error occurred:', error);
            setDone('Error sending message')
            setTimeout(() => { setDone('') }, 10000)
            setName(''); setEmail(''); setMessage('');
            // Handle error response from the server
        });
    };

    return (
        <Container background={DEFAULT_COLORS.White} fullWidth maxWidth='400px' borderRadius='30px' padding='1.5rem' >
            <Flex flexDirection="column">
                <Text color={DEFAULT_COLORS.black} fontSize='24px' lineHeight='35px' fontFamily='SEN bold'>Contact Us</Text> 
                <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Dark_Light} fullWidth borderRadius='17px' placeholder='Enter Name' value={name} color={DEFAULT_COLORS.Light} onChange={(e) => setName(e.target.value)} />
                <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Dark_Light} fullWidth borderRadius='17px' placeholder='Enter Email' value={email} color={DEFAULT_COLORS.Light} onChange={(e) => setEmail(e.target.value)} />
                <TextField background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Dark_Light} fullWidth borderRadius='17px' placeholder='Message' value={message} color={DEFAULT_COLORS.Light} onChangeText={(e) => setMessage(e.target.value)} />
                {done.length > 0 && <Text color={DEFAULT_COLORS.black} fontSize='15px' lineHeight='15px'>{done}</Text>}
                <Box mt="1rem" mb="2rem" width="100%" >

                    <ButtonWithIcon fullWidth background={DEFAULT_COLORS.Blue} icon={<IconButton background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue}><ArrowForwardIcon /></IconButton>} onClick={handleSubmit}>Send Message</ButtonWithIcon>

                </Box>
            </Flex>

        </Container>
    )
}

export default ContactForm;
