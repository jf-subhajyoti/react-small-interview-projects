import React from 'react';

import './Paggination.css';

const Paggination = ({ selectedPage = 1, setPage = () => { }, totalPage = 0 }) => {
    const handlePageChange = (pageNo) => {
        if(pageNo < 1 || pageNo > totalPage) return;
        if (selectedPage === pageNo) return;
        else setPage(pageNo)
    }
    return (
        <div className='page_wrapper'>
            <div className={`${selectedPage === 1 ? 'page_btn disabled' : 'page_btn'}`} onClick={() => handlePageChange(selectedPage-1)}>⏮️</div>
            {
                Array.from({ length: totalPage })?.map((ele, index) => {
                    return (
                        <div className={`${index + 1 === selectedPage ? 'page_btn selected' : 'page_btn'}`} onClick={() => {
                            handlePageChange(index + 1)
                        }} key={index}>{index + 1}</div>
                    )
                })
            }
            <div className={`${selectedPage === totalPage ? 'page_btn disabled' : 'page_btn'}`} onClick={() => handlePageChange(selectedPage + 1)}>⏭️</div>
        </div>
    )
}

export default Paggination
