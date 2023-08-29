"use client"
import '@/app/payment/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "@/app/payment/spinner.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

interface SearchParams {
    totalPrice: string;
    arrival: string;
    city: string;
    seatle: string[];
  }


const AnotherPage = ({ searchParams } : { searchParams: SearchParams }) => {
    const {totalPrice,arrival,city,seatle}=searchParams;
    const [isLoading, setIsLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
   
      const router = useRouter();

      const handleGoBack = () => {
        router.back();
      };  
      
      const  submitHandle =async (event:any) =>{
        event.preventDefault();

        const card_number=event.target[0].value;
        const card_date=event.target[1].value;
        const card_password=event.target[2].value;
        const card_name=event.target[3].value;

    
        try {

            if(card_number === '' || card_date === '' || card_password === '' || card_name === ''){
                return toast("lütfen alanları doldurunuz")
            }else{
                
                setIsLoading(true);
                  
                setTimeout(()=>{
                    setIsLoading(false);
                    setIsModal(true);
                    setTimeout(()=>{
                        router.push('/');
                    },2000)
                },1000)

              
                return;
            }
            
        } catch (error) {
            
        }


      
      
      }
    
    return(
    <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-3">
                <div className="card p-3">
                    <div className="img-box">
                        <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                    </div>
                    <div className="number">
                        <label className="fw-bold" htmlFor="">**** **** **** 1060</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
                <div className="card p-3">
                    <div className="img-box">
                        <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                            alt="" />
                    </div>
                    <div className="number">
                        <label className="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
                <div className="card p-3">
                    <div className="img-box">
                        <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                            alt="" />
                    </div>
                    <div className="number">
                        <label className="fw-bold">**** **** **** 1060</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small><span className="fw-bold">Expiry date:</span><span>10/16</span></small>
                        <small><span className="fw-bold">Name:</span><span>Kumar</span></small>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-4">
                <div className="card p-3">
                    <p className="mb-0 fw-bold h4">Payment Methods</p>
                </div>
            </div>
            <div className="col-12">
                <div className="card p-3">
                  
                    <div className="card-body border p-0">
                        <p>
                            <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold">Credit Card</span>
                                <span className="">
                                    <span className="fab fa-cc-amex"></span>
                                    <span className="fab fa-cc-mastercard"></span>
                                    <span className="fab fa-cc-discover"></span>
                                </span>
                            </a>
                        </p>
                        <div className="collapse show p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className="col-lg-5 mb-lg-0 mb-3">
                                    <p className="h4 mb-0">Summary</p>
                                    <p className="mb-0"><span className="fw-bold">Sefer:</span><span className="c-green">{city} {arrival} </span>
                                    </p>
                                    <p className="mb-0">
                                        <span className="fw-bold">Price:</span>
                                        <span className="c-green">{totalPrice} TL</span>
                                        
                                    </p>
                                    <p className="mb-0">
                                        <span className="fw-bold">Koltuk numaraları:</span>
                                        <span className="c-green">{typeof seatle === "string" ? seatle : seatle.join('-')}</span>
                                        
                                    </p>
                                   
                                </div>
                                <div className="col-lg-7">
                                    <form onSubmit={submitHandle} className="form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form__div">
                                                    <input  name='card_number' type="text" className="form-control" placeholder=" " />
                                                    <label htmlFor="" className="form__label">Card Number</label>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form__div">
                                                    <input name='card_date'  type="text" className="form-control" placeholder=" " />
                                                    <label htmlFor="" className="form__label">MM / yy</label>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form__div">
                                                    <input name='card_password'  type="password" className="form-control" placeholder=" " />
                                                    <label htmlFor="" className="form__label">cvv code</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form__div">
                                                    <input name='card_name' type="text" className="form-control" placeholder=" " />
                                                    <label htmlFor="" className="form__label">name on the card</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                    <input className="btn btn-primary w-100" type='submit'   value="Gönder" />
                                              
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div onClick={handleGoBack}  className="btn btn-primary payment">
                    Bilet Ekranına Dön 
                </div>
            </div>
         { isLoading   && 
          <div className="modal-overlay">
      
         <div className="spinner-container">
                <div className="loading-spinner">
                
                </div>
        </div>
        </div>
        }
        { isModal  && 
          <div className="modal-overlay">
          <div className="modals">
            <div className='succesfull-message'>
                Ödemeniz Başarıla Alınmıştır
            </div>
        </div>
        </div>
        }
         <ToastContainer />
     
        </div>
    </div>
    )
  }
  
  export default AnotherPage