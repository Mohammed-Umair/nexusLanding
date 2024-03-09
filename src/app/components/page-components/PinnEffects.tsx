import React from 'react'
import PinnedSection from './cards/PinnedSection'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import { Box } from '@mui/material'
import Flex from '../utility-components/flex/Flex'
import useIsMobile from '@/app/hooks/useIsMobile'
import Main1 from '@/../public/Images/pin-main1.png'
import { StaticImageData } from 'next/image'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import useIsTab from '@/app/hooks/useIsTab'

interface MyComponentProps {
    stack: number;
}

const PinnEffects = ({ stack }: MyComponentProps) => {

    const isMobile = useIsMobile()
    const isTab = useIsTab()
    return (
        <Box p={'4rem 4rem 0rem 0rem'} className="right" >
            <Flex flexDirection="column" justifyContent='center' alignItems={isTab ?'start':'start'}>

                <div >
                    <PinnedSection isActive={stack === 1 ? true : false} title='Engage' image={'/Images/pin-mini1.png'} description='Engage with Nexus community and compete with others in sharing the upcoming launches for a chance to win a spot.' />
                </div>

                <div >
                    <PinnedSection isActive={stack === 2 ? true : false} title='Snapshot' image={'/Images/pin-mini2.png'} description='Snapshots are taken of all the competing profiles and wallets.' />
                </div>

                <div >
                    <PinnedSection isActive={stack === 3 ? true : false} title='Lottery' image={'/Images/pin-mini3.png'} description='Nexus smart contract withdraws a lottery for each launch and selects limited random profiles which will be investing.' />
                </div>

                <div >
                    <PinnedSection isActive={stack === 4 ? true : false} title='Contribution' image={'/Images/pin-mini4.png'} description='Selected profiles and wallets invest their funds into the sale and claim purchased tokens according to the vesting period.' />
                </div>

            </Flex>
        </Box>
    )
}

export default PinnEffects
