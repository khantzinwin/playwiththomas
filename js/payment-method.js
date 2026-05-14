const payments=[{name:"KBZ Pay",logo:"https://storage.googleapis.com/pwt-img/payment-method/kbzpay-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/kpay.avif",accountName:"Khant Zin Win",phone:"09795853990"},{name:"Wave Pay",logo:"https://storage.googleapis.com/pwt-img/payment-method/wavepay-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/wavepay.avif",accountName:"Khant Zin Win",phone:"09795853990"},{name:"AYA Pay",logo:"https://storage.googleapis.com/pwt-img/payment-method/ayapay-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/ayapay.avif",accountName:"Khant Zin Win",phone:"09795853990"},{name:"CB Pay",logo:"https://storage.googleapis.com/pwt-img/payment-method/cbpay-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/cbpay.avif",accountName:"Khant Zin Win",phone:"09795853990"},{name:"UAB Pay",logo:"https://storage.googleapis.com/pwt-img/payment-method/uabpay-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/uabpay.avif",accountName:"Khant Zin Win",phone:"09795853990"},{name:"TrueMoney <br> [Thai Bahts]",logo:"https://storage.googleapis.com/pwt-img/payment-method/truemoney-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/truemoney.avif",accountName:"Khant Zin Win",phone:"0825502571"},{name:"Kasikorn Bank <br> [Thai Bahts]",logo:"https://storage.googleapis.com/pwt-img/payment-method/kbank-logo.avif",qr:"https://storage.googleapis.com/pwt-img/payment-method/kbank.avif",accountName:"Khant Zin Win",phone:"183-8-75158-6"}];const container=document.getElementById("paymentMethods");const preview=document.getElementById("paymentPreview");const accountName=document.getElementById("accountName");const phoneNumber=document.getElementById("phoneNumber");payments.forEach((payment,index)=>{const box=document.createElement("div");box.classList.add("payment-box");if(index===0){box.classList.add("active");preview.src=payment.qr;accountName.innerText=payment.accountName;phoneNumber.innerText=payment.phone}
box.innerHTML=`
  
    <div class="payment-left">

      <img src="${payment.logo}" alt="">

      <div class="payment-info">
        <h3>${payment.name}</h3>
        <p>Check QR Code Below</p>
      </div>

    </div>

    <div class="circle"></div>

  `;box.addEventListener("click",()=>{document.querySelectorAll(".payment-box").forEach(item=>item.classList.remove("active"));box.classList.add("active");preview.src=payment.qr;accountName.innerText=payment.accountName;phoneNumber.innerText=payment.phone});container.appendChild(box)})