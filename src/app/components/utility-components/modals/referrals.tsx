import React, { ComponentProps, useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Close } from "@mui/icons-material";
import Image from "../image/Image";
import Heading from "../text/Heading";
import Flex from "../flex/Flex";
import Text from "../text/Text";
import { DEFAULT_COLORS } from "@/app/utils/colors";
import ShareIcon from '@mui/icons-material/Share';
import ButtonWithIcon from "../buttons/ButtonWithIcon";
import IconButton from "../buttons/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useIsMobile from "@/app/hooks/useIsMobile";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  borderRadius: '15px',
  p: 4,
};



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0081ff',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ReferralModal = (props: { setIsmodal: any, referrals: any, id: string }) => {

  //   const [field, setField] = React.useState("first");
  //   const [reason, setReason] = React.useState(null);
  //   const [value, setValue] = React.useState(0);
  //   const [fund, setFund] = React.useState(0);
  //   const [description, setDescription] = React.useState("");
  //   const [errorText, setErrorText] = React.useState(null);
  //   const [submitted, setSubmitted] = React.useState(false);
  //   const [isForward,setIsforward]= React.useState(true)
  //   const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const referrals = props.referrals;
  const _id = props.id
  console.log(referrals, 'ref');

  const URL = "/?refId=" + _id
  const TitleLink = window.location.protocol + '//' + window.location.host
  const FullURL = window.location.protocol + '//' + window.location.host + "?refId=" + _id


  const isMobile = useIsMobile()
  const [copied, setCopied] = useState(false)
  const copy = (text: any) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => { setCopied(false) }, 10000)
  }

  return (
    <div>
      <Box sx={{ backgroundColor: DEFAULT_COLORS.Blue }} borderRadius={'15px'}>
        <Grid container>
          <Grid item lg={6} sm={6} xs={12}>
            <Image src="/Images/modal-main.svg" width="90%" />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <Box maxWidth={'370px'} mt={isMobile ? '1rem' : '4rem'} display={'flex'} justifyContent={'center'} alignItems={{ sm: 'start', xs: 'center' }} gap={{ sm: '1rem', xs: '1rem' }} flexDirection={'column'} width={'100%'}>
              <Heading fontSize="60px" textAlign={isMobile ? 'center' : 'start'} lineHeight="45px">Refer More Members</Heading>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '5px 5px 5px 25px',
                borderRadius: '45px',
                width: { sm: '100%', xs: '90%' },
                cursor: 'pointer'
              }} onClick={() => copy(window.location.protocol + '//' + window.location.host + "?refId=" + _id)}>
                <Text color={DEFAULT_COLORS.black} fontSize={isMobile ? '12px' : '17px'} lineHeight="20px">{_id}</Text>
                <IconButton hover={false} background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.Blue}>
                  {copied ? <FileDownloadDoneIcon sx={{ color: DEFAULT_COLORS.White }} /> : <CopyAllIcon sx={{ color: DEFAULT_COLORS.White }} />}
                </IconButton>
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: { sm: 'start', xs: 'center' },
                alignItems: 'center',
                flexDirection: { sm: 'row', xs: 'column' },
                gap: '1rem',
                border: '1px solid white',
                padding: '20px 25px',
                borderRadius: '25px',
                width: { sm: '100%', xs: '80%' },
              }}>
                <Text fontSize="35px">{referrals.length}</Text>
                <Box mr={isMobile ? '0rem' : '3rem'}>
                  <Text maxWidth={isMobile ? '100%' : '100px'} lineHeight="25px" fontSize="18px" fontFamily="SEN bold">Total
                    Referrals </Text>
                </Box>
                <ButtonWithIcon onClick={handleOpen} icon={<IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.Blue} >
                  <ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>} fullWidth background={DEFAULT_COLORS.White}  >Refer More
                </ButtonWithIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ maxHeight: '250px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right" sx={{ paddingRight: '17rem' }}>ID</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflowY: 'scroll' }}>
              {referrals.map((row: { _id: string; fullName: string; email: string; }) => (
                <TableRow
                  key={row._id.toString()} // Convert _id to string before passing it as the key
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Text fontSize="20px" lineHeight="15px" fontFamily="SEN bold">{row.fullName}</Text>
                  </TableCell>
                  <TableCell align="right" >
                    <Text fontSize="20px" lineHeight="15px" fontFamily="SEN bold">{row._id}</Text>
                  </TableCell>
                  <TableCell align="right" >
                    <Text fontSize="20px" lineHeight="15px" fontFamily="SEN bold">{row.email ? row.email : 'Not provided'}</Text>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>

      </Box>
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              <Text color={DEFAULT_COLORS.black}>Share your Refferal code</Text>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem'
              }}>
                <TwitterShareButton
                  url={FullURL}
                  title={'Use my refferal code: '}
                  className="Demo__some-network__share-button"
                >
                  <XIcon size={42} round />
                </TwitterShareButton>
                <TelegramShareButton
                  url={TitleLink + URL}
                  title={'Use my refferal code: '}
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={42} round />
                </TelegramShareButton>
                <WhatsappShareButton
                  url={URL}
                  title={TitleLink}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={42} round />
                </WhatsappShareButton>
                <WeiboShareButton
                  url={URL}
                  title={TitleLink}
                  className="Demo__some-network__share-button"
                >
                  <WeiboIcon size={42} round />
                </WeiboShareButton>
              </Box>
            </Box>

          </Box>
        </Modal>
      </div>
    </div >
  )

}

export default ReferralModal;


{/* <Close onClick={() => props.setIsmodal(false)} style={{color: "#fff", cursor: "pointer", right: "0", transform: "translate(-50%, 50%)" , position: "absolute"}} />
<TableContainer component={Paper}>
 <Table sx={{ minWidth: 700 }} aria-label="customized table">
   <TableHead>
     <TableRow>
       <StyledTableCell>Your Refferals ({referrals.length})</StyledTableCell> 
     </TableRow>
   </TableHead>
   <TableBody>
     {referrals.map((row: { _id: React.Key | null | undefined; fullName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
       <StyledTableRow key={row._id}>
         <StyledTableCell component="th" scope="row">
           {row.fullName}
         </StyledTableCell>          
       </StyledTableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer> */}




