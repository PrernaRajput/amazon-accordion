document.addEventListener('DOMContentLoaded', function () {
  const multiSelect = document.getElementById('multiSelect');
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion, index) => {
    const desc = accordion.querySelector('.description');
    const expandIcon = accordion.querySelector('.expand-icon');
    const collapseIcon = accordion.querySelector('.collapse-icon');

    const isFirst = index === 0;
    desc.style.display = isFirst ? 'block' : 'none';
    expandIcon.style.display = isFirst ? 'none' : 'inline-block';
    collapseIcon.style.display = isFirst ? 'inline-block' : 'none';

    accordion.querySelector('.title-section').addEventListener('click', function () {
      const isExpanded = desc.style.display === 'block';

      if (!multiSelect.checked) {
        accordions.forEach(acc => {
          acc.querySelector('.description').style.display = 'none';
          acc.querySelector('.expand-icon').style.display = 'inline-block';
          acc.querySelector('.collapse-icon').style.display = 'none';
        });
      }

      if (isExpanded) {
        desc.style.display = 'none';
        expandIcon.style.display = 'inline-block';
        collapseIcon.style.display = 'none';
      } else {
        desc.style.display = 'block';
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'inline-block';
      }
    });
  });
});