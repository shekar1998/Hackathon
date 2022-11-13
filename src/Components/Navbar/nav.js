import './Nav.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import demo from '../../public/demo.csv';
import CsvDownload from 'react-json-to-csv'
import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
    const state = useSelector(state => state.Item.Item);
    const [ResultData, setResultData] = useState(false);

    const isEmpty = (elementName) => {
        let typeOfElement = typeof elementName;
        if (
            elementName &&
            undefined !== elementName &&
            "undefined" !== elementName &&
            null !== elementName &&
            typeOfElement !== "undefined"
        ) {
            if (typeOfElement === "string") {
                return elementName.trim() === "";
            }
            if (typeOfElement === "object") {
                return Object.entries(elementName).length === 0 ? true : false;
            }
        } else {
            return true;
        }
    };

    useEffect(() => {
        if (!isEmpty(state)) {
            setResultData(true);
        } else {
            setResultData(false);

        }
    }, [state])

    const handleDownload = () => {
        return <CsvDownload data={state} />

    }

    const cssNav = {width:' 85%',textAlign: 'left'};


    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item' style={ResultData ? cssNav : undefined }><img src='https://cdn-icons-png.flaticon.com/512/4501/4501249.png' alt='Logo' title='Elite Loyalty Gauge' /><span>Elite Loyalty Gauge</span></div>
            <Link to="/"> 
            <div className='navbar__item'>
                <img className='download__img' title="Download Sample data" src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Home" /></div></Link>
            {
                (ResultData && (window.location.href.toLowerCase().includes('/result')) )?
                    <div className='navbar__title navbar__item'>
                        <CsvDownload contentEditable='true'  style={{width:'25px', height:'25px', background:'transparent', color:'transparent', border:'none',cursor:'pointer'}} data={state}><img className='download__img' src='https://cdn-icons-png.flaticon.com/512/5490/5490449.png' alt='Logo' title='Elite Loyalty Gauge' /></CsvDownload>
                    </div>
                    : <Link to={demo} target="_blank"><div className='navbar__item' download><img className='download__img' title="Download Sample data" src="https://cdn-icons-png.flaticon.com/512/5490/5490449.png" alt="Dowload Smaple Data" /></div></Link>
            }

        </header>
    )
}