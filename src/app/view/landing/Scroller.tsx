import { Box } from '@mui/material'
import Heading from '../../components/utility-components/text/Heading'
import Flex from '../../components/utility-components/flex/Flex'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Image from '../../components/utility-components/image/Image'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import { useState } from 'react'


const Scroller = () => {
    const array = [1,2,3,4,5,6]


    return (
        <div style={{ height: '10vh', position: 'relative', bottom: '0rem' }}>
            <Box my={'10rem'}>

                <div className='scroller-container' >
                    <div className='scroller-content' >
                        <Flex className='scroller-content' gap="5rem" style={{width: '600px'}}>  
                            {
                                array.map((_, i) => (
                                    <>
                                        <Heading color={DEFAULT_COLORS.Light} fontSize='70px' lineBrake>Better Launches</Heading>
                                        <Image src={IMAGE_COLLECTIONS.Star} width='60px' />
                                        <Heading color={DEFAULT_COLORS.Light} fontSize='70px' lineBrake>With Nexus</Heading>
                                        <Image src={IMAGE_COLLECTIONS.Star} width='60px' />
                                    </>
                                ))
                            }

                        </Flex>

                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Scroller
