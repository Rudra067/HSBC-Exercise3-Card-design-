import React from 'react';
import styled from 'styled-components'
import { FaFilePdf, FaFileExcel, FaChevronDown, FaSnapchat } from "react-icons/fa";

const Title = styled.span`
    font-size: 20px;
    color: #252525;
`;

const SubTitle = styled.span`
    font-size: 12px;
    color: #252525; 
`;

const Card = styled.div`
   border: 1px solid #252525;
   width:780px;
   margin: 8% 0 0 20%;
`;

const RequestWrapper = styled.div`
     display: flex; 
     margin-left:20px;
`;

const AuthorizeButton = styled.button`
    color: #ffffff;
    font-size: 15px;
    width: 80px;
    margin-left: 10px;
    background-color: #252525;
    border:none;
`;

const RejectButton =  styled.button`
    color: #252525;
    font-size: 15px;
    width: 80px;
    background-color: #ffffff;
    border: 1px solid #252525;
`;

const TitleSection = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: 17px;
`;

const ActionSection = styled.span`
    margin-top: 15px;
    margin-left: 115px;
`;

const Pdf = styled.span`
    padding: 0 20px 0 20px;
    border-right: 1px solid #767676;
`;
const Excel = styled.span`
    padding: 0 20px 0 20px;
`;

const DetailWrapper = styled.span`
    margin-top: 20px;
    margin-bottom: 18px;
    display: flex;
    margin-left:20px;
`;

const RequestDetail = styled.span`
    display: flex;
    width: 85%;
`;

const Details = styled.span`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #767676;
    padding-left: 10px;
    padding-right: 25px;
`;

const DetailHead = styled.span`
    font-size: 12px;
    color: #767676;
`;

const DetailValue = styled.span`
    font-size: 12px;
    color: #252525;
`;

const Link = styled.a`
    color: #252525;
    cursor: pointer;
    font-size: 15px;
    padding-top: 15px;

    &:hover {
        color: #252525;
    }
`;

const Pending = styled.span`
    padding-left: 6px;
`;



export default function CardContainer() {
    return (
        <div>
            <h4>Exercise 3</h4>
            <Card>
                <RequestWrapper>
                   <TitleSection>
                      <Title>Cancel / recall payment, GBP 1,000.00</Title>
                      <SubTitle>1234567890123456 (GB), KUIML Business Company</SubTitle>
                   </TitleSection>
                   <ActionSection>
                       <Pdf>
                         <FaFilePdf />
                       </Pdf>
                       <Excel>
                         <FaFileExcel />
                       </Excel>
                      <RejectButton>Reject</RejectButton>
                      <AuthorizeButton>Authorize</AuthorizeButton>
                   </ActionSection>
                </RequestWrapper>
                <DetailWrapper>
                   <RequestDetail>
                       <Details>
                            <DetailHead>Request reference</DetailHead>
                            <DetailValue>SET29383ABCH</DetailValue>
                       </Details>
                       <Details>
                            <DetailHead>Category</DetailHead>
                            <DetailValue>Payment</DetailValue>
                       </Details>
                       <Details>
                            <DetailHead>Request status</DetailHead>
                            <DetailValue><FaSnapchat /><Pending> Pending authorisation </Pending></DetailValue>
                       </Details>
                   </RequestDetail>
                   <Link>Full Details <FaChevronDown /></Link>
                </DetailWrapper>
            </Card>
    </div>
    )
}