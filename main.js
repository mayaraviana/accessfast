const allContentH2 = document.querySelectorAll('.content h2');

const contentSumario = document.querySelector('.sumario ul');

allContentH2.forEach( (item) => {

  let sumarioItemLi = document.createElement('li');

  let sumarioItemLink = document.createElement('a');
  sumarioItemLink.textContent = item.innerHTML;
  let sumarioItemHref = item.getAttribute('id');


  contentSumario.appendChild(sumarioItemLi);
  sumarioItemLi.appendChild(sumarioItemLink);
  sumarioItemLink.setAttribute('href', `#${sumarioItemHref}`);
  
});