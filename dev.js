// CSS styles for the developer info block
const styles = `
  .developer-credentials {
    align-items: center;
    bottom: 10px;
    cursor: pointer;
    display: flex;
    font-family: monospace;
    position: fixed;
    right: 10px;
  }

  .developer-line {
    align-items: center;
    background-color: white;
    border-radius: 0 5px 5px 0;
    display: flex;
    font-size: 10px;
    height: 50px;
    justify-content: center;
    overflow: hidden;
    padding: 6px 3px;
    position: relative;
    transition: width 0.3s ease;
    width: 20px;
    z-index: 1;
  }

  .developer-text {
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .developer-info {
    align-items: center;
    background: white;
    border-radius: 5px 0 0 5px;
    bottom: 0;
    display: flex;
    display: none;
    font-size: 10px;
    height: 62px;
    justify-content: center;
    left: -52px;
    opacity: 0;
    padding-left: 10px;
    position: absolute;
    transition: transform 0.3s ease, opacity 0.1s ease, width 0.3s ease;
    white-space: nowrap;
    z-index: 0;
  }

  .developer-info a {
    color: black;
  }

  .developer-credentials:hover .developer-info,
  .developer-credentials:active .developer-info {
    display: flex;
    opacity: 1;
    transform: translateX(-20px);
  }
`;

// Create a style element and set the CSS styles
const styleElement = document.createElement('style');
styleElement.textContent = styles;

// Append the style element to the head of the document
document.head.appendChild(styleElement);

// Create the developer credentials container
const developerContainer = document.createElement('div');
developerContainer.classList.add('developer-credentials');

// Create the developer line
const developerLine = document.createElement('div');
developerLine.classList.add('developer-line');

// Create the developer text
const developerText = document.createElement('p');
developerText.classList.add('developer-text');
developerText.textContent = '[dev]';

// Append the developer text to the developer line
developerLine.appendChild(developerText);

// Create the developer info
const developerInfo = document.createElement('div');
developerInfo.classList.add('developer-info');

// Create the developer link
const developerLink = document.createElement('a');
developerLink.href = 'https://tseivo.com/b/punkit';
developerLink.target = '_blank';
developerLink.textContent = '(=^･ω･^=)';

// Append the developer link to the developer info
developerInfo.appendChild(developerLink);

// Append the developer line and info to the developer container
developerContainer.appendChild(developerLine);
developerContainer.appendChild(developerInfo);

// Append the developer container to the body
document.body.appendChild(developerContainer);

developerLink.href = 'https://tseivo.com/b/punkit';
developerLink.target = '_blank';
developerLink.textContent = '(=^･ω･^=)';
developerInfo.appendChild(developerLink);

// Log a message to the console
console.log('[dev]', developerLink.href);