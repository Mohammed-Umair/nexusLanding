import { Box, Container, Grid } from '@mui/material'
import { RefObject } from 'react'
import ContactForm from '@/app/components/page-components/ContactForm'
import Flex from '@/app/components/utility-components/flex/Flex'
import Image from '@/app/components/utility-components/image/Image'
import Heading from '@/app/components/utility-components/text/Heading'
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation'
import useIsMobile from '@/app/hooks/useIsMobile'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'

interface TargetProps {
    targetRef: React.RefObject<HTMLDivElement>;
}

const ContactSection = ({ targetRef }: TargetProps) => {
    const boxRef = useIntersectionAnimation() as RefObject<HTMLDivElement>;
    const isMobile = useIsMobile()
    return (

        <Container maxWidth="lg" sx={{ height: '100vh' }} ref={targetRef}>
            <Box my="6rem" ref={boxRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <Grid container>
                    <Grid item lg={6} sm={6} xs={12}>
                        <Flex flexDirection='column' gap='0px'>
                            <Heading color={DEFAULT_COLORS.White} lineHeight={isMobile ? '40px' : '65px'} fontSize='60px'>Ready To</Heading>
                            <Heading color={DEFAULT_COLORS.White} lineHeight={isMobile ? '40px' : '65px'} isGradient fontSize='60px'>Be Partners?</Heading>
                            <Box mt="4rem" className="move-up-down">
                                <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/contact-main.png'} width='100%' />
                            </Box>
                        </Flex>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12}>
                        <Flex>
                            <ContactForm />
                        </Flex>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default ContactSection

