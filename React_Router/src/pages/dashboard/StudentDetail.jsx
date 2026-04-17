import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetail() {
    const { id } = useParams()
  return <h1>Student ID:{id}</h1>
}

export default StudentDetail
