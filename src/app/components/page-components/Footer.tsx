import Button from "../utility-components/buttons/Button"
import Flex from "../utility-components/flex/Flex"
import Image from "../utility-components/image/Image"
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import { DEFAULT_COLORS } from "@/app/utils/colors";
import { Box } from "@mui/material";
import { IMAGE_COLLECTIONS } from "@/app/utils/images";

const Footer = () => {
    return (
        <Flex justifyContent='space-between' style={{ padding: '2rem', position: 'absolute', bottom: '0px', left: '0px', right: '0px', zIndex: '100' }}>
          
                <Image src={IMAGE_COLLECTIONS.NexusIcon} width="100px" /> 
            
            <Flex>
                <Button borderRadius="25px" padding=".6rem 1.2rem">
                    <a href="https://t.me/NexusLaunchpad" target="_blank">

                    <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',
                    }}>
                        <TelegramIcon fontSize="small" />
                    </Box>
                    </a>
                    <a href="https://twitter.com/NexusLaunchpad" target="_blank">

                    <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',

                    }}> <XIcon fontSize="small" /></Box>
                    </a>

                </Button>
            </Flex>
        </Flex>
    )
}

export default Footer
