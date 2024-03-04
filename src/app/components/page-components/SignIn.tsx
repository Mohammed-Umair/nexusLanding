import { Box, Modal } from '@mui/material'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Text from '../utility-components/text/Text'
import Button from '../utility-components/buttons/Button'
import GoogleIcon from '@mui/icons-material/Google';
import Flex from '../utility-components/flex/Flex';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../utility-components/input/Input';
import NexusLogo from '../../../assets/images/NexusLogo.svg'
import IconButton from '../utility-components/buttons/IconButton';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK, log } from "@web3auth/base";
import { useEffect, useState } from "react"
import ButtonWithIcon from '../utility-components/buttons/ButtonWithIcon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useIsMobile from '@/app/hooks/useIsMobile';
import { SocialIcons } from '@/app/config/SocialLogins'
import useIsBig from '@/app/hooks/useIsBig';
import useIsTab from '@/app/hooks/useIsTab';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { Boy, CopyAll, DisabledByDefault, List, Man, Man2Rounded, Man3, Person, VerifiedUserSharp } from '@mui/icons-material';
import ReferralModal from '../utility-components/modals/referrals';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper', 
  boxShadow: 24, 
  borderColor: "#0081ff"
};



const SignIn = () => {
  const [viewMore, setViewMore] = useState(false)
  const isBig = useIsTab()
  const searchParams = useSearchParams()
  const [isModal, setIsmodal] = useState<boolean>(false);
  const refId = searchParams.get('refId');

  const [referrals, setReferrals] = useState<any>([]);
  const [profile, setProfile] = useState<any>(null);
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<any>(null);
  const [errorText, setErrorText] = useState<any>(null);
  const clientId: any = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID
  const isMobile = useIsMobile()
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const [access_token,setAccessToken] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    // setWeb3auth(1)
    // console.log(web3auth);

    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET, // import {WEB3AUTH_NETWORK} from "@web3auth/base";
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth",
          },

          uiConfig: {
            //   appName: "Nexus",
            //   mode: "light", // light, dark or auto
            //   loginMethodsOrder: ["google", "twitter", "facebook", "apple",],
            //   logoLight: "https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Nexus+logo+mark+Dark.svg",
            //   logoDark: "https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Nexus+logo+mark+Dark.svg",
            //   defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
            //   loginGridCol: 3,
            //   primaryButton: "socialLogin", // "externalLogin" | "socialLogin" | "emailLogin"
          },
        });
        //   console.log(web3auth);

        await web3auth.initModal();
        setWeb3auth(web3auth);

        if (web3auth.status === "connected") {
          setProvider(web3auth.provider);
          loginSignup(web3auth, web3auth.provider);

          // getUserInfo();
          // getAccounts();
        }
        else {
          // await web3auth?.connect();
        }
      } catch (error) {
        console.log(error);
      }
    };

    init();


  }, []);


  useEffect(() => {
    getUser()
  }, [access_token])

  useEffect(() => {
    if (refId) {
      getReferer()
    }
  }, [refId])

  const copy = (text: any) => {
    navigator.clipboard.writeText(text)
  }

  const getReferer = async () => {


    try {
      let config = {
        method: "get",
        url: API_URL + `/get/referer?id=${refId}`,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json"
        }
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === "OK") {
            // setProfile(response.data.profile)
          }
          if (response.data.status === "NOT OK") {
            setErrorText(response.data.message)
          }
        })
        .catch((error) => {

          console.log("axios", error);
          // setStatusText("Internal Error");
        });
    } catch (e) {
      console.log(e);

    }
  }

  const getUser = async () => {


    try {
      let config = {
        method: "get",
        url: API_URL + `/get/me?token=${access_token}`,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "application/json"
        }
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.status === "OK") {
            setProfile(response.data.profile)
            setReferrals(response.data.referrals)
          }
        })
        .catch((error) => {

          console.log("axios", error);
          // setStatusText("Internal Error");
        });
    } catch (e) {
      console.log(e);

    }
  }


  const isConnected = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return false;
    }
    return web3auth.status === "connected";
  };

  const login = async () => {
    const _isConnected = await isConnected();
    // alert(_isConnected)
    if (_isConnected) {
      // alert("Already loggedin");
      loginSignup(web3auth, provider)
      return;
    }
    try {
      const web3authProvider = await web3auth?.connect();
      setProvider(web3authProvider);
      // loginSignup(web3auth,web3authProvider)
    }
    catch (e) {
      console.log(e)
    }


  }

  const loginSignup = async (_web3auth: Web3Auth | null, _provider: IProvider | null | undefined) => {
    const userInfo = await _web3auth?.getUserInfo();
    // const accounts = await provider?.();

    const eth_address: string = await _provider?.request({ method: "eth_accounts" }) || "";
    if (userInfo) {

      try {
        let config = {
          method: "post",
          url: API_URL + `/login`,
          maxBodyLength: Infinity,
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: userInfo?.email,
            fullName: userInfo?.name,
            address: eth_address[0],
            referredBy: refId || 0
          },
        };

        axios
          .request(config)
          .then(async (response) => {
            if (response.data.status === "OK") {
              localStorage.setItem('access_token', response.data.access_token)
              setAccessToken(response.data.access_token)
              getUser()
            }
            if (response.data.status === "NOT OK") {
              setErrorText(response.data.message)
              await web3auth?.logout();

            }
          })
          .catch((error) => {

            console.log("axios", error);
            // setStatusText("Internal Error");
          });
      } catch (e) {
        console.log(e);

      }
    }
  }

  const logout = async () => {
    const _isConnected = await isConnected();

    if (_isConnected) {
      await web3auth?.logout();
      setProvider(null);
      // localStorage.clear()
      // setProfile(false)
      return;
    }


  }


  const handleClose = () => {
    setIsmodal(false)
  }

  

  return (
    <Box sx={{
      backgroundColor: DEFAULT_COLORS.White,
      color: DEFAULT_COLORS.black,
      width: '100%',
      maxWidth: '350px',
      padding: '2rem',
      borderRadius: '25px',
      margin: '10px',
      marginTop: {
        xs: '1rem', sm: "0rem"
      }
    }}>
      {
        web3auth?.status == "connected" ?
          <>
            <Text color={DEFAULT_COLORS.black} fontFamily='SEN Bold' fontSize='30px' textAlign="center">Whitelisted!</Text>
            <Box mb="1rem">
              <Text color={DEFAULT_COLORS.Dark_Light} fontSize='15px' textAlign='center' lineHeight='20px' fontFamily='SEN Bold'>You Nexus account is connected.</Text>
            </Box>
            <Box mb="1rem" style={{ cursor: "pointer" }} onClick={() => setIsmodal(true)} >

              <Text color={DEFAULT_COLORS.Dark_Light} fontSize='15px' fontFamily='SEN Bold' textAlign='center' lineHeight='20px'>
                Your Referals: {referrals.length}  <Person style={{ cursor: "pointer", verticalAlign: "top", fontSize: "19px" }} />
              </Text>

            </Box>
            <Box mb="1rem" style={{ cursor: "pointer" }} onClick={() => copy(window.location.protocol + '//' + window.location.host + "?refId=" + profile?._id)} >

              <Text color={DEFAULT_COLORS.Dark_Light} fontSize='15px' fontFamily='SEN Bold' textAlign='center' lineHeight='20px'>
                Referal Code: {profile?._id}  <CopyAll style={{ cursor: "pointer", verticalAlign: "middle", fontSize: "14px" }} />
              </Text>

            </Box>
            <ButtonWithIcon icon={<IconButton hover={false} background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue}>
              <PowerSettingsNewIcon sx={{ color: DEFAULT_COLORS.Blue }} /></IconButton>} fullWidth background={DEFAULT_COLORS.Blue} onClick={() => logout()} >Disconnect
            </ButtonWithIcon>
          </>
          :
          <>
            <Text color={DEFAULT_COLORS.black} fontFamily='SEN Bold' fontSize='30px' textAlign="center">Sign up</Text>
            <Box mb="1rem">

              <Text color={DEFAULT_COLORS.Dark_Light} fontSize='15px' fontFamily='SEN Bold' textAlign='center' lineHeight='20px'>Your Nexus experience is one click away</Text>
            </Box>


            {/* <Button fullWidth background={DEFAULT_COLORS.Blue}><GoogleIcon /> Continue with Google</Button>

            <Flex style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Button fullWidth background={DEFAULT_COLORS.Blue} ><XIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><FacebookIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><GitHubIcon /></Button>
            </Flex>
            {
                viewMore && (
                    <Flex style={{ flexWrap: 'wrap' }} className='social'>
                        {SocialIcons.map((Icon, index) => (
                            <Button background={DEFAULT_COLORS.Blue} width={isBig ? '75px' : '120px'} key={index}><Icon fontSize='large' /></Button>
                        ))}
                    </Flex>
                ) 
            }
            <Button margin='1rem 0px' fullWidth background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.Light} onClick={() => setViewMore(!viewMore)}>{viewMore ? 'Show Less' : 'Explore More Login Options'}</Button>
 */}

            {/* <Box mt="1rem">

                <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} color={DEFAULT_COLORS.Light} fullWidth placeholder='Enter Your Email' />
            </Box> */}
            <Box mb={'1rem'}>

              {
                errorText &&
                <Text color={"red"} fontSize='15px' fontFamily='SEN Bold' textAlign='center' lineHeight='20px'>{errorText}</Text>

              }
            </Box>
            <Box mt={'0rem'}>
              {
                errorText && refId ?
                  <ButtonWithIcon style={{ "cursor": "not-allowed" }} icon={<IconButton background={"red"} color={DEFAULT_COLORS.Blue}   > <DisabledByDefault sx={{ color: DEFAULT_COLORS.White }} /></IconButton>} fullWidth background={"red"}  >Please try after sometime.</ButtonWithIcon>
                  :
                  <ButtonWithIcon icon={<IconButton background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue}   > <ArrowForwardIcon sx={{ color: DEFAULT_COLORS.Blue }} /></IconButton>} fullWidth background={DEFAULT_COLORS.Blue} onClick={() => login()} >Continue </ButtonWithIcon>
              }

            </Box>


          </>
      }
      <Text color={DEFAULT_COLORS.Dark_Light} fontSize='15px' textAlign='center' fontFamily='SEN Bold'>We do not store any personal information</Text>

      {
        isModal &&
        <Modal 
        open={isModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ReferralModal referrals={referrals} setIsmodal={setIsmodal} />
          </Box>
        </Modal>

      }
    </Box >

  )
}

export default SignIn
