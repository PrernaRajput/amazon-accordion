document.addEventListener( 'DOMContentLoaded', () => {
    const multiSelect = document.getElementById( 'multiselect' );
    const accordions = document.querySelectorAll( '.accordion' );

    accordions.forEach( ( accordion, index ) => {
        const desc = accordion.querySelector( '.description' );
        const expandIcon = accordion.querySelector( '.expand-icon' );
        const collapseIcon = accordion.querySelector( '.collapse-icon' );

        const isFirst = index === 0;
        desc.style.display = isFirst ? 'block' : 'none';
        expandIcon.style.display = isFirst ? 'none' : 'inline-block';
        collapseIcon.style.display = isFirst ? 'inline-block' : 'none';

        accordion.querySelector( '.title-section' ).addEventListener( 'click', () => {
            const isExpanded = getComputedStyle( desc ).display === 'block';

            if ( !multiSelect.checked ) {
                accordions.forEach( ( acc ) => {
                    const d = acc.querySelector( '.description' );
                    const ei = acc.querySelector( '.expand-icon' );
                    const ci = acc.querySelector( '.collapse-icon' );
                    d.style.display = 'none';
                    ei.style.display = 'inline-block';
                    ci.style.display = 'none';
                } );

                desc.style.display = 'block';
                expandIcon.style.display = 'none';
                collapseIcon.style.display = 'inline-block';
            } else {
                if ( isExpanded ) {
                    desc.style.display = 'none';
                    expandIcon.style.display = 'inline-block';
                    collapseIcon.style.display = 'none';
                } else {
                    desc.style.display = 'block';
                    expandIcon.style.display = 'none';
                    collapseIcon.style.display = 'inline-block';
                }
            }
        } );
    } );
} );
