export const Success = [
   'color: green'
  , 'display: block'
  , 'font-size: 1.5em'
  , 'margin-bottom: 10px'
].join(';');

export const Danger = [
   'color: red'
  , 'display: block'
  , 'font-size: 1.5em'
  , 'margin-top: 10px'
].join(';');

export const Observed = [
  'color: black'
  , 'display: block'
  , 'font-size: 1.1em'
  , 'padding: 0px'
].join(';');

export const Normal = [
  'color: black'
  , 'display: block'
  , 'font-size: 1.5em'
  , 'font-weight: bold'
  , 'padding: 0px'
  , 'margin: 0px'
].join(';');


export function clog(text,type){
  console.log("%c" + text, type);
}

export function csep(){
  console.groupCollapsed();
  console.log("%c======================================", Normal);
}
export function csepE(){
  console.log("%c======================================", Normal);
  console.groupEnd();

}
