
import Flex from '../../utility-components/flex/Flex'
import { Box } from '@mui/material'
import Image from '../../utility-components/image/Image'
import Text from '../../utility-components/text/Text'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import useIsMobile from '@/app/hooks/useIsMobile'

interface PinnedSectionProps {
    title: string,
    image: string,
    description: string
}
const PinnedSection = ({ title, image, description }: PinnedSectionProps) => {
    const isMobile = useIsMobile()
    return (
        <Box my="1rem" className="move-up">
            <Flex alignItems='start' >
                <Flex flexDirection="column">
                    <Image src={image} width='100px' />
                    {
                        !isMobile && title !== "Contribution" && (<div className='horizontal-line'></div>)
                    }

                </Flex>
                <Box >
                    <Box mb="1.5rem">
                        <Text fontSize={isMobile ? '25px' : '35px'} lineHeight='19px'>{title}</Text>
                    </Box>
                    <Text fontSize='11px' color={DEFAULT_COLORS.Light} lineHeight='17px' maxWidth='300px'>{description}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default PinnedSection
