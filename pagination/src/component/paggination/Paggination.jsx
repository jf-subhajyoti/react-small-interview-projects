import React from 'react';

import './Paggination.css';

const Paggination = ({ selectedPage = 0, setPage=() => {}, totalPage = 0}) => {
    console.log(totalPage, '////////////////////')
    const handlePageChange = (pageNo) => {
        if (selectedPage === pageNo) return;
        else setPage(pageNo)
    }
  return (
    <div className='page_wrapper'>
      {
        Array.from({length: totalPage})?.map((ele, index) => {
            return (
                <div className={`${index + 1 === selectedPage ? 'page_btn selected' : 'page_btn' }`} onClick={() => {
                    handlePageChange(index+1)
                }} key={index}>{index+1}</div>
            )
        })
      }
    </div>
  )
}

export default Paggination
