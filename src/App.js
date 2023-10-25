import { useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css'; // Import iziToast CSS


function App() {

  const [quote, setQuote] = useState('"Hard work outweighs talent - every time."');
  const [author, setAuthor] = useState('Kobe Bryant');

  const fetchData = async () => {
    try {
      // Replace the URL with the API you want to fetch data from
      const response = await fetch('https://api.quotable.io/quotes/random');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setQuote(jsonData[0].content)
      setAuthor(jsonData[0].author)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function handleCopy() {
    // Get the text field
    let getQuote = document.getElementById("quote");
    let getAuthor = document.getElementById("author");

    navigator.clipboard.writeText(getQuote.textContent + getAuthor.textContent);

    iziToast.success({
      title: "Copied",
      position: "topRight",
      timeout: 2000,
    });
  }


  return (
    <div className="App">
      <div className='container'>
        <blockquote className='custom_blockquote'>
          <button onClick={fetchData} className='btn float-end btn_color'><i className="fa-solid fa-arrows-rotate btn_color"></i></button>
          <button onClick={handleCopy} className='btn float-end btn_color'><i className="fa-solid fa-copy btn_color"></i></button>
          <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn float-end btn_color'><i className="fa-solid fa-circle-info"></i></button>
          <span className='mb-5' id="symbol">“</span>
          <p id="quote">{quote}</p>
          <hr className='custom_hr' />
          <div id="name"><span id='author'>- {author}</span><br /><span id="detail">Author</span></div>
        </blockquote>
      </div>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="p-3">
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                <div className="d-flex align-items-center">

                  <div className="image">
                    <img alt='Dev' src="/profile.png" className="rounded" width="155" />
                  </div>

                  <div className="ms-3 w-100">

                    <h4 className="mb-0 mt-0">John Anthony Bataller</h4>
                    <span>Computer Engineering Technologist</span>

                    <div className="p-2 mt-2 bg-secondary-custom d-flex justify-content-between rounded text-white stats">
                      <span><i>"Thank you for using my app! <br/> I hope you enjoy it."</i></span>
                    </div>


                    <div className="button mt-2 d-flex flex-row align-items-center">
                      <a href='https://johnanthonybataller.netlify.app/' target='_blank' rel="noreferrer" className="btn btn-outline-dark w-100"><i class="fa-solid fa-file-csv"></i></a>
                      <a href='https://www.linkedin.com/in/johnanthonybataller-ce/' rel="noreferrer" target='_blank' className="btn btn-outline-primary w-100 ms-2"><i class="fa-brands fa-linkedin linked"></i></a>
                      <a href='https://github.com/ja-bataller' target='_blank' rel="noreferrer" className="btn btn-outline-dark w-100 ms-2"><i class="fa-brands fa-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
