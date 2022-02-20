import { RepositoryItem } from "./RepositoryItem";

const repository = {
   name: "Jan Urban Neto",
   description: "Forms in React",
   link: "https://github.com/JanUrbanNeto"
}

export function RepositoryList() {
   return (
      <section className="repository-list">
         <h1>Lista de Repositórios</h1>

         <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
         </ul>
      </section>
   )
}