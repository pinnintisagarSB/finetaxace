import React from 'react';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import "./Icard.css";
import { useParams } from 'react-router';
const Serviceinfo = () => {
    const sid = useParams();
    const sDetail = Info.filter(x=>x.id === parseInt(sid.id));
    const sd = sDetail[0];
    return (
        <div className="service_info">
            <div className="info-container">
                <div className="icard">
                     <div className="icard-container">
                        <h1 className="ttl">{sd.title}</h1>
                        <div className="combox">
                            <div className="sbox">
                                <h1>Services are:</h1>
                                {
                                    sd.options.map((v)=>{
                                    return <li>{v}</li>
                                })
                                }
                                <h1 className="price"><span>Price : </span>{sd.price} <span>excl.of gov tax</span></h1>
                                <h3>Government fee Approx 1500-4000 depending upon share capital or state of registered office</h3>
                                <NavLink  to="/contact" onClick={()=>{window.scrollTo(0,0)}}>
                                     <button className="con-link">Contact Now</button> 
                                </NavLink>  
                            </div>
                            <div className="wbox">
                                <h1>What You Get:</h1>
                                {
                                    sd.work.map((val)=>{
                                    return <li>{val}</li>
                                })
                                }
                            </div>
                            <div className="wbox">
                                <h1>Requried Documents:</h1>
                                {
                                    sd.docs.map((val)=>{
                                        return <li>{val}</li>
                                    })
                                }
                            </div>
                            {(parseInt(sid.id)===1)?(
                                <div className="wbox">
                                    <h1>For 12A and 80G Registrations Required Documents:</h1>
                                    <h3>All documents 3 sets:</h3>
                                    <li>Registration Certificate and Memorandum of association, Articles of association/Trust Deed</li>
                                    <li>NOC from Landlord (where registered office is situated), along with proof of his ownership</li>
                                    <li>Copy of PAN card of NGO</li>
                                    <li>Electricity Bill / House tax Receipt /Water Bill (photocopy)</li>
                                    <li>Evidence of welfare activities carried out and Progress Report since inception or last 3 years</li>
                                    <li>A note specifying the main area of your charitable/ religious activities and a projection/ plan for the main charitable/ religious activities to be undertaken in the next two years</li>
                                    <li>Balance sheet, Profit and loss, ITR and Audit Report of last 3years</li>
                                    <li>List of donors along with their address and PAN</li>
                                    <li>List of governing body i.e. board of trustees members with their contact details</li>
                                    <li>A certified copy of the Trust Deed/ Memorandum of Association and produce original copy for verification</li>
                                    <li>Details of donations made since inception/ during last three years.</li>
                                    <li>Please attach details of donations received, including corpus donation, received since inception/ during last three years.</li>
                                    <li>Please attach details of your bank accounts including name of the bank, branch, type of account and number of account.</li>
                                    <li>Passport size photo of each member (2 nos.)</li>
                                    <h1 className="price"><span>Price : </span>18500 <span>excl.of gov tax</span></h1>
                                    <h3>Government fee Approx 1500-4000 depending upon share capital or state of registered office</h3>
                                </div>
                            ):(<div className="no">No</div>)}
                            {(parseInt(sid.id)===8)?(
                                <div className="wbox">
                                    <h1>Proprietorship Required Documents:</h1>
                                    <li>Color Photo</li>
                                    <li>Applicant Pan card</li>
                                    <li>Applicant address Proof</li>
                                    <li>GST certificate</li>
                                    <li>Bank Statement ( Latest Two months )</li>
                                    <h1>Private Limited Required Documents:</h1>
                                    <li>Color Photo</li>
                                    <li>Applicant Pan card</li>
                                    <li>Applicant address Proof</li>
                                    <li>GST certificate</li>
                                    <li>Bank Statement ( Latest Two months )</li>
                                    <li>Company PAN card</li>
                                    <li>Certificate Incorporation</li>
                                    <li>Board of Resolution</li>
                                    <li>Authorized signatory Pan card and address Proof</li>
                                    <h1>Partnership Firm Required Documents:</h1>
                                    <li>Color Photo</li>
                                    <li>Applicant Pan card</li>
                                    <li>Applicant address Proof</li>
                                    <li>GST certificate</li>
                                    <li>Bank Statement ( Latest Two months )</li>
                                    <li>Authorization Later</li>
                                    <li>Authorized signatory Pan card and address Proof</li>
                                    <li>Partnership deed</li>
                                    <h1>Limited Liability partnership Required Documents:</h1>
                                    <li>Color Photo</li>
                                    <li>Applicant Pan card</li>
                                    <li>Applicant address Proof</li>
                                    <li>GST certificate</li>
                                    <li>Bank Statement ( Latest Two months )</li>
                                    <li>Company PAN card</li>
                                    <li>Certificate Incorporation</li>
                                    <li>Board of Resolution</li>
                                    <li>Authorized signatory Pan card and address Proof</li>
                                    <li>LLP Agreement</li>
                                    <h1>Government Org Required Documents:</h1>
                                    <li>Color Photo</li>
                                    <li>Applicant Pan card</li>
                                    <li>Applicant address Proof</li>
                                    <li>Applicant Govt ID card</li>
                                    <li>Authorization Letter</li>
                                    <li>Authorized signatory color photo</li>
                                    <li>Authorized signatory Pan card</li>
                                    <li>Authorized signatory address proof</li>
                                    <li>Authorized signatory Govt ID card</li>
                                    <h1>NGO and Trust Required Documents:</h1>
                                    <li>Applicant address Proof</li>
                                    <li>GST certificate</li>
                                    <li>Applicant Color photograph</li>
                                    <li>Authorized signatory id proof</li>
                                    <li>Trust Deed</li>
                                    <li>Organizational ID card</li>
                                    <li>Trust/NGO pan card</li>
                                    <h1>Foreigner Organization Required Documents:</h1>
                                    <li>Color Photograph</li>
                                    <li>Passport</li>
                                    <li>Address Proof (Latest two months)</li>
                                    <li>Company bank statement (Latest two months)</li>
                                    <li>Company registration copy</li>
                                    <li>MOA & AOA</li>
                                    <li>Foreigner Mobile number with country code</li>
                                    <li>Note- If documents is not in English than need translation certificate with apostle.</li>
                                    <h1>Foreigner Individual Required Documents:</h1>
                                    <li>Color Photograph</li>
                                    <li>Passport</li>
                                    <li>Address Proof (Latest two months)</li>
                                    <li>Note- If documents is not in English than need translation certificate with apostle.</li>
                                    <h1 className="price"><span>Price : </span>Class 3 Individual for 2 years Rs. 1200 <span>excl.of gov tax</span></h1>
                                    <h1 className="price"><span>Price : </span>Class 3 2yrs Signing + encryption Rs. 2400 <span>excl.of gov tax</span></h1>
                                    <h3>Government fee Approx 1500-4000 depending upon share capital or state of registered office</h3>
                                </div>
                            ):(<div className="no">No</div>)}
                        </div>        
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Serviceinfo
