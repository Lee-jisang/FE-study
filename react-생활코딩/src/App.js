import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//리액트에서 사용자 정의 태그(컴포넌트)를 만들때는 반드시 대문자로 시작

function Nav(props){
  const lis = [ ]
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return <nav> 
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Header(props){
  console.log('props',props, props.title)
  return <header> 
    <h1><a href="/" onClick={(event)=>{
       event.preventDefault();//클릭해도 페이지 리로드 안됨
       props.onChangeMode();//Header alert출력
    }}>{props.title}</a></h1>
  </header>
};

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  //const 함수안에서 그값이 바뀌지 않음
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'javascript is ...'},
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode==="READ"){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div> 
      <Header title="REACT" onChangeMode={()=>{
        setMode('WELCOME');//App함수 다시 실행
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
