 import React, { ComponentProps, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableContainer } from "@mui/material";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Close } from "@mui/icons-material";


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

const  ReferralModal = (props: {setIsmodal: any,referrals: any}) => {

//   const [field, setField] = React.useState("first");
//   const [reason, setReason] = React.useState(null);
//   const [value, setValue] = React.useState(0);
//   const [fund, setFund] = React.useState(0);
//   const [description, setDescription] = React.useState("");
//   const [errorText, setErrorText] = React.useState(null);
//   const [submitted, setSubmitted] = React.useState(false);
//   const [isForward,setIsforward]= React.useState(true)
//   const API_URL = process.env.NEXT_PUBLIC_API_URL;

const referrals = props.referrals ;
 
 

  return (
   <div>
    <Close onClick={() => props.setIsmodal(false)} style={{color: "#fff", cursor: "pointer", right: "0", transform: "translate(-50%, 50%)" , position: "absolute"}} />
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
    </TableContainer>

    {/* <Table>
        <TableBody>
    {referrals.map((v: { fullName: string ; }) => {
        return <tr><td>{v.fullName}</td></tr>
    })}
    </TableBody>
    </Table>     */}
    </div>
  )

}

export default ReferralModal;
