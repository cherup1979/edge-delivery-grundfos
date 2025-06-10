export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }else{
       
        //row.textContent = '';
       // col.textContent = '';
        row.classList.add('casestories-row');
        
        const casestorytitle = document.createElement('h2');
        casestorytitle.classList.add('casestories-title');
        casestorytitle.textContent = col.querySelector('h2')?.textContent||'Case Story Title';
        const casestorydescription = document.createElement('p');
        casestorydescription.classList.add('casestories-description');
        casestorydescription.textContent = col.querySelector('p')?.textContent||'Case Story description';
        
        const link = row.querySelector('a');
        const linkElement = document.createElement('a');
        linkElement.href = link.getAttribute('href') || '#';
        linkElement.textContent = link?.textContent || 'Read More';
        linkElement.classList.add('button');
        linkElement.classList.add('secondary');

        const linkElementContainer = document.createElement('p');
        linkElementContainer.classList.add('button-container');
        linkElementContainer.append(linkElement);

       // linkElement.classList.add('button secondary');
        /*linkElement.textContent = link.textContent || 'Read More';
        linkElement.classList.add('button secondary');
        */
        //row.textContent = '';
        row.removeChild(row.querySelector('div'));  
        row.append(linkElementContainer);

        block.prepend(casestorydescription);
        block.prepend(casestorytitle);

      }
    });
  });
  
}
