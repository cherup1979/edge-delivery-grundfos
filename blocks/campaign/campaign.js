import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */

  const campaigncontainer = document.createElement('div');
  campaigncontainer.className = 'campaign-container';
  const campaignheader = document.createElement('div');
  campaignheader.className = 'campaign-header';
  const campaigntitle = document.createElement('h2');
  campaigntitle.classList.add('campaign-title');
  campaigntitle.textContent = block.querySelector('h2')?.textContent || 'Campaign Title';
  const campaigndescription = document.createElement('p');
  campaigndescription.classList.add('campaign-description');
  campaigndescription.textContent = block.querySelector('p')?.textContent || 'Campaign Description';

  campaigncontainer.append(campaignheader);
  campaignheader.append(campaigntitle);
  campaigncontainer.append(campaigndescription);
  
  /*const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });


  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';*/
  block.textContent = '';
  block.append(campaigncontainer);
}
