import { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected ] = useState<any>(null);

  const toggle = (i:any) =>{
    if (selected === i){
      return setSelected (null)
    }
    setSelected(i)
  }

  return (
    <div className="pacote">
      <div className="accordion">
         {data.map((item,i) => (
           <div className="item">
             <div className='titulo' onClick={()=>toggle(i)}>
               <h2>{item.pergunta}</h2>
               <p>{selected === i ? '-' : '+'}</p>
             </div>
             <div className={selected === i ? 'conteudo show' : 'conteudo'}>
                {item.resposta}
             </div>
           </div>
         ))

         }
      </div>

    </div>
  );
}

const data = [
  {
    pergunta: 'Questão 1',
    resposta: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolorum. Eum a ea sint, ullam ipsum consequuntur voluptate maxime mollitia delectus cum officiis unde recusandae! Quod porro qui beatae unde.'
  },
  {
    pergunta: 'Questão 2',
    resposta: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolorum. Eum a ea sint, ullam ipsum consequuntur voluptate maxime mollitia delectus cum officiis unde recusandae! Quod porro qui beatae unde.'
  },
  {
    pergunta: 'Questão 3',
    resposta: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolorum. Eum a ea sint, ullam ipsum consequuntur voluptate maxime mollitia delectus cum officiis unde recusandae! Quod porro qui beatae unde.'
  }
]


export default App;
