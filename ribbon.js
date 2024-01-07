const githubForkRibbon = document.createElement('a');
githubForkRibbon.classList.add('github-fork-ribbon');
githubForkRibbon.href = 'https://github.com/lilpunkit/plastate';
githubForkRibbon.setAttribute('data-ribbon', 'Fork me on GitHub');
githubForkRibbon.title = 'Fork me on GitHub';
githubForkRibbon.textContent = 'Fork me on GitHub';

// Append the GitHub fork ribbon to the body
document.body.appendChild(githubForkRibbon);