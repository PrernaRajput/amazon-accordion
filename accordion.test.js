/**
 * @jest-environment jest-environment-jsdom
 */

document.body.innerHTML = `
  <div class="accordion" data-testid="1">
    <div class="title-section" role="button" tabindex="0" aria-controls="desc-1" id="btn-1">
      <div class="title">Test Book</div>
      <div class="expand-icon"></div>
      <div class="collapse-icon"></div>
    </div>
    <div class="description" id="desc-1" role="region" aria-labelledby="btn-1">
      Test description content
    </div>
  </div>
  <div class="multi-select">
    <input type="checkbox" id="multiSelect" />
  </div>
`;
require('./js/script');

describe('Accordion behavior', () => {
  const titleSection = document.querySelector('.title-section');
  const desc = document.querySelector('.description');
  const expandIcon = document.querySelector('.expand-icon');
  const collapseIcon = document.querySelector('.collapse-icon');
  const multiSelect = document.getElementById('multiSelect');

  beforeEach(() => {
    desc.style.display = 'none';
    expandIcon.style.display = 'inline-block';
    collapseIcon.style.display = 'none';
  });

  test('initial state: description is hidden, expand icon shown', () => {
    expect(desc.style.display).toBe('none');
    expect(expandIcon.style.display).toBe('inline-block');
    expect(collapseIcon.style.display).toBe('none');
  });

  test('clicking title expands the accordion', () => {
    titleSection.click();
    expect(desc.style.display).toBe('block');
    expect(expandIcon.style.display).toBe('none');
    expect(collapseIcon.style.display).toBe('inline-block');
  });

  test('clicking title again collapses the accordion', () => {
    titleSection.click(); // open
    titleSection.click(); // close
    expect(desc.style.display).toBe('none');
    expect(expandIcon.style.display).toBe('inline-block');
    expect(collapseIcon.style.display).toBe('none');
  });

  test('multiSelect checkbox affects multiple accordion toggle behavior', () => {
    multiSelect.checked = true;
    titleSection.click();
    expect(desc.style.display).toBe('block');
  });
});
