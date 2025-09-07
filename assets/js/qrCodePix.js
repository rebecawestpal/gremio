const btnQrCodePix = document.querySelector('#btnQrCode')
const qrCodePixContent = document.querySelector('#qrCodeContainer')

btnQrCodePix.addEventListener('click', () => {
    qrCodePixContent.style.display = 'block'
})

// Adicionar feedback visual aos botões
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
        
        // Ajustar layout dos cards de projeto em telas médias
        function adjustProjectLayout() {
            const projectsContainer = document.querySelector('.projectsContainer');
            if (projectsContainer && window.innerWidth >= 769 && window.innerWidth <= 1024) {
                projectsContainer.style.flexDirection = 'row';
                projectsContainer.style.flexWrap = 'wrap';
                projectsContainer.style.justifyContent = 'center';
            }
        }
        
        // Executar na carga e no redimensionamento da janela
        adjustProjectLayout();
        window.addEventListener('resize', adjustProjectLayout);