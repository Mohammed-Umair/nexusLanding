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
        <Flex justifyContent='space-between' style={{ padding: '1rem', position: 'absolute', bottom: '0px', left: '0px', right: '0px', zIndex: '100' }}>
            <Button background={DEFAULT_COLORS.Blue}>
                <Image src={IMAGE_COLLECTIONS.NexusIcon} width="100px" />
            </Button>
            <Flex>
                <Button borderRadius="25px" padding=".6rem 1.2rem">
                    <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',
                    }}>
                        <TelegramIcon fontSize="small" />
                    </Box>
                    <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',

                    }}> <XIcon fontSize="small" /></Box>

                    <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer'
                    }}>

                        <GoogleIcon fontSize="small" />
                    </Box>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Footer
