import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './styles/styles.css'


const SubjectScore = (props) => {
    const{
       showDescription,
       apiCallDelay,
       subject 
    } = props

    const [data, setData] = useState({
        score: '',
        grade: '',
        desc: ''
    })
    const [showDesc, setShowDesc] = useState(showDescription === true ? true : false)
    const [fetched, setFetched] = useState(false)
    const [apiDelay, setApiDelay] = useState(apiCallDelay > 2 ? (apiCallDelay * 1000) : 2000)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if(!subject){
            setErrorMessage('')
            return
        }

        setFetched(false)
        const timer = setTimeout(() => {
            fetchSubjectScore()
        }, apiDelay)
        return () => clearTimeout(timer)
    },[subject])

    const fetchSubjectScore = async() => {
        let response = await fetch(`https://api-subjectspamscore.marxeed.com/?subject=${subject}`, {
            method: 'GET',
            headers :{
                'Authorization': 'Bearer NGVpYUZOT2dhQnI0WmtKRmdodDJhZXpZSVZGSzd2NldUYW9DYkNn'
            },
        })

        if(response.status !== 200){
            setErrorMessage(response.statusText)
           return
        }

        let responseData = await response.json()
        setData({
            score: responseData?.summary.score,
            grade: responseData?.summary.grade,
            desc: responseData?.summary.desc
        })
        setFetched(true)
        setErrorMessage('')
    }

    if(subject && errorMessage === ''){
        return (
            fetched ? (
                <div className="wrapper">
                    <a  className="display"
                        href={'http://subjectspamscore.dev.marxeed.com/?subject=' + subject}
                        target='_new'
                    >
                        <CircularProgressbar className="display-grade"
                            value={data.score}
                            text={data.grade}
                            strokeWidth={'15'}
                            styles={{
                                text:{
                                    fontSize:'50px', dominantBaseline: 'middle',
                                    fill: data.score >= 75 ? '#388E3C' : data.score >= 60 ? '#42A5F5' : data.score >= 40 ? '#F57C00' : data.score >= 20 ? '#AB47BC' : '#D32F2F'
                                },
                                path:{
                                    stroke: data.score >= 75 ? '#388E3C' : data.score >= 60 ? '#42A5F5' : data.score >= 40 ? '#F57C00' : data.score >= 20 ? '#AB47BC' : '#D32F2F'
                                }
                            }}
                        />
                        <div className="display-score"
                            style={{
                                color: data.score >= 75 ? '#388E3C' : data.score >= 60 ? '#42A5F5' : data.score >= 40 ? '#F57C00' : data.score >= 20 ? '#AB47BC' : '#D32F2F'
                            }}
                        >
                            {data.score}
                        </div>
                    </a>
                {
                    showDesc ? (
                        <div className="display-desc">
                            {data.desc}
                        </div>
                    ) : null
                }
                </div>
            ) :
                <div className="wrapper">
                    <div className="dot-flashing"></div>
                </div>
        )
    } else if (errorMessage !== '') {
        return(
            <div className="wrapper">
                {`Something went wrong with error "${errorMessage}"`}
            </div>
        )
    }
}


export default SubjectScore;