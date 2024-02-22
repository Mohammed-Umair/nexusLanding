import { Box } from '@mui/material'
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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '../utility-components/buttons/IconButton';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { useEffect, useState } from "react"
import ButtonWithIcon from '../utility-components/buttons/ButtonWithIcon';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const SignIn = () => {


  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<any>(null);
  const clientId: any = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENTID

  useEffect(() => {
    // setWeb3auth(1)
    // console.log(web3auth);

    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET, // import {WEB3AUTH_NETWORK} from "@web3auth/base";
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth",
          },
          uiConfig: {
            appName: "Nexus",
            mode: "light", // light, dark or auto
            loginMethodsOrder: ["google", "twitter", "facebook", "apple",],
            logoLight: "https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Nexus+logo+mark+Dark.svg",
            logoDark: "https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/Nexus+logo+mark+Dark.svg",
            defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl
            loginGridCol: 3,
            primaryButton: "socialLogin", // "externalLogin" | "socialLogin" | "emailLogin"
          },
        });
        console.log(web3auth);

        await web3auth.initModal();
        setWeb3auth(web3auth);

        if (web3auth.status === "connected") {
          setProvider(web3auth.provider);
          // getUserInfo();
          // getAccounts();
        }
        else {
          await web3auth?.connect();
        }
      } catch (error) {
        console.log(error);
      }
    };

    init();


  }, []);



  const isConnected = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return false;
    }
    return web3auth.status === "connected";
  };

  const login = async () => {
    const _isConnected = await isConnected();
    if (_isConnected) {
      // alert("Already loggedin");
      return;
    }
    try {
      const web3authProvider = await web3auth?.connect();
      setProvider(web3authProvider);
    }
    catch (e) {
      console.log(e)
    }


  }

  const logout = async () => {
    const _isConnected = await isConnected();
    if (_isConnected) {
      await web3auth?.logout();
      setProvider(null);
      return;
    }


  }


  return (
    <Box sx={{
      marginBottom: '3rem'
    }}>
      {/* <Text color={DEFAULT_COLORS.black} fontFamily='SEN Bold' fontSize='30px' textAlign="center">Sign up</Text>
            <Box mb="2rem">

            <Text color={DEFAULT_COLORS.Light} fontSize='15px' textAlign='center' lineHeight='20px'>Your Nexus experience is one click away</Text>
            </Box>
            <Button fullWidth background={DEFAULT_COLORS.Blue}><GoogleIcon /> Continue with Google</Button>
            <Flex style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><XIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><FacebookIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><GitHubIcon /></Button>
            </Flex>
            <Button fullWidth background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.Light}>Explore More Login Options</Button>
            <Text color={DEFAULT_COLORS.Light} fontSize='13px' textAlign='center'>We do not store any personal information</Text>
            <Box mt="2rem">

            <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} color={DEFAULT_COLORS.Light} fullWidth placeholder='Enter Your Email' />
            </Box> */}


      {
        web3auth &&


        <Flex style={{ marginTop: '1rem' }}>
          {
            provider ?
              <>

                <ButtonWithIcon onClick={() => logout()} background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} borderRadius="30px" icon={
                  <IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowDownwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>
                } >Logout</ButtonWithIcon>
              </>
              :

              <ButtonWithIcon onClick={() => login()} background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} borderRadius="30px" icon={
                <IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowDownwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>
              } >Register Now</ButtonWithIcon>
          }
          <Button background={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.White} >Read Docs</Button>
        </Flex>

      }

    </Box >

  )
}

export default SignIn
