function customrender(reactElement, container){
    // version 01
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
*/

// version 02
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;

for (const prop in reactElement.props) {
   if(prop === 'children')continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
}
container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click and Open Google..'
}


const mainContainer = document.getElementById('root');
customrender(reactElement, mainContainer);
