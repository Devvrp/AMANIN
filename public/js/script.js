document.addEventListener('DOMContentLoaded', function() {
    const anonymousRadios = document.querySelectorAll('input[name="anonymous"]');
    const reporterInfoFields = document.getElementById('reporter-info-fields');

    if (anonymousRadios.length > 0 && reporterInfoFields) {
        function toggleReporterInfo() {
            if (document.getElementById('anon_no').checked) {
                reporterInfoFields.style.display = 'block';
            } else {
                reporterInfoFields.style.display = 'none';
            }
        }

        anonymousRadios.forEach(radio => {
            radio.addEventListener('change', toggleReporterInfo);
        });

        toggleReporterInfo();
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                accordionItem.classList.toggle('active');
            });
        });
    }
});