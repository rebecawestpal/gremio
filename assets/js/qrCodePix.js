const btnQrCodePix = document.querySelector('#btnQrCode')
const qrCodePixContent = document.querySelector('#qrCodeContainer')

btnQrCodePix.addEventListener('click', () => {
    qrCodePixContent.style.display = 'block'
})