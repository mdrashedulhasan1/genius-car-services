import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg'
import expert2 from '../../images/experts/expert-2.jpg'
import expert3 from '../../images/experts/expert-3.jpg'
import expert4 from '../../images/experts/expert-4.jpg'
import expert5 from '../../images/experts/expert-5.jpg'
import expert6 from '../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        {
            id:1,
            img:expert1,
            name:'Expert1',
        },
        {
            id:2,
            img:expert2,
            name:'Expert2',
        },
        {
            id:3,
            img:expert3,
            name:'Expert3',
        },
        {
            id:4,
            img:expert4,
            name:'Expert4',
        },
        {
            id:5,
            img:expert5,
            name:'Expert5',
        },
        {
            id:6,
            img:expert6,
            name:'Expert6',
        },
    ]
    return (
        <div>
            <h1 style={{textAlign:'center'}}>This is Expert</h1>
            <div className='row g-3'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;