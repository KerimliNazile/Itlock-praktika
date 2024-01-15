import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    const fetchdetails = async () => {
        const res = await fetch(`http://localhost:5000/purples/${id}`)
        const json = await res.json()
        setDetail(res)
    }
    useEffect(() => {
        fetchdetails()
    }, [])
    return (
        <>
            {detail ? <>
                <div className="Detail">
                    <h1>{detail.soyad}</h1>
                </div></> : ''


            }
        </>
    )
}

export default Detail