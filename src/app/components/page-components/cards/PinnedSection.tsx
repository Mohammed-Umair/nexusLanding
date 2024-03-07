
import Flex from '../../utility-components/flex/Flex'
import { Box } from '@mui/material'
import Image from '../../utility-components/image/Image'
import Text from '../../utility-components/text/Text'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import useIsMobile from '@/app/hooks/useIsMobile'
import { useEffect, useState } from 'react'

interface PinnedSectionProps {
    title: string,
    image: string,
    description: string
}
const PinnedSection = ({ title, image, description }: PinnedSectionProps) => {
    const isMobile = useIsMobile()

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Set isMounted to true when the component mounts
        setIsMounted(true);

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            setIsMounted(false);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount
    return (
        <Box my="1rem" className="" >
            <Flex alignItems='start' justifyContent='start' gap={'2.5rem'} className={isMounted ? 'mounted-class' : 'unmounted-class'}>
                <Flex flexDirection="column" justifyContent='start' className={isMounted ? 'mounted' : 'unmounted'}>
                    <Image src={image} width='70px' style={{ marginBottom: '1rem' }} />
                    {
                        !isMobile && title !== "Contribution" && (<div  className={isMounted ? 'mounted horizontal-line' : 'unmounted horizontal-line'}></div>)
                    }

                </Flex>
                <Box className={isMounted ? 'mounted' : 'unmounted'}>
                    <Box mb="2rem">
                        <Text fontSize={isMobile ? '25px' : '40px'} lineHeight='19px' fontFamily='SEN bold' color={DEFAULT_COLORS.White}>{title}</Text>
                    </Box>
                    <Text fontSize='15px' color={DEFAULT_COLORS.Light} lineHeight='17px' maxWidth='350px' >{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default PinnedSection
