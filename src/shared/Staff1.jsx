import { useState } from 'react'; //hook

import './Staff.css';

export function Staff(props) { //props là READ ONLY
    const [toggleDetail, setToggleDetail] = useState(false); //state có thể thay đổi
    //Trong React KHÔNG thay đổi trực tiếp giá trị của state

    function onClickStaffName() {
        setToggleDetail(!toggleDetail);
    }

    return <div className="staff-wrapper">
        <span className="staff-name" onClick={onClickStaffName}>{props.name}</span>
        {
            toggleDetail
                ? <div className='staff-details'>
                    cái div này chính là cái chi tiết xổ xuống
                </div>
                : null
        }
    </div>
}
