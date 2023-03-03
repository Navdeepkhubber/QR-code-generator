import QRCode from 'qrcode';
import { useState } from "react";
import './index.css';

function App() {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width:800,
      margin: 2,
      color: {
        dark: '#335383FF',
        light: '#EEEEEEFF'
      }
    }, (err, url) => {
      if(err) return console.error(err)
      console.log(url)
      setQr(url)
    })
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>

    <div className='field'>
      <input type="text"
      placeholder="https://www.google.com"
      value={url}
      onChange={e => setUrl(e.target.value)}
     />

     <button className="css-button-retro--sand" onClick={GenerateQRCode}>Generate</button>
     </div>
    {
      qr && <>
      <img src={qr}/>
      <a href ={qr} download="qrcode.png">Download</a>
      </>
    }
    </div>
  );
}

export default App;
