import React from 'react'
import { useState } from 'react';
import Footer from '../components/home/Footer/Footer';
import HeaderNav from '../components/common/HeaderNav'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react';

export default function RemoveSpaces(){
    
    const [formdata, setformdata] = useState('');
    const [result1, setResult1] = useState();
    const [buttonLoading, setbuttonLoading] = useState(false);
    const [place, setplace] = useState('Start Typing or paste your document here...')
    const [disableBtn, setDisableBtn] = useState(true)

    const handleChange = (e) => {
        setformdata(e.target.value)
        setDisableBtn(false)

    }

    useEffect(() => {
        document.title = "Remove Spaces from strings, words or paragraphs";
    }, []);


    const handleSubmit = async (e) => {
        setDisableBtn(true)
        e.preventDefault();
        setbuttonLoading(true)

        try {
            const result = formdata.trim().replace(/\s+/g, '');

            setResult1(result)
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
        } catch (err) {
            setbuttonLoading(false)
            toast.error('Please! Enter valid text', {
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
        <div className="detail-hero" style={{ 'minHeight': '320px', 'maxHeight': '320px' }}>
            <HeaderNav />
            <div className="detail-hero-content">
                <div className="detail-hero-content-heading">
                    <h1>Remove Spaces from words
                    </h1>
                </div>
                <div className="detail-hero-content-des">
                    <p>Copy your text into our online editor to it will quickly and accurately give you a word and character count
                    </p>
                </div>


            </div>
        </div>
        <div className="tools-for-better-thinking" style={{ padding: '5rem 0px 5rem 0px' }}>
        <div className="container d-flex align-items-center justify-content-center row col-md-8">
            <div className="col-md-12 col-lg-12 offset-lg-6">
                <label className="my-1 mr-2"><h2>Input</h2></label>
                <form className="" role="form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <textarea required className="form-control" placeholder={place} rows="4" id="input-comment"
                            onChange={handleChange} style={{ fontSize: '1.5rem' }}></textarea>
                    </div>
                    <p></p>
                    <div className="d-grid gap-3 col-md-2">

                        <button style={{'borderRadius':'3px'}}
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
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-md-12 col-lg-12 offset-lg-6">
                <i style={{ 'cursor': 'pointer', 'float': 'right', 'padding': '10px' }} onClick={copyText} className="fa-regular fa-clone"></i>
                <div className="form-group">

                    <textarea className="form-control element-code" rows="4" id="input-comment" value={result1}
                        style={{ fontSize: '2rem' }} disabled placeholder='Output' ></textarea>
                </div>


            </div>

        </div>
    </div>
    
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

<div className="text-body">
          <h2>What is Word Counter tool?</h2>
          <p >
          
          WordCounter is an online service that helps you count words and characters in a piece of text. It is a useful tool for writers, editors, students, and anyone else who needs to keep track of the number of words in a document.
          </p>
          <p>Our Word Counter online tool is free to use and can be accessed from any device with an internet connection. All you have to do is copy and paste a piece of text into the text box, and WordCounter will quickly give you a word count and character count. It will also provide an estimated reading time based on the number of words and an approximate speaking time based on the character count.</p>
          <p>WordCounter can be used for a variety of purposes. Writers can use it to make sure their articles, essays, or blog posts meet word limits, and students can use it to ensure that their essays meet word limits as well. It can also be used to quickly analyze a piece of text and get an idea of its length.</p>
         
        </div>

        <Footer />
    </div>)
}