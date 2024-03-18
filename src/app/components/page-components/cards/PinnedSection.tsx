
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
    description: string,
    isActive: boolean
}
const PinnedSection = ({ title, image, description, isActive }: PinnedSectionProps) => {
    const isMobile = useIsMobile()

    return (
        <Box my="1rem" className="" >
            <Flex alignItems='start' justifyContent='start' gap={'2.5rem'} >
                <Flex flexDirection="column" gap={'0px'}>
                    {
                        isActive ? <div className='scale'><Image src={image} width='70px' style={{ marginBottom: '1rem' }} /></div> : <div className='dot'></div>
                    }
                    {
                        !isMobile && title !== "Contribution" && (<div style={{ height: isActive ? '50px' : '0px', border: isActive ? '' : 'none', marginLeft: isActive ? '0rem' : '2rem' }} className='horizontal-line'></div>)
                    }

                </Flex>
                <Box >
                    <Box mb={isActive ? '2rem' : '0rem'} ml={isActive ? '0rem' : '1.5rem'}>
                        <Text fontSize={isMobile || !isActive ? '25px' : '40px'} lineHeight='19px' fontFamily='SEN bold' color={DEFAULT_COLORS.White}>{title}</Text>
                    </Box>
                    <Box sx={{
                        transform: 'translateY(20px)',
                        transition: 'height 2s ease, transform 2s ease',
                        height: isActive ? 'auto' : '0px', // Set height to 'auto' when isActive is true, '0' when isActive is false
                        overflow: 'hidden', // Ensure content is hidden when height is 0
                        maxWidth: '350px', // Set maximum width
                    }}>
                        <Text fontSize={'15px'} color={DEFAULT_COLORS.Light} lineHeight='17px' maxWidth='350px'  >{description}</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default PinnedSection
