const tabsContainer = document.querySelector('.tabs-container');

tabsContainer.addEventListener("click", ({target}) => {
  const attrName = 'data-for';
  const targetDataForAttr = target.getAttribute(attrName);
  if (!targetDataForAttr) {
    return;
  }

  const activeClassName = 'tabs-container__tab_active';
  
  const activeTab = tabsContainer.querySelector(`.${activeClassName}`);
  activeTab.classList.remove(activeClassName);

  const selectedConsumerCard = document.querySelector(`#${targetDataForAttr}`);
  const parentNode = selectedConsumerCard.parentNode;

  target.classList.add(activeClassName);
  parentNode.insertBefore(selectedConsumerCard, parentNode.childNodes[0]);
})