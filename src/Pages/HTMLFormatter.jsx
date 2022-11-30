import React from 'react'
import { useState } from 'react';
import Footer from '../components/home/Footer/Footer';
import Header from '../components/home/Header';
import HeaderNav from '../components/common/HeaderNav'
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'

export default function HTMLFormatter() {

    const [formdata, setformdata] = useState('');
    const [result, setResult] = useState();
    const [buttonLoading, setbuttonLoading] = useState(false);
    const [place, setplace] = useState('Type (or paste) here...')
    const [disableBtn, setDisableBtn] = useState(true)

    const handleChange = (e) => {
       setformdata(e.target.value)
        setDisableBtn(false)
      
    }


    useEffect(() => {
        document.title = "HTML Formatter";
    }, []);

    const handleSubmit = async (e) => {
        setDisableBtn(true)
        e.preventDefault();
        console.log(formdata)
        setbuttonLoading(true)

        var rep = formdata.replace(/\>\</g, '>\n<')
        console.log(rep)
        setResult(rep)
        setbuttonLoading(false)
        toast.success('Success!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const copyText = () => {

        const selct = document.querySelector(".element-code").textContent;
        navigator.clipboard.writeText(selct);
        toast.success('Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }
    return (<div>
        <div className="detail-hero">
            <HeaderNav />
            <div className="detail-hero-content">
                <div className="detail-hero-content-heading">
                    <h1>HTML Formatter
                    </h1>
                </div>
                <div className="detail-hero-content-des">
                    <p>HTML Formatter with our generator tool. Preview the result and copy the generated code to your website.
                    </p>
                </div>


            </div>
        </div>
        <div className="tools-for-better-thinking" style={{ padding: '5rem 0px 5rem 0px' }}>
        <div className="container d-flex align-items-center justify-content-center row col-md-8">
            <div className="col-md-12 col-lg-12 offset-lg-6">
                <label className="my-1 mr-2"><h2>Input HTML</h2></label>
                <form className="" role="form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <textarea required className="form-control" placeholder={place} rows="15" id="input-comment"
                            onChange={handleChange} style={{ fontSize: '1.5rem' }}></textarea>
                    </div>
                    <p></p>
                    <div className="d-grid gap-3 col-md-2">

                        <button style={{'borderRadius':'3px','width':'150px'}}
                            className={`${disableBtn
                                ? "btn-disable"
                                : ""
                                }`}
                            disabled={`${disableBtn ? "true" : ""
                                }`}
                            type="submit"
                        >
                            {buttonLoading ? (
                                <div className="spinner-border text-dark" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                "Format HTML"
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-md-12 col-lg-12 offset-lg-6">
                <i style={{ 'cursor': 'pointer', 'float': 'right', 'padding': '10px' }} onClick={copyText} className="fa-regular fa-clone"></i>
                <div className="form-group">

                    <textarea className="form-control element-code" rows="15" id="input-comment" value={result}
                        style={{ fontSize: '2rem' }} disabled placeholder='Output' ></textarea>
                </div>


            </div>

        </div>
    </div>
        <Footer />
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>)
}