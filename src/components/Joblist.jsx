import { Container, Heading} from '@chakra-ui/react';
import React from 'react';
import JobTile from './JobTile';
import Newslettertile from './Newslettertile';

const Joblist = () => {
    const jobs=[
        {id:1,company:'Talewind',title:'Lead Game Developer',role:'Mid,Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'},
        {id:2,company:'JumpSearch',title:'Senior Software Engineer',role:'Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75'},
        {id:3,company:'JumpSearch',title:'Senior Software Engineer',role:'Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75'},
        {id:4,company:'JumpSearch',title:'Senior Software Engineer',role:'Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75'},
        {id:5,company:'JumpSearch',title:'Senior Software Engineer',role:'Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75'},
        {id:6,company:'Automio',title:'Senior Software Engineer',role:'Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=1920&q=75'},
        {id:7,company:'Automio',title:'Engineering Manager',role:'Manager,Director',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=1920&q=75'},
        {id:8,company:'Automio',title:'Engineering Manager',role:'Manager,Director',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=1920&q=75'},
        {id:9,company:'eTeam',title:'Engineering Manager',role:'Manager,Director',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75'},
        {id:10,company:'eTeam',title:'Full Stack Javascript Developer',role:'Mid',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=1920&q=75'},
        {id:11,company:'eTeam',title:'Full Stack Javascript Developer',role:'Mid',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=1920&q=75'},
        {id:12,company:'eTeam',title:'Full Stack Javascript Developer',role:'Mid',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F5588c68a-7beb-4004-96ac-11b2ba547e5c&w=1920&q=75'},
        {id:13,company:'Tulip',title:'Head Of Engineering',role:'Mid,Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75'},
        {id:14,company:'Tulip',title:'Head Of Engineering',role:'Mid,Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75'},
        {id:15,company:'Tulip',title:'Head Of Engineering',role:'Mid,Senior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75'},
        {id:16,company:'Tulip',title:'Software Engineer',role:'Junior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F9fcb1732-3ac2-478d-881b-60cc3a1dc093&w=1920&q=75'},
        {id:17,company:'Tulip',title:'Software Engineer',role:'Junior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F9fcb1732-3ac2-478d-881b-60cc3a1dc093&w=1920&q=75'},
        {id:18,company:'Tulip',title:'Software Engineer',role:'Junior',bookmark:false,type:'Full-Time',isRemote:true,isTech:true,isMarketing:false,logo:'https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F9fcb1732-3ac2-478d-881b-60cc3a1dc093&w=1920&q=75'},
    ]
    
    return (
        <Container padding='0px'bg='#edf2f7'maxW='100%'minH='500px' paddingBottom='100px'>
        <Container padding='0px'minH='500px'>
            <Heading>Recent jobs</Heading>
            {jobs.map((job)=>{
                return job.id<7&&<JobTile key={job.id} {...job}/>
            })}
            <Newslettertile/>
            {jobs.map((job)=>{
                return job.id>=7&&<JobTile key={job.id} {...job}/>
            })}

            </Container>
            </Container>
    );
};

export default Joblist;