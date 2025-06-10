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
  

  block.textContent = '';
  block.append(campaigncontainer);
}
